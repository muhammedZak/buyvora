const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Protect Routes
const protect = async (req, res, next) => {
  try {
    let token;

    // Read the JWT from the cookie
    token = req.cookies.token;

    if (token) {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id);
      next();
    } else {
      return res.status(401).json({
        status: false,
        message: 'Not authorized',
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(401).json({
      status: false,
      message: 'Not authorized',
    });
  }
};

module.exports = { protect };
