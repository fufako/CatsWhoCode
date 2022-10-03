const Post = require("../models/postModel")

exports.posts = (req, res, next) => {
  Post.find().exec(function (err, posts_list) {
    if (err) {
      return next(err)
    }
    res.json(posts_list)
  })
}

exports.posts_post = (req, res, next) => {
  console.log(req.body.content)
  const post = new Post({
    content: req.body.content,
    title: req.body.title,
    date: req.body.date,
  }).save((err) => {
    if (err) {
      return next(err)
    }
  })
}
