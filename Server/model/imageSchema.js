const mongoose = require("mongoose")

const imageSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    image: {
        data: Buffer,
        contentType: String,
    },
})

module.exports = mongoose.model("Images", imageSchema)
