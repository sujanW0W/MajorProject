const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = mongoose.Schema({
    fullName: {
        type: String,
        required: [true, "Full Name must be provided."],
        trim: true,
    },
    email: {
        type: String,
        required: [true, "Unique Email must be provided."],
        unique: [true, "Username must be unique."],
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "Please provide Valid Email",
        ],
    },
    userName: {
        type: String,
        required: [true, "Unique Username must be provided."],
        maxLength: [15, "Username must not exceed more than 15 characters."],
        minLength: [5, "Username must be at least 5 characters long."],
        unique: [true, "Username must be unique."],
    },
    password: {
        type: String,
        required: [true, "Password must be provided."],
        minLength: [6, "Password must be at least 6 characters long."],
    },
    phoneNumber: {
        type: Number,
        required: true,
        min: 9000000000,
        max: 9999999999,
    },
});

userSchema.pre("save", async function () {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.comparePassword = async function (password) {
    const isMatch = await bcrypt.compare(password, this.password);
    return isMatch;
};

userSchema.methods.generateToken = async function () {
    const token = await jwt.sign(
        {
            userID: this._id,
            fullName: this.fullName,
            userName: this.userName,
            email: this.email,
        },
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_LIFETIME }
    );
    return token;
};

module.exports = mongoose.model("Users", userSchema);
