const User = require('../models/User');

const getUserProfile = async (req, res) => {
  try {
    const userId = req.user._id;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({
        status: false,
        message: 'User not found',
      });
    }

    res.status(201).json({
      success: true,
      message: 'Succussfully fetched user',
      data: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: 'Server error',
    });
  }
};

module.exports = { getUserProfile };
