const express = require('express');

const router = express.Router();

const servicesRoute = require('./servicesRoute.js')

const messageRoute = require('./messageRoute.js')

const authRoute = require('./authRoute.js')

const projectRoute = require('./projectRoute.js')

const productRoute = require('./productRoute.js')

router.use('/', authRoute)
router.use('/services', servicesRoute);
router.use('/messages', messageRoute);
router.use('/projects', projectRoute);
router.use('/products', productRoute)

module.exports = router;