const express = require('express');

const router = express.Router();

const servicesRoute = require('./servicesRoute.js')

const messageRoute = require('./messageRoute.js')

const authRoute = require('./authRoute.js')

const projectRoute = require('./projectRoute.js')

const productRoute = require('./productRoute.js')

const appealRoute = require('./appealRoute.js')

router.use('/', authRoute)
router.use('/services', servicesRoute);
router.use('/messages', messageRoute);
router.use('/projects', projectRoute);
router.use('/products', productRoute)
router.use('/appeals', appealRoute)

module.exports = router;