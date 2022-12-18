//Authorization for restricted routes.

const jwt = require("jsonwebtoken")
const { UnAuthorized } = require("../errors/")

const auth = async (req, res, next) => {
    const authString = req.headers.authorization

    if (!authString || !authString.startsWith("Bearer "))
        throw new UnAuthorized("Authorization Error.")

    const token = authString.split(" ")[1]

    const verifyToken = await jwt.verify(token, process.env.JWT_SECRET)

    next()
}

module.exports = auth
