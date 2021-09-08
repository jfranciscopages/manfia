const express = require(`express`);
const router = express.Router();
const passport = require("passport");
//import controllers
const users_controllers = require("../controllers/users.controllers");
//Controlers llamados por destructuracion
const { register, login, logout, me } = users_controllers;

router.post(`/register`, register);

router.post(`/login`, passport.authenticate(`local`), login);

router.post(`/logout`, logout);

router.get("/me", me);

module.exports = router;
