const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/productContoller.js')

router.get('/', ProductController.getAll);
router.post('/', ProductController.create);
router.delete('/:id', ProductController.delete);
router.patch('/:id', ProductController.update);

module.exports = router;