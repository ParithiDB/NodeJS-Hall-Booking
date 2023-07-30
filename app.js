const express = require('express');
const APP_SERVER = express();

APP_SERVER.use('/users', require('./Controllers/Users.Controller'));
APP_SERVER.use('/halls', require('./Controllers/Mahal.Controller'));

module.exports = APP_SERVER;