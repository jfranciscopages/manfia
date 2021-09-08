const Sequelize = require(`sequelize`);
const db = require("../db/db");

//-- User Model
class Categories extends Sequelize.Model {}
Categories.init(
  {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    thumbnail: {
      type: Sequelize.STRING,
      allowNull: true,
    },
  },
  { sequelize: db, modelName: "categories" }
);
module.exports = Categories;
