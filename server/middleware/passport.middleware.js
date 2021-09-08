/* //Requires de passport
const sessions = require(`express-session`);
var cookieParser = require("cookie-parser");
const passport = require(`passport`);
const LocalStrategy = require(`passport-local`).Strategy;

// Express Route File Requires
const { Users, Products, Categories } = require("../models");

//Passport Configuration
passport.use(
  new LocalStrategy({ usernameField: `email` }, function (
    email,
    password,
    done
  ) {
    Users.findOne({ where: { email } })
      .then((user) => {
        if (!user) return done(`Incorrect Credentials`, false); //Otra forma es done(null,false, {message: `Incorrect Credentials`}) PD: recibe un campo de mensaje
        user.validPassword(password, user.salt).then((valid) => {
          valid ? done(null, user) : done(`Incorrect Credentials`, false);
        });
      })
      .catch(done);
  })
);

// How we save the user
passport.serializeUser(function (user, done) {
  done(null, user.id);
});
// How we look for the user
passport.deserializeUser(function (id, done) {
  Users.findByPk(id).then((user) => done(null, user));
});
 */
