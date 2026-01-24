const User = require('../models/User');


const getUserProfile = async (req, res) => {
  res.send('Get user profile');
};

module.exports = { getUserProfile };
