const express = require('express');
const APP_SERVER = express();

APP_SERVER.use('/users', require('./Controllers/Users.Controller'));

module.exports = APP_SERVER;