const express = require("express")
const router = express.Router()
const Post = require("../model/Post")

router.get("/", (req, res, next) => {
    Post.find()
        .select("_id imageUrl title description")
        .exec((err, posts) => {
            if (err) next(err)
            else res.json(posts)
        })
})

module.exports = router
