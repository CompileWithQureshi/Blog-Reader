const Blog = require("../model/blog-model")

const GetById = async (req, res, next) => {
    const getId = req.params.id
    let blog;
    try {
        blog = await Blog.findById(getId)
    } catch (error) {
        return console.log(error);
    }
    if (!blog) {
        return res.status(500).json({ message: "Unable to find" })
    }
    return res.status(200).json({ blog })
}

module.exports = GetById