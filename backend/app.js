// Importing required libraries
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');


// Initiating Connection to the MongoDB
require('./src/db/conn');

// Importing all routes
// const account_info = require('./src/routes/time');
// const account_info = require('./src/routes/add_item');
const register = require('./src/routes/register');
const add_item = require('./src/routes/add_item');
const account_info = require('./src/routes/account_info');
const delete_user = require('./src/routes/delete_user');
const signin = require('./src/routes/signin');
const logout = require('./src/routes/logout');
const base_endpoint = require('./src/routes/base_endpoint');
const chat = require("./src/routes/chat");

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());

// Setting Routes
app.use('/db', account_info);
app.use('/add_data', add_item);
// Working
app.use('/v1/account/profile', account_info);
app.use('/v1/account/logout', logout);
app.use('/v1/account/logout', delete_user); 
app.use('/v2/registration/login', signin);
app.use('/v1/registration/aadhaar', register);
app.use('/', base_endpoint);
app.use('/chat',chat);

module.exports = app;
