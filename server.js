//Dependences
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const passport = require("passport");
const passportConfig = require("./config/passport");
const passportLocal = require("passport-local").Strategy;
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const session = require("express-session");
const bodyParser = require("body-parser");
const User = require("./models/users");
const axios = require("axios");
const Order = require("./models/dineOut");
const Reservation = require("./models/reservation");



const app = express();

//Connecting to mongoose
mongoose.connect(
  "mongodb+srv://KJohnson3288:Raichu@cluster0.7zfic.mongodb.net/project-3?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("Mongoose Is Connected");
  }
);

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:3000", // <-- location of the react app were connecting to
    credentials: true,
  })
);

app.use(
  session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true,
  })
);

app.use(cookieParser("secretcode"));
app.use(passport.initialize());
app.use(passport.session());


//-------------------------------------------------End of Middleware------------------------------------------------------


// Routes
app.post("/api/login", passportConfig.authenticate("local"),  (req, res, next) => {
  res.json({
    email: req.user.Email,
    firstName: req.user.FirstName,
    lastName: req.user.LastName
  });
});


app.post("/api/register", (req, res) => {
  User.findOne({ Email: req.body.Email }, async (err, doc) => {
    if (err) throw err;
    if (doc) res.send("User Already Exists");
    if (!doc) {
      const hashedPassword = await bcrypt.hash(req.body.Password, 10);

      const newUser = new User({
        Email: req.body.Email,
        FirstName: req.body.FirstName,
        LastName: req.body.LastName,
        Phone: req.body.Phone,
        Password: hashedPassword,
      });
      await newUser.save();
      res.send("User Created");
    }
  });
});

app.post("/api/dineOut", (req, res) => {
  Order.findOne({ Name: req.body.name}, async (err, doc) => {
    if (err) throw err;
    if (doc) res.send("Order Already Exists");
    if (!doc) {

      const newOrder = new Order({

        Name: req.body.Name,
        Date: req.body.Date,
        Time: req.body.Time,
        Order: req.body.Order,
        Total: req.body.Total
    });

    await newOrder.save();
    res.send(newOrder)
    }
  });
});

app.post("/api/reservation", (req, res) => {
  Reservation.findOne({ Name: req.body.name}, async (err, doc) => {
    if (err) throw err;
    if (doc) res.send("Rservation Already Exists");
    if (!doc) {

      const newReservation = new Reservation({

        Name: req.body.Name,
        Date: req.body.Date,
        Time: req.body.Time,
        Seating: req.body.Seating,
        Occupants: req.body.Occupants
    });

    await newReservation.save();
    res.send("Reserve Placed");
    }
  });
});



//--------------------------------------------------End of routes -------------------------------------------


//Listening 
app.listen(3001, () => {
    console.log("Server is running")
})