import React from "react"

export default function LinkArrow() {
    const commonStyle = {
        height: "2px",
        backgroundColor: "#008fff",
        borderRadius: "99px",
    }

    return (
        <div className="link-arrow" style={{ display: "inline-block", position: "relative", marginTop: "1px", verticalAlign: "middle" }}>
            <div style={{ ...commonStyle, width: "100%" }} />
            <div
                style={{ ...commonStyle, width: "10px", position: "absolute", top: "-3.5px", right: "-2px", transform: "rotate(45deg)" }}
            />
            <div style={{ ...commonStyle, width: "10px", position: "absolute", top: "3px", right: "-2px", transform: "rotate(-45deg)" }} />
        </div>
    )
}
