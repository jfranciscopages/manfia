const Sequelize = require(`sequelize`);
const db = require("../db/db");

//-- User Model
class Orders extends Sequelize.Model {}
Orders.init(
  {
    ammount: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    shippingAddress: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    orderAddress: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    orderEmail: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    orderDate: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    orderStatus: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  { sequelize: db, modelName: "orders" }
);
module.exports = Orders;
