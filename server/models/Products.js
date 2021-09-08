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
      type: Sequelize.TEXT,
      allowNull: false,
    },
    sex: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    image: {
      type: Sequelize.TEXT,
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
    raiting: {
      type: Sequelize.JSON,
      allowNull: false,
    },
  },
  { sequelize: db, modelName: "products" }
);
module.exports = Products;
