const mongoose = require("mongoose");

//declare Schema variable to initizlize a new variable from the mongoose methods
const Schema = mongoose.Schema;

//create new user data
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

//so here we are creatinga new user variable and using model by mongoose which creates a new users from that schema i know it seems repeatiive
const User = mongoose.model("users", userSchema);

module.exports = User;
