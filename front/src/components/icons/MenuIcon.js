import React from "react"

export default function MenuIcon({ handleClickOnMenuIcon }) {
    const barStyle = {
        backgroundColor: "#000",
        height: "2.4px",
        marginBottom: "4px",
        borderRadius: "99px",
    }

    return (
        <div className="menu-icon hide-in-large" onClick={handleClickOnMenuIcon}>
            <div style={{ ...barStyle, width: "25px" }} />
            <div style={{ ...barStyle, width: "20px" }} />
            <div style={{ ...barStyle, width: "25px" }} />
        </div>
    )
}
