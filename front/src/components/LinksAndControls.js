import React, { useEffect, useRef } from "react"
import { useSelector, useDispatch } from "react-redux"
import "./LinksAndControls.css"
import { sliderMove } from "../slice/sliderSlice"
import InstagramIcon from "./icons/InstagramIcon"
import FacebookIcon from "./icons/FacebookIcon"
import TwitterIcon from "./icons/TwitterIcon"

export default function LinksAndControls() {
    const slidesCount = useSelector((state) => state.slider.slidesCount)
    const slideIndex = useSelector((state) => state.slider.slideIndex)
    const transforming = useSelector((state) => state.slider.transforming)

    const dispatch = useDispatch()

    const progressBar = useRef()

    useEffect(() => {
        progressBar.current.style.transform = `translateX(${(slideIndex / 2) * 100}%)`
    }, [slideIndex])

    const slidePrevOnLarge = () => !transforming && slideIndex > 0 && dispatch(sliderMove(-2, 500))
    const slideNextOnLarge = () => !transforming && slideIndex < slidesCount - 2 && dispatch(sliderMove(2, 500))

    return (
        <div className="links-and-controls container">
            <div className="social-media">
                <a href="/">
                    <InstagramIcon />
                </a>
                <a href="/">
                    <FacebookIcon />
                </a>
                <a href="/">
                    <TwitterIcon />
                </a>
            </div>
            <div className="slider-controls">
                <div className={`to-left-btn ${slideIndex === 0 && "disabled-btn"}`} onClick={slidePrevOnLarge}>
                    <div className="top-bar btn-bar" />
                    <div className="bottom-bar btn-bar" />
                </div>
                <div className="progress">
                    <p>
                        {slideIndex / 2 + 1} / {slidesCount / 2}
                    </p>
                    <div className="bar">
                        <div style={{ width: `${100 / (slidesCount / 2)}%` }} ref={progressBar} />
                    </div>
                </div>
                <div className={`to-right-btn ${slideIndex >= slidesCount - 2 && "disabled-btn"}`} onClick={slideNextOnLarge}>
                    <div className="top-bar btn-bar" />
                    <div className="bottom-bar btn-bar" />
                </div>
            </div>
        </div>
    )
}
