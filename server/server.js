require("dotenv").config()
const express = require("express")
const session = require("express-session")
const passport = require("passport")
const LocalStrategy = require("passport-local").Strategy
const bcrypt = require("bcryptjs")
const mongoose = require("mongoose")

const User = require("./models/userModel")

const app = express()

const router = require("./routes/router")

const mongoDB = process.env.MONGO_KEY

mongoose.connect(mongoDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
const db = mongoose.connection
db.on("error", console.error.bind(console, "MongoDB connection error:"))

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  )
  res.header("Access-Control-Allow-Methods", "DELETE, POST, GET, OPTIONS")
  next()
})
app.use(express.json())

app.use(session({ secret: "cats", resave: false, saveUninitialized: true }))
app.use(passport.initialize())
app.use(passport.session())
app.use(express.urlencoded({ extended: false }))

passport.use(
  new LocalStrategy((username, password, done) => {
    User.findOne({ username: username }, (err, user) => {
      if (err) return done(err)
      if (!user) return done(null, false, { message: "Incorrect username" })
      bcrypt.compare(password, user.password, (err, res) => {
        if (err) return done(err)
        // Passwords match, log user in!
        if (res) return done(null, user)
        // Passwords do not match!
        else return done(null, false, { message: "Incorrect password" })
      })
    })
  })
)

app.use((req, res, next) => {
  res.locals.currentUser = req.user
  console.log(res.locals.currentUser)
  next()
})

passport.serializeUser(function (user, done) {
  done(null, user.id)
})
passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    done(err, user)
  })
})

app.use("/", router)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log("Server running on port " + PORT)
})
module.exports = app
