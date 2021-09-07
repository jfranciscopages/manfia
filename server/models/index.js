const Categories = require(`./Categories`);

//CONECCIONES  /tablas intermedias
/* Favourites.belongsTo(Users, { as: "author" }); */
/* Users.hasMany(Favourites);
Favourites.belongsTo(Users);
 */
module.exports = {
  Categories: Categories,
};
