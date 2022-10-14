const User = require('../model/User-model')

const getAllUser = async (req, res, next) => {
    let users;
    try {
        users = await User.find()
    } catch (error) {
        return next(error)
    }
    if (!users) {
        return res.status(404).json({ message: "Server issue" })
    }
    return res.status(200).json({ message: users })

}

module.exports = getAllUser
