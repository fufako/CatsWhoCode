require("dotenv").config()
const express = require("express")
const app = express()
const mongoose = require("mongoose")

const router = require("./routes/router")

const mongoDB = process.env.MONGO_KEY

mongoose.connect(mongoDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
const db = mongoose.connection
db.on("error", console.error.bind(console, "MongoDB connection error:"))

app.use("/", router)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log("Server running on port " + PORT)
})
module.exports = app
