const { default: mongoose } = require("mongoose");
const Blog = require("../model/blog-model");
const User = require("../model/User-model")

const postBlog = async (req, res, next) => {
    let { title, description, image, user } = req.body
    let exitingUser;
    try {
        exitingUser = await User.findById(user)
    } catch (error) {
        return console.log(error);
    }
    if (!exitingUser) {
        return res.status(400).json({ message: "Invalid User" })
    }

    let blogs = await new Blog({ title, description, image, user })
    try {
        const session = await mongoose.startSession()
        session.startTransaction()
        await blogs.save({ session })
        exitingUser.blogs.push(blogs)
        await exitingUser.save({ session })
        await session.commitTransaction()
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Server error " })
    }
    if (!blogs) {
        return res.status(400).json({ message: "Server issue " })
    }
    return res.status(200).json({ blogs })
}


module.exports = postBlog