require("dotenv").config()
const express = require("express")
var bodyParser = require("body-parser")
const mongoose = require("mongoose")

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
  next()
})
app.use(express.json())

app.use("/", router)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log("Server running on port " + PORT)
})
module.exports = app
