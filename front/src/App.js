import React, { useEffect } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { fetchPosts } from "./slice/postsSlice"
import { setSlidesCount } from "./slice/sliderSlice"
import "./App.css"
import Error from "./components/Error"
import Loading from "./components/Loading"
import Navbar from "./components/Navbar"
import Slider from "./components/Slider"
import LinksAndControls from "./components/LinksAndControls"
import PageNotFound from "./components/PageNotFound"

export default function App() {
    const error = useSelector((state) => state.posts.error)
    const loading = useSelector((state) => state.posts.loading)
    const posts = useSelector((state) => state.posts.data)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchPosts())
        dispatch(setSlidesCount(posts.length))
    }, [])

    if (error) return <Error />
    else if (loading) return <Loading />
    else {
        return (
            <Router>
                <Switch>
                    <Route path="/" exact>
                        <div className="main">
                            <Navbar />
                            <Slider />
                            <LinksAndControls />
                        </div>
                    </Route>
                    <Route path="*" component={PageNotFound} />
                </Switch>
            </Router>
        )
    }
}
