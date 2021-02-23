const router = require('express').Router();
const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.post('/', async (req, res) => {
  try {
    const { email, password, passwordVerify } = req.body;

    // Validation
    if (!email || !password || !passwordVerify) {
      return res.status(400).json({
        errorMessage: 'Please enter all required fields.',
      });
    }

    if (password.length < 6) {
      return res.status(400).json({
        errorMessage: 'Please enter a password of at least 6 characters.',
      });
    }

    if (password !== passwordVerify) {
      return res.status(400).json({
        errorMessage: 'Please enter the same password twice.',
      });
    }

    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      return res.status(400).json({
        errorMessage: 'An account with this email already exists.',
      });
    }

    // Hash the password
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    // Save a new user account to the DB
    const newUser = new User({
      email,
      passwordHash,
    });

    const savedUser = await newUser.save();

    // Sign the token
    const token = jwt.sign(
      {
        user: savedUser._id,
      },
      process.env.JWT_SECRET
    );

    // Send the token in a HTTP-only cookie
    res
      .cookie('token', token, {
        httpOnly: true,
      })
      .send();

    console.log(token);
  } catch (error) {
    console.error(error);
    res.status(500).send();
  }
});

module.exports = router;
