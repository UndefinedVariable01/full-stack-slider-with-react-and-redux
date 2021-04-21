import React from "react"
import LinkArrow from "./icons/LinkArrow"

export default function Error() {
    return (
        <div className="error">
            <h1>Oops Something Went Wrong!</h1>
            <a href="/">
                <span>Reload This Page</span> <LinkArrow />
            </a>
        </div>
    )
}
