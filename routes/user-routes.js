const express = require('express');
const getAllUser = require('../controller/get-user');
const login = require('../controller/post-login');
const CreateUser = require('../controller/post-user');
const router = express.Router();

router.get('/', getAllUser)
router.post('/Create', CreateUser)
router.post('/Login', login)






module.exports = router
