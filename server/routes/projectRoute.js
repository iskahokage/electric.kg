const express = require('express');
const router = express.Router();
const ProjectController = require('../controllers/projectController.js')

router.get('/', ProjectController.getAll)
router.post('/', ProjectController.create);
router.post('/img', ProjectController.imageUpload);
router.delete('/:id', ProjectController.delete)

module.exports = router;