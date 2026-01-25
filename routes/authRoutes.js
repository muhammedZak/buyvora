const express = require('express');
const {
  registerUser,
  loginUser,
  userLogOut,
  forgotPassword,
} = require('../controllers/authController');

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/logout', userLogOut);
router.post('/forgot-password', forgotPassword);

module.exports = router;
