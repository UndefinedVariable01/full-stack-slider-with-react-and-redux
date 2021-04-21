import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { Provider } from "react-redux"
import { configureStore } from "@reduxjs/toolkit"
import postsReducer from "./slice/postsSlice"
import sliderReducer from "./slice/sliderSlice"

const store = configureStore({
    reducer: {
        posts: postsReducer,
        slider: sliderReducer,
    },
})

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
)
