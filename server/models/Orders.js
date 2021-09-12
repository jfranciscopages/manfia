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
      allowNull: true,
    },
    orderAddress: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    orderEmail: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    orderDate: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    orderStatus: {
      type: Sequelize.STRING,
      allowNull: true,
    },
  },
  { sequelize: db, modelName: "orders" }
);
module.exports = Orders;
