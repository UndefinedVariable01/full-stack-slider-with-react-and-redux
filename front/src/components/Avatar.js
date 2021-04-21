import React from "react"
import avatarImg from "../images/avatar.jpg"

export default function Avatar() {
    return (
        <div className="avatar" style={{ borderRadius: "999px", overflow: "hidden" }}>
            <img src={avatarImg} style={{ width: "100%", objectFit: "cover" }} alt="User Avatar" />
        </div>
    )
}
