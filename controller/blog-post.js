const Blog = require("../model/blog-model")


const postBlog = async (req, res, next) => {
    let { title, description, image, user } = req.body
    let blogs = await new Blog({ title, description, image, user })
    try {
        await blogs.save()
    } catch (error) {
        return console.log(error);
    }
    if (!blogs) {
        return res.status(400).json({ message: "Server issue " })
    }
    return res.status(200).json({ blogs })
}


module.exports = postBlog