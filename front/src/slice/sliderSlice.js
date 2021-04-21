import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    slidesCount: 0,
    slideIndex: 0,
    transforming: false,
    windowWidth: window.innerWidth,
}

const sliderSlice = createSlice({
    name: "slider",
    initialState,
    reducers: {
        setSlidesCount: (state, action) => {
            state.slidesCount = action.payload
        },
        setSlideIndex: (state, action) => {
            state.slideIndex = action.payload
        },
        addToSlideIndex: (state, action) => {
            state.slideIndex += action.payload
        },
        startTransforming: (state) => {
            state.transforming = true
        },
        finishTransforming: (state) => {
            state.transforming = false
        },
        setNewWindowWidth: (state, action) => {
            state.windowWidth = action.payload
        },
    },
})

export const {
    setSlidesCount,
    setSlideIndex,
    addToSlideIndex,
    startTransforming,
    finishTransforming,
    setNewWindowWidth,
} = sliderSlice.actions

export const sliderMove = (positionDiff, delay) => (dispatch) => {
    dispatch(addToSlideIndex(positionDiff))
    dispatch(startTransforming())
    const transformComplition = setTimeout(() => {
        clearTimeout(transformComplition)
        dispatch(finishTransforming())
    }, delay)
}

export default sliderSlice.reducer
