const express = require('express');

const router = express.Router();

const postRoute = require('./postRoute.js')

const messageRoute = require('./messageRoute.js')
router.use('/posts', postRoute);
router.use('/messages', messageRoute);


module.exports = router;