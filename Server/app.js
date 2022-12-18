require("dotenv").config()
require("express-async-errors")

const express = require("express")
const app = express()

//middlewares
app.use(express.json())
const notFound = require("./middlewares/notFound")
const errorHandler = require("./middlewares/errorHandler")
const auth = require("./middlewares/auth")

//DB
const connectDB = require("./DB/connectDB")

//routes
const usersRouter = require("./routes/usersRouter")
const imagesRouter = require("./routes/imagesRouter")

app.use("/api/v1/users", usersRouter)
app.use("/api/v1/images", auth, imagesRouter)

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

const start = () => {
    try {
        connectDB(process.env.MONGO_URI)

        app.listen(PORT, () => {
            console.log(`Server is listening on PORT ${PORT}`)
        })
    } catch (error) {
        console.log("ERROR")
    }
}

start()
