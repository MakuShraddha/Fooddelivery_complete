const UserController = require('../controllers/UserController');
const express = require('express');

const router = express.Router();

router.post('/register', UserController.UserRegister);
router.post('/login', UserController.UserLogin);

router.get('/all-Users', UserController.getAllUsers);
router.get('/single-User/:apple', UserController.getUserById)

module.exports = router;