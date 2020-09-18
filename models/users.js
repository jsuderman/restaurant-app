const mongoose = require("mongoose");


const user = new mongoose.Schema({
  email: String,
  firstName: String,
  lastName: String,
  phone: String,
  password: String,
});

module.exports = mongoose.model("User", user);