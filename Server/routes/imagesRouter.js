const express = require("express");
const router = express.Router();

const { uploadImage, getImage } = require("../controllers/images");
const restoreImage = require("../controllers/restoreImage");

router.post("/", uploadImage);

router.get("/:name", getImage);

router.post("/restoration", restoreImage);

module.exports = router;
