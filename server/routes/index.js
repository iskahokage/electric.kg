const express = require('express');

const router = express.Router();

const postRoute = require('./postRoute.js')


router.use('/posts', postRoute);


module.exports = router;