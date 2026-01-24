const express = require('express');
const {
  registerUser,
  loginUser,
  userLogOut,
} = require('../controllers/authController');
const { getUserProfile } = require('../controllers/userController');

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/logout', userLogOut);

router.get('/profile', getUserProfile);

module.exports = router;
