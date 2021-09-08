const Sequelize = require(`sequelize`);
const db = require("../db/db");

//-- User Model
class Products extends Sequelize.Model {}
Products.init(
  {
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    price: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    sex: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    image: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    category: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    stock: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  { sequelize: db, modelName: "products" }
);
module.exports = Products;
