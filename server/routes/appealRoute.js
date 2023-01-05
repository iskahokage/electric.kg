const express = require('express');
const router = express.Router();

const AppealController = require('../controllers/appealController.js')

router.post('/', AppealController.create)

module.exports = router;