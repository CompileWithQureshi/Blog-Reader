const Blog = require("../model/blog-model");
const User = require("../model/User-model");

const getBlogByUserId = async (req, res) => {
    const userId = req.params.id

    let UserBlog;
    try {
        UserBlog = await User.findById(userId).populate("blogs")
    } catch (error) {
        console.log(error);
    }
    if (!UserBlog) {
        return res.status(404).json({ message: "User not found" })
    }

    return res.status(200).json(UserBlog)
}
module.exports = getBlogByUserId