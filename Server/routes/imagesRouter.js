const express = require("express")
const router = express.Router()

const { uploadImage, getImage } = require("../controllers/images")

router.post("/", uploadImage)

router.get("/:name", getImage)

module.exports = router
