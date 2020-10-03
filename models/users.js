const mongoose = require("mongoose");


const user = new mongoose.Schema({
  Email: String,
  FirstName: String,
  LastName: String,
  Phone: String,
  Password: String,
});

module.exports = mongoose.model("User", user);