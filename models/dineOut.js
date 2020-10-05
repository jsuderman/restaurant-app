const mongoose = require("mongoose");

const order = new mongoose.Schema({

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

        Order: 
            {
              type: [String],
              required: true
            },
          
        Total: {
              type: Number,
              required: true
            },
});

module.exports = mongoose.model("Order", order);