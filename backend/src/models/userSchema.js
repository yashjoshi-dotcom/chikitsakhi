const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// The following code sets the schema for the vaious fields that are required from the end user while registering and the type of each of this fieldd.

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  uhid: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    enum: [
      'Male',
      'Female',
      'Others',
    ],
  },
  aadhar: {
    type: Number,
    required: true,
  },
  role: {
    type: String,
    enum: [
      'Patient',
      'Admin',
    ],
    default: 'Patient',
  },
  locality: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
  conversation: [String],
  history: [String],
  tests: [{
    name: {
      type: String,
      required: true
    },
    value: {
      type: Number,
      required: true
    }
  }],
 
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],

});

userSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 12);
  }
  next();
});

// Generating JWT Token
userSchema.methods.generateAuthToken = async function () {
  try {
    const token_ = jwt.sign({ _id: this._id }, `${process.env.JWT_KEY}`);
    // Here token_ is the value derrived from above line whereas token refers to the one present in userSchema
    this.tokens = this.tokens.concat({ token: token_ });
    await this.save();
    return token_;
  } catch (err) {
    console.log(err);
  }
};
const User = mongoose.model('Main_Collection', userSchema);
module.exports = User;
