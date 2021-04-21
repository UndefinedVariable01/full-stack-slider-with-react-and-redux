import React from "react"
import LinkArrow from "./icons/LinkArrow"

export default function PageNotFound() {
    return (
        <div className="page-not-found">
            <h1 className="status">404</h1>
            <h1 className="not-found-message">Page Not Found</h1>
            <a href="/">
                <span>Go Back To Home Page</span> <LinkArrow />
            </a>
        </div>
    )
}
