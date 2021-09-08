const Sequelize = require(`sequelize`);
const db = require("../db/db");

//-- User Model
class Options extends Sequelize.Model {}
Options.init(
  {
    optionName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  { sequelize: db, modelName: "options" }
);
module.exports = Options;
