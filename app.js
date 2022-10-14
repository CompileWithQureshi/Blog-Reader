const express = require('express')
const app = express()
const port = 8005
const mongoose = require('mongoose')
const blogRouter = require('./routes/blog-routes')
const router = require('./routes/user-routes')


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api/blog', blogRouter)
app.use('/api/user', router)

mongoose.connect("mongodb+srv://Sajid:Reader@cluster0.wb1uwri.mongodb.net/test").then(() => app.listen(port)).then(() => console.log(`connected to db and server is on ${port}`)).catch((err) => {
    console.log(err);
})

