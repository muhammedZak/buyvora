const express = require('express');
const {
  registerUser,
  loginUser,
  userLogOut,
  forgotPassword,
  resetpassword,
  verifyEmail,
} = require('../controllers/authController');

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/logout', userLogOut);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password/:token', resetpassword);
router.get('/verify-email/:token', verifyEmail);

module.exports = router;
