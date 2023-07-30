const mongoose = require("mongoose");
const { Schema } = mongoose;


const UserSchema = new Schema({
  customerName : {
    type: String,
    required: true
  },
  roomName : {
    type: String,
    required: true
  },
  roomId : {
    type: String,
    required: true
  },
  date : String,
  startTime : String,
  endTime : String,
  createdAt: {
    type: Date,
    default: new Date().toString()
  },
  updatedAt: {
    type: Date,
    default: new Date().toString()
  }
});

module.exports = mongoose.model("users", UserSchema);