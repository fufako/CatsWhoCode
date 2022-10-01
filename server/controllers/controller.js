const Post = require("../models/postModel")

exports.posts = (req, res, next) => {
  Post.find().exec(function (err, posts_list) {
    if (err) {
      return next(err)
    }
    res.json(posts_list)
    console.log(posts_list)
  })
}
