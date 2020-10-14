const localStratagy = require("passport-local").Strategy;
const bcrypt = require("bcryptjs");
const User = require("../models/users");
const passport = require("passport");

passport.use(
  new localStratagy(
    {
      usernameField: "Email"
    },

    (Email, Password, done) => {

      User.findOne(
        { Email: Email }, (err, user) => {
          if (err) throw err;
          if (err) console.log('err', err)
          if (!user) return done(null, false);

          bcrypt.compare(Password, user.Password, (err, result) => {
            if (err) throw err;
            if (result === true) {
              return done(null, user);
            } else {
              return done(null, false);
            }
          });
        });
    })
);

passport.serializeUser((user, cb) => {
  cb(null, user.id);
});
passport.deserializeUser((id, cb) => {
  User.findOne({ _id: id }, (err, user) => {
    const userInformation = {
      Email: user.Email,
    };
    cb(err, userInformation);
  });
});


module.exports = passport;