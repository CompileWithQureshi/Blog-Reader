const { findByIdAndUpdate } = require("../model/blog-model")
const Blog = require("../model/blog-model")

const updateBlog = async (req, res, next) => {
    const { title, description } = req.body

    const BlogId = req.params.id
    let blogs;
    try {
        blogs = await Blog.findByIdAndUpdate(BlogId, { title, description })

    } catch (error) {
        return console.log(error);
    }
    if (!blogs) {
        return res.status(500).json({ message: "Unable to save" })
    }
    return res.status(200).json({ blogs })
}
module.exports = updateBlog