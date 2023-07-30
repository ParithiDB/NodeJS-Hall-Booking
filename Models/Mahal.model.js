const mongoose = require("mongoose");
const { Schema } = mongoose;


const MahalSchema = new Schema({
  roomName : {
    type: String,
    required: true
  },
  seats : Number,
  amenities : {
      AC: Boolean,
      TV: Boolean,
      WiFi: Boolean,
      Heater: Boolean
  },
  price : Number
});

module.exports = mongoose.model("mahal", MahalSchema);