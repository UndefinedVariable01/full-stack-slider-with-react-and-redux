import { createSlice } from "@reduxjs/toolkit"
import { setSlidesCount } from "./sliderSlice"

const initialState = {
    data: [],
    loading: true,
    error: false,
}

const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        setPostsData: (state, action) => {
            state.data = action.payload
        },
        isLoading: (state) => {
            state.loading = true
        },
        notLoading: (state) => {
            state.loading = false
        },
        errorFound: (state) => {
            state.error = true
        },
    },
})

export const { setPostsData, isLoading, notLoading, errorFound } = postsSlice.actions

export const fetchPosts = () => {
    return async (dispatch) => {
        try {
            dispatch(isLoading())

            const res = await fetch("/api/posts")
            const posts = await res.json()
            dispatch(setPostsData(posts))
            dispatch(setSlidesCount(posts.length))

            dispatch(notLoading())
        } catch (err) {
            dispatch(errorFound())
        }
    }
}

export default postsSlice.reducer
