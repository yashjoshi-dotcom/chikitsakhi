// Importing required libraries
const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/userSchema');

// Using Express Router Class
const router = express.Router();

// The below mentioned function is responisble for allow ing users to log in.
router.post('/', async (req, res) => {
  try {
    const { aadhar, password } = req.body;
    if (!aadhar || !password) {
      return res.status(400).json({ error: 'incomplete Data' });
    }
    // Checking if Email Id exists and if not request registering as a new account
    const userLogin = await User.findOne({ aadhar });
    if (!userLogin)
      res
        .status(400)
        .json({ message: 'Invalid Email ID. Pls register before signing in' });
    // Comparing the entered password with the one present in dB
    const isMatched = await bcrypt.compare(password, userLogin.password);
    // Generatig JWT authentication token
    const token = await userLogin.generateAuthToken();
    res.cookie('jwtoken', token, {
      expires: new Date(Date.now() + 25892000000), // The cookie will expire in 30 days from the date the user had logged in .
      httpOnly: true, // Else it will work only in secure
    });

    if (isMatched) res.status(200).json({ message: 'Login Successful' });
    else
      res.status(403).json({ message: 'Access Denied : Invalid Credentials' });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
