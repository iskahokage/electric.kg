const express = require('express')
const router = express.Router()
const MessageController = require('../controllers/messageController.js')

router.get('/', MessageController.getAll)
router.post('/', MessageController.create)
router.delete('/:_id', MessageController.delete)

module.exports = router