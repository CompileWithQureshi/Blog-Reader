const Blog = require("../model/blog-model")

const deleteBlog = async (req, res) => {
    const deleteId = req.params.id
    let blog;
    try {
        blog = await Blog.findByIdAndDelete(deleteId).populate("user")
        await blog.user.blogs.pull(blog)
        await blog.user.save()


    } catch (error) {
        return console.log(error);
    }
    if (!blog) {
        return res.status(500).json({ message: "Unable to delete" })
    }
    console.log({ message: "Deleted Sucessfull" });
    return res.status(200).json({ message: "Deleted Sucessfull" })
}

module.exports = deleteBlog