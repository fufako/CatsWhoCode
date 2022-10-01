const mongoose = require("mongoose")

const Schema = mongoose.Schema

const PostSchema = new Schema(
  {
    title: String,
    content: String,
    date: String,
  },
  {
    collection: "posts",
  }
)
module.exports = mongoose.model("Post", PostSchema)
