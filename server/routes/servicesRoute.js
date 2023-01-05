const express = require('express');
const router = express.Router();

const ServicesController = require('../controllers/ServicesController.js')


router.post('/', ServicesController.create)
router.get('/', ServicesController.getAll)
router.delete('/:_id',ServicesController.delete)
module.exports = router