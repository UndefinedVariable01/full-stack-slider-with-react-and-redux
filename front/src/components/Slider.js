import React, { useEffect, useRef, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import "./Slider.css"
import { sliderMove, setSlideIndex, setNewWindowWidth } from "../slice/sliderSlice"

export default function Slider() {
    const posts = useSelector((state) => state.posts.data)
    const slidesCount = useSelector((state) => state.slider.slidesCount)
    const slideIndex = useSelector((state) => state.slider.slideIndex)
    const transforming = useSelector((state) => state.slider.transforming)
    const windowWidth = useSelector((state) => state.slider.windowWidth)

    const dispatch = useDispatch()

    const slider = useRef()
    const [touchStartPosition, setTouchStartPosition] = useState(0)

    useEffect(() => {
        slider.current.style.transform = `translateX(-${slideIndex * (100 / slidesCount)}%)`
    }, [slideIndex, slidesCount])

    useEffect(() => {
        window.addEventListener("resize", () => dispatch(setNewWindowWidth(window.innerWidth)))
    }, [])

    useEffect(() => {
        if (windowWidth >= 780) dispatch(setSlideIndex(Math.floor(slideIndex / 2) * 2))
    }, [windowWidth])

    const swipeToPrevSlide = () => !transforming && slideIndex > 0 && dispatch(sliderMove(-1, 250))
    const swipeToNextSlide = () => !transforming && slideIndex < slidesCount - 1 && dispatch(sliderMove(1, 250))

    function handleTouchStart(e) {
        setTouchStartPosition(e.touches[0].clientX)
    }

    function handleTouchEnd(e) {
        const positionDifference = touchStartPosition - e.changedTouches[0].clientX
        if (positionDifference <= -40) swipeToPrevSlide()
        else if (positionDifference >= 40) swipeToNextSlide()
    }

    return (
        <div>
            <div className="slider-container">
                <div className="slider" ref={slider} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
                    {posts.map((post) => (
                        <div className="card" key={post._id}>
                            <div className="card-image">{posts.length >= 1 && <img src={post.imageUrl} alt={post.title} />}</div>
                            <h1>{post.title}</h1>
                            <p>{post.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
