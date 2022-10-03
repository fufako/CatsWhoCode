const express = require("express")
const router = express.Router()
const controller = require("../controllers/controller")

router.get("/api", controller.posts)

router.post("/api", controller.posts_post)

router.post("/login", controller.login)

router.post("/signup", controller.signup)

router.get("/me", controller.me)

module.exports = router
