const express = require('express');
const APP_SERVER = express();

APP_SERVER.get('/', (req,res,next) => {
    res.send("<h1>Hall-Booking</h1>")
});

APP_SERVER.use('/users', require('./Controllers/Users.Controller'));
APP_SERVER.use('/halls', require('./Controllers/Mahal.Controller'));
APP_SERVER.use('/booking', require('./Controllers/Bookings.Controller'));


module.exports = APP_SERVER;