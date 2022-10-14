const express = require('express')
const deleteBlog = require('../controller/blog-delete')
const getBlog = require('../controller/blog-get-all')
const GetById = require('../controller/blog-getById')
const postBlog = require('../controller/blog-post')
const updateBlog = require('../controller/blog-update')
const blogRouter = express.Router()


blogRouter.get("/", getBlog)
blogRouter.post("/add", postBlog)
blogRouter.put("/update/:id", updateBlog)
blogRouter.get("/:id", GetById)
blogRouter.delete("/delete/:id", deleteBlog)








module.exports = blogRouter