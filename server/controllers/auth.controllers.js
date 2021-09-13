const { User_Profile } = require(`../models/`);

const auth_controller = {
  register: async (req, res, next) => {
    try {
      const user = await User_Profile.create(req.body);
      return res.status(201).json(user);
    } catch (err) {
      next(err);
    }
  },
  login: (req, res, next) => {
    const user = req.user;
    try {
      return res.status(200).json(user);
    } catch (err) {
      console.log(err);
    }
  },
  logout: (req, res, next) => {
    try {
      req.logout();
      lStorage = JSON.parse(window.localStorage.getItem("orderform"));
      lStorage.clientProfile = null;
      window.localStorage.setItem("orderform", JSON.stringify(lStorage));
      return res.redirect("/");
    } catch (err) {
      console.log(err);
    }
  },
  me: (req, res, next) => {
    try {
      if (!req.user) {
        return res.sendStatus(401);
      } else {
        const userLogged = {
          id: req.user.id,
          email: req.user.email,
          fullName: req.user.fullName,
          address: req.user.address,
          country: req.user.country,
          phone: req.user.phone,
        };
        return res.send(userLogged);
      }
    } catch (err) {
      console.log(err);
    }
  },
};

module.exports = auth_controller;
