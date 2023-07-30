const mongoose = require("mongoose");
const { Schema } = mongoose;


const BookingSchema = new Schema({
  bookingId : Number,
  customerName : String,
  roomId : Number,
  roomName : String,
  date : String,
  checkIn : String,
  CheckOut : String,
  status : String
});

module.exports = mongoose.model("booking", BookingSchema);