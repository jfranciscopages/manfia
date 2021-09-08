const Sequelize = require(`sequelize`);
const db = require("../db/db");

//-- User Model
class Order_Details extends Sequelize.Model {}
Order_Details.init(
  {
    price: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    cuantity: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  { sequelize: db, modelName: "order_details" }
);
module.exports = Order_Details;
