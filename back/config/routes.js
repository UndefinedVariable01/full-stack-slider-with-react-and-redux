const express = require("express")
const posts = require("../routes/posts")
const path = require("path")
const errorHandler = require("../middleware/errorHandler")

module.exports = function (app) {
    app.use(express.json())

    app.use("/api/posts", posts)

    app.use(express.static("public"))
    app.use(express.static(path.join(__dirname, "../../front/build")))
    app.get("*", (req, res) => res.sendFile(path.join(__dirname, "../../front/build/index.html")))

    app.use(errorHandler)
}
