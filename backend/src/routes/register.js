// Importing required libraries
const express = require('express');
const User = require('../models/userSchema');

// Using Express Router Class
const router = express.Router();

router.post('/', async (req, res) => {
  const { name, age, uhid, gender,aadhar,locality,password } = req.body;
  if (!name || !age || !password || !uhid || gender || locality || !aadhar ) {
    return res.status(409).json({
      error: 'Bad Request: Please enter all the required data.',
    });
  }

  try {
    const userLogin = await User.findOne({ uhid });
    if (userLogin)
      return res.status(403).json({
        error: '{Forbidden to create multiple accounts} UHID already exists',
      });

    const user = new User({ name, age, uhid, gender,aadhar,locality,password });
    await user.save();
    res.status(201).json({ message: 'Registered sucessfully' });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ error: 'We are experiencing some server problems!!' });
  }
});

module.exports = router;
