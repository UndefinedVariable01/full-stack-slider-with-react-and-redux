const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
    imageUrl: { type: String, minlength: 2, maxlength: 128, required: true },
    title: { type: String, minlength: 2, maxlength: 32, required: true },
    description: { type: String, minlength: 2, maxlength: 100, required: true },
})

const Post = mongoose.model("Post", postSchema)

module.exports = Post
