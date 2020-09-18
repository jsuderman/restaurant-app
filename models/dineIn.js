const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const dineInSchema = new Schema({
        Name: {
              type: String,
              trim: true,
              required: "Please enter your Full Name"
            },
        Date: {
          type: Date,
        },
        Time: {
              type: Number,
              required: true
            },
        Seating: {
              type: String,
              required: true
            },
        Occupants: {
              type: Number,
              required: true
            },
});

const dineIn = mongoose.model("Dine In", dineInSchema);

module.exports = dineIn;