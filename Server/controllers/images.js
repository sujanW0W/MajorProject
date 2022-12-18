const Image = require("../model/imageSchema")
const multer = require("multer")

const { StatusCodes } = require("http-status-codes")

const Storage = multer.diskStorage({
    destination: "uploads",
    filename: (req, file, cb) => {
        // const suffix = Date.now() + "-" + Math.floor(Math.random() * 10000)
        cb(null, file.originalname)
    },
})

const upload = multer({ storage: Storage }).single("testImage")

const uploadImage = (req, res) => {
    upload(req, res, (err) => {
        if (err) console.log(err)
        else {
            const newImage = new Image({
                name: req.body.name,
                image: {
                    data: req.file.filename,
                    contentType: "image/png",
                },
            })

            newImage
                .save()
                .then(() =>
                    res
                        .status(StatusCodes.CREATED)
                        .json({ msg: "Upload Successful." })
                )
                .catch((err) => console.log(err))
        }
    })
}

const getImage = (req, res) => {
    const { name: imageName } = req.params
    res.download("./uploads/" + imageName)
}

module.exports = { uploadImage, getImage }
