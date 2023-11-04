// Importing required libraries
const express = require('express');
const jwt_Authenticate = require('../middlewares/jwt_authenticate');

// Using Express Router Class
const router = express.Router();

// The below function will be used to delete data of an indiviual fron the database .
router.get('/', jwt_Authenticate, async (req, res) => {
  try {
    req.rootUser.tokens = [];
    res.clearCookie('jwtoken');
    await req.rootUser.save();
    res.redirect('/home');
    console.log('logout succesful');
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ error: 'We are experiencing some server problems!!' });
  }
});

module.exports = router;
