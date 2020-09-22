const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const dineOutSchema = new Schema({
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
        Order: {
              type: Array,
              required: true
            },
        Total: {
              type: Number,
              required: true
            },
});

const dineOut = mongoose.model("Dine Out", dineOutSchema);

module.exports = dineOut;