const Categories = require(`./Categories`);
const Products = require(`./Products`);
const Orders = require(`./Orders`);
const Users = require(`./Users`);
const Options = require(`./Options`);
const Order_Details = require(`./Order_details`);
const Products_Categories = require(`./Products_Categories`);
const Products_Options = require(`./Products_Options`);

//CONECCIONES  /tablas intermedias
Products.belongsToMany(Options, { through: "products_options" });
Options.belongsToMany(Products, { through: "products_options" });
Products.belongsToMany(Categories, { through: "products_categories" });
Categories.belongsToMany(Products, { through: "products_categories" });

Products.hasMany(Order_Details);
Order_Details.belongsTo(Products);

Orders.hasMany(Order_Details);
Order_Details.belongsTo(Orders);

Users.hasMany(Orders);
Orders.belongsTo(Users);

module.exports = {
  Categories: Categories,
  Products_Categories: Products_Categories,
  Products: Products,
  Orders: Orders,
  Users: Users,
  Order_Details: Order_Details,
  Options: Options,
  Products_Options: Products_Options,
};
