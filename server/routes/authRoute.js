const express = require('express');

const authMiddleware = require('../middlewares/authMiddleware.js');

const UserController = require('../controllers/userController.js');

const {body} = require('express-validator')
const router = express.Router();

router.post(
    '/registration',
    body('email').isEmail(),
    body('password').isLength({min: 3, max: 20}),
    UserController.registration
);

router.get(
    '/logout',
    UserController.logout
)

router.post(
    '/login',
    UserController.login
)
router.get(
    '/user',
    UserController.getAll
)
router.get(
    '/activate/:link',
    UserController.activate
)

module.exports = router