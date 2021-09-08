var createError = require("http-errors");
var express = require("express");
var path = require("path");
var logger = require("morgan");
const db = require("./db/db");
var app = express();
var routes = require("./routes/index");
//Requires de passport
const sessions = require(`express-session`);
var cookieParser = require("cookie-parser");
const passport = require(`passport`);
const LocalStrategy = require(`passport-local`).Strategy;

// Express Route File Requires
const { Users } = require("./models");

app.use(logger("dev"));
// parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//APP.USE DE PASSPORT
app.use(cookieParser());

//Session Secret
app.use(
  sessions({
    secret: "manfia",
    resave: true,
    saveUninitialized: true,
  })
);
//App use initializate
app.use(passport.initialize());
app.use(passport.session());

//APP ROUTES
app.use("/api", routes);
app.use("/api", (req, res) => {
  res.sendStatus(404);
});

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

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

db.sync({ force: true })
  .then(() => {
    app.listen(3001, () =>
      console.log("Servidor escuchando en el puerto 3001")
    );
  })
  .catch((err) => console.log(err));

module.exports = app;
