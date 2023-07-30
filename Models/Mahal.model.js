const mongoose = require("mongoose");
const { Schema } = mongoose;


const MahalSchema = new Schema({
  roomName : {
    type: String,
    required: true
  },
  seats : Number,
  amenities : Array,
  price : Number
});

module.exports = mongoose.model("mahal", MahalSchema);