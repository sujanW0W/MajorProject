const mongoose = require("mongoose")
mongoose.set("strictQuery", false)
const connectDB = (MONGO_URI) => {
    return mongoose.connect(MONGO_URI)
}

module.exports = connectDB
