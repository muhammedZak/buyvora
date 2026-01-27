const express = require('express');
const {
  registerUser,
  loginUser,
  userLogOut,
  forgotPassword,
  resetpassword,
} = require('../controllers/authController');

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/logout', userLogOut);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password/:token', resetpassword);

module.exports = router;
