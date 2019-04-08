const mongoose = require("mongoose");

//you are creating a new instance for the method mongoose schema
const Schema = mongoose.Schema;

//create user data
const userSchema = new Schema({
  title: {
    required: true,
    type: String
  },
  image: {
    required: true,
    type: String
  },
  description: {
    required: true,
    type: String
  }
});

const User = mongoose.model("users", userSchema);

module.exports = User;
