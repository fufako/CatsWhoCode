const Post = require("../models/postModel")
const User = require("../models/userModel")
const { DateTime } = require("luxon")
const passport = require("passport")
const bcrypt = require("bcryptjs")
const LocalStrategy = require("passport-local").Strategy
const session = require("express-session")

exports.posts = (req, res, next) => {
  Post.find().exec(function (err, posts_list) {
    if (err) {
      return next(err)
    }
    res.json(posts_list)
  })
}

exports.posts_post = (req, res, next) => {
  date = new Date()
  console.log(req.body.content)
  const post = new Post({
    content: req.body.content,
    title: req.body.title,
    date: DateTime.fromJSDate(date).toFormat("yyyy-MM-dd, HH:mm"),
  }).save((err) => {
    if (err) {
      return next(err)
    }
  })
}
exports.login = (req, res, next) => {
  exports.login_post = passport.authenticate("local")
  // {
  //   successRedirect: "/",
  //   failureRedirect: "/login",
  //   // failureFlash: true
  // }
  res.send()
}

exports.signup = (req, res, next) => {
  console.log(req.body.username)
  bcrypt.hash(req.body.password, 10, (err, hashedPassword) => {
    if (err) return next(err)
    const user = new User({
      username: req.body.username,
      password: hashedPassword,
    }).save((err) => {
      if (err) {
        return next(err)
      }
    })
    console.log(hashedPassword)
  })
}
