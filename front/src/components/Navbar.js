import React, { useRef } from "react"
import "./Navbar.css"
import SearchIcon from "./icons/SearchIcon"
import BellIcon from "./icons/BellIcon"
import Avatar from "./Avatar"
import MenuIcon from "./icons/MenuIcon"
import CloseIcon from "./icons/CloseIcon"

export default function Navbar() {
    const smallMenu = useRef()

    function handleClickOnMenuIcon() {
        smallMenu.current.classList.add("show-small-menu")
    }

    function handleClickOutOfMenu(e) {
        if (e.target.classList[0] === "small-menu" || e.target.classList[0] === "close-menu") {
            smallMenu.current.classList.add("slide-out-menu")
            smallMenu.current.children[0].classList.add("fade-out-menu-background")
            const removeSmallMenu = setTimeout(() => {
                smallMenu.current.className = "small-menu"
                smallMenu.current.children[0].className = "menu-container"
                clearTimeout(removeSmallMenu)
            }, 500)
        }
    }

    return (
        <div className="navbar container">
            <nav className="large-nav">
                <ul className="large-nav-list">
                    <div className="nav-links">
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/">About</a>
                        </li>
                        <li>
                            <a href="/">Projects</a>
                        </li>
                        <li>
                            <a href="/">Community</a>
                        </li>
                    </div>
                    <div className="indicator" />
                </ul>
            </nav>
            <MenuIcon handleClickOnMenuIcon={handleClickOnMenuIcon} />
            <div className="small-menu" ref={smallMenu} onClick={handleClickOutOfMenu}>
                <div className="menu-container">
                    <div className="close-menu">
                        <CloseIcon />
                    </div>
                    <div className="small-avatar">
                        <Avatar />
                    </div>
                    <div className="small-menu-search">
                        <SearchIcon />
                        <input type="text" placeholder="search" />
                    </div>
                    <nav>
                        <ul>
                            <li>
                                <a href="/">Home</a>
                            </li>
                            <li>
                                <a href="/">About</a>
                            </li>
                            <li>
                                <a href="/">Projects</a>
                            </li>
                            <li>
                                <a href="/">Community</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className="search-and-logs">
                <div className="large-search">
                    <SearchIcon />
                </div>
                <BellIcon />
                <div className="large-avatar">
                    <Avatar />
                </div>
            </div>
        </div>
    )
}
