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
  new Post({
    content: req.body.content,
    title: req.body.title,
    date: DateTime.fromJSDate(date).toFormat("yyyy-MM-dd, HH:mm"),
  }).save((err) => {
    if (err) {
      return next(err)
    }
  })
}
// exports.login = (req, res, next) => {
//   // return passport.authenticate("local", {
//   //   successRedirect: "http://localhost:3000/",
//   //   failureRedirect: "http://localhost:3000/login",
//   // })(req, res, next)

//   res.json({ message: "Hey form json" })
// }

exports.login = passport.authenticate("local", {
  successRedirect: "/",
  failureRedirect: "/",
  // failureFlash: true
})

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

exports.me = (req, res, next) => {
  res.json(res.locals.currentUser)
}
