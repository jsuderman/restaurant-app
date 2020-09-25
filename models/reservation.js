const mongoose = require("mongoose");

const reservation = new mongoose.Schema({

        Name: {
              type: String,
              trim: true
            },

        Date: {
          type: Date,
        },

        Time: {
              type: String,
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

module.exports = mongoose.model("Reservation", reservation);