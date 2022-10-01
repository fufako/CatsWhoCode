const express = require("express")
const router = express.Router()
const controller = require("../controllers/controller")

router.get("/api", controller.posts)

router.post("/api", controller.posts_post)
module.exports = router
