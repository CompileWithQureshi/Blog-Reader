const User = require('../model/User-model')
const bcrypt = require('bcryptjs')
const CreateUser = async (req, res, next) => {
    let { name, email, password } = req.body
    let exitingUser;
    try {
        exitingUser = await User.findOne({ email })
    } catch (error) {
        return next(error)
    }
    if (exitingUser) {
        return res.status(400).json({ message: "User is already exits" })
    }
    const hashedpassword = bcrypt.hashSync(password)
    let users = new User({ name, email, password: hashedpassword, blog: [] })
    try {
        users = await users.save()
    } catch (error) {
        console.log(error);
    }
    return res.status(200).json({ message: users })
}

module.exports = CreateUser