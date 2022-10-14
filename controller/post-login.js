const User = require('../model/User-model')
const bcrypt = require('bcryptjs')

const login = async (req, res, next) => {
    let { name, email, password } = req.body
    let exitingUser;
    try {
        exitingUser = await User.findOne({ email })
    } catch (error) {
        return next(error)
    }
    if (!exitingUser) {
        return res.status(404).json({ message: "User does not exits" })
    }
    const isPasswordCorrect = bcrypt.compareSync(password, exitingUser.password)
    if (!isPasswordCorrect) {
        return res.status(400).json({ message: "Password is incorrect" })
    }
    return res.status(200).json({ message: "Login Sucessfull" })
}
module.exports = login