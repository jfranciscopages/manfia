const Sequelize = require(`sequelize`);
const db = require("../db/db");

//-- User Model
class Products_Options extends Sequelize.Model {}
Products_Options.init(
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    optionId: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    productId: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  { sequelize: db, modelName: "products_options" }
);
module.exports = Products_Options;
