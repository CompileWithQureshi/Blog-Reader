
const Blog = require("../model/blog-model")

const getBlog = async (req, res, next) => {
    let blogs;
    try {
        blogs = await Blog.find()
    } catch (error) {
        return console.log(error);
    }

    return res.status(200).json({ message: blogs })
}

module.exports = getBlog