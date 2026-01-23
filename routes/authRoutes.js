const express = require('express');
const {
  registerUser,
  loginUser,
  userLogOut,
} = require('../controllers/authController');

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/logout', userLogOut);

module.exports = router;
