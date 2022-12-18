const User = require("../model/userSchema")
const { BadRequest, NotFound } = require("../errors")
const { StatusCodes } = require("http-status-codes")

const register = async (req, res) => {
    //Create New User
    const user = await User.create(req.body)

    //Generate Token
    const token = await user.generateToken()

    res.status(StatusCodes.CREATED).json({ token, user })
}

const login = async (req, res) => {
    const { userName, password } = req.body

    //Check if the entered field is valid?
    if (!userName || !password)
        throw new BadRequest("Please provide Valid username and password.")

    //Search for the user
    const user = await User.findOne({ userName })

    //userName not Found
    if (!user) throw new NotFound(`${userName} Not Found`)

    //check the password
    const isMatch = await user.comparePassword(password)

    if (!isMatch) throw new BadRequest("Password Incorrect. Please try again.")

    const token = await user.generateToken()

    res.status(StatusCodes.OK).json({ user, token })
}

module.exports = { register, login }
