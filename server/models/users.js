const Sequelize = require(`sequelize`);
const db = require("../db/db");

//-- User Model
class Users extends Sequelize.Model {}
Users.init(
  {
    email: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    fullName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    billingAddress: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    defaultShippingAddress: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    country: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    phone: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  { sequelize: db, modelName: "users" }
);
module.exports = Users;
