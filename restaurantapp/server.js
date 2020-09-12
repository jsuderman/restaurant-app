// Requiring necessary npm packages
var express = require("express");
var session = require("express-session");

// Setting up port and requiring database for syncing
var PORT = process.env.PORT || 3005;
var db = require("ENTER DATABASE FILE LOCATION");

// Creating express app and configuring middleware needed for authentication
var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Requiring our routes
require("ENTER OUR ROUTES FILE LOCATION")(app);


// Syncing our database and logging a message to the user upon success
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
  });
});