const db = require("./db/db");
const Categories = require("./models/Categories");
const Products = require("./models/Products");
const Products_Categories = require("./models/Products_Categories");
const User_Profile = require("./models/User_Profile");

const userAdmin = {
  access: "admin",
  email: "admin@gmail.com",
  password: "admin",
  fullName: "adminName",
  address: "Cespedes 1567",
  country: "Argentina",
  phone: "1130922002",
};

const categoriasParaSeedear = [
  {
    name: "Remeras femeninas",
    sex: "Women",
  },
  {
    name: "Pantalones femeninos",
    sex: "Women",
  },
  {
    name: "Buzos femeninos",
    sex: "Women",
  },
  {
    name: "Camperas femeninas",
    sex: "Women",
  },
  {
    name: "Shorts femeninos",
    sex: "Women",
  },
  {
    name: "Remeras masculinas",
    sex: "Men",
  },
  {
    name: "Pantalones masculinas",
    sex: "Men",
  },
  {
    name: "Buzos masculinas",
    sex: "Men",
  },
  {
    name: "Camperas masculinas",
    sex: "Men",
  },
  {
    name: "Shorts masculinos",
    sex: "Men",
  },
];

const productosPorCategoriaParaSeedear = [
  {
    productId: "1",
    categoryId: "6",
  },
  {
    productId: "2",
    categoryId: "7",
  },
  {
    productId: "3",
    categoryId: "9",
  },
  {
    productId: "4",
    categoryId: "5",
  },
  {
    productId: "5",
    categoryId: "6",
  },
  {
    productId: "6",
    categoryId: "10",
  },
  {
    productId: "7",
    categoryId: "2",
  },
  {
    productId: "8",
    categoryId: "3",
  },
  {
    productId: "9",
    categoryId: "4",
  },

  {
    productId: "10",
    categoryId: "8",
  },
  {
    productId: "11",
    categoryId: "1",
  },
  {
    productId: "12",
    categoryId: "9",
  },
  {
    productId: "13",
    categoryId: "2",
  },
  {
    productId: "14",
    categoryId: "7",
  },
];

const productosParaSeedear = [
  {
    title: "Remera Camiseta Deportiva Basica",
    price: "830",
    description:
      "Remera de Poliéster dedicada a entrenamiento, running, gimnasio, futbol, rugby, ciclismo, calistenia, crossfit, funcional, atletismo",
    sex: "Men",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_894364-MLA46482980985_062021-O.webp",
    category: "Remeras",
    stock: "10",
    rating: {
      rate: 3,
      count: 114,
    },
  },
  {
    title: "Pantalon Gabardina Cargo",
    price: "4589",
    description:
      "Pantalon cargo jogger de gabardina con cintura y puños con elásticos",
    sex: "Men",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_725602-MLA31478442555_072019-O.webp",
    category: "Pantalones",
    stock: "3",
    rating: {
      rate: 4,
      count: 259,
    },
  },
  {
    title: "Chaqueta de algodón para hombre",
    price: "8590",
    description: "Hombre chaqueta cotton otoño/invierno",
    sex: "Men",
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    category: "Camperas",
    stock: "24",
    rating: {
      rate: 2,
      count: 500,
    },
  },
  {
    title: "Short Pollera Lycra",
    price: "1590",
    description:
      "Short pollera deportivo de lycra. Talles del 1 al 5. Colores surtidos",
    sex: "Women",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_747741-MLA43825846368_102020-O.webp",
    category: "Shorts",
    stock: "1",
    rating: {
      rate: 5,
      count: 430,
    },
  },
  {
    title: "Remera lisa manga corta algodón Premium",
    price: "749",
    description: "Remeras de algodón peinado de excelente calidad",
    sex: "Men",
    image:
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    category: "Remeras",
    stock: "13",
    rating: {
      rate: 4,
      count: 400,
    },
  },
  {
    title: "Short Hombre Algodon",
    price: "1468",
    description: "Short Hombre Algodon Gym Entrenador Bermudas Tennis.",
    sex: "Men",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_940931-MLA43815314977_102020-O.webp",
    category: "Shorts",
    stock: "13",
    rating: {
      rate: 3,
      count: 70,
    },
  },
  {
    title: "Pantalon De Mujer Bengalina Oficina Lazo Elastizado",
    price: "1499",
    description:
      "Satisfacción garantizada. Devuelva o cambie cualquier pedido dentro de los 30 días. Diseñado y vendido por Hafeez Center en los Estados Unidos. ",
    sex: "Women",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_901821-MLA41805538113_052020-O.webp",
    category: "Pantalones",
    stock: "13",
    rating: {
      rate: 3,
      count: 70,
    },
  },
  {
    title: "Fase Lunar Aesthetic Buzo Black/withe",
    price: "4000",
    description: "Fase Lunar Aesthetic Buzo Black/withe - Japan Goth Moon.",
    sex: "Women",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_653437-MLA40662684122_022020-O.webp",
    category: "Buzos",
    stock: "13",
    rating: {
      rate: 3,
      count: 70,
    },
  },
  {
    title: "Campera de mujer Nova",
    price: "25472",
    description:
      "Esta prenda posee un tratamiento de repelencia al agua, que dificulta que el tejido la absorba favoreciendo las propiedades de impermeabilidad y antimanchas",
    sex: "Women",
    image:
      "https://d368r8jqz0fwvm.cloudfront.net/16293-product_lg/campera-de-mujer-nova.jpg",
    category: "Camperas",
    stock: "13",
    rating: {
      rate: 3,
      count: 70,
    },
  },
  {
    title: "Buzo de hombre Grayson",
    price: "7162",
    description:
      "Es de secado rápido. Gracias a los canales generados entre sus puntos de contacto absorbe y elimina el exceso de calor corporal, manteniendo el cuerpo seco durante la actividad",
    sex: "Men",
    image:
      "https://d368r8jqz0fwvm.cloudfront.net/27529-product_lg/buzo-de-hombre-grayson.jpg",
    category: "Buzos",
    stock: "12",
    rating: {
      rate: 3,
      count: 70,
    },
  },
  {
    title: "Remera de mujer Verena",
    price: "3376",
    description:
      "La moldería de esta prenda contempla un margen de encogimiento en el largo, ya que por la composición de su tejido, puede encoger después del primer lavado.",
    sex: "Women",
    image:
      "https://d368r8jqz0fwvm.cloudfront.net/26257-product_lg/remera-de-mujer-verena.jpg",
    category: "Remeras",
    stock: "13",
    rating: {
      rate: 2,
      count: 70,
    },
  },
  {
    title: "Campera de hombre Blake Neo",
    price: "20777",
    description:
      "Posee un tratamiento de repelencia al agua, que dificulta que el tejido la absorba favoreciendo las propiedades de impermeabilidad y antimanchas",
    sex: "Men",
    image:
      "https://d368r8jqz0fwvm.cloudfront.net/24805-product_lg/campera-de-hombre-blake-neo.jpg",
    category: "Camperas",
    stock: "13",
    rating: {
      rate: 4,
      count: 70,
    },
  },
  {
    title: "Pantalones deportivos ligeros, tipo jogger, con bolsillos",
    price: "68",
    description:
      " Los pantalones felpa son suaves, transpirables y elásticos y no se deforman, no se descoloran ni desgastan fácilmente, proporcionando la máxima durabilidad.",
    sex: "Women",
    image: "https://m.media-amazon.com/images/I/71-2LpyzPRL._AC_UX522_.jpg",
    category: "Pantalones",
    stock: "19",
    rating: {
      rate: 2,
      count: 70,
    },
  },
  {
    title: "Pantalones cortos de algodón de calidad para hombre",
    price: "168",
    description: "Bermudas formales cómodas, talla grande, talla asiática.",
    sex: "Men",
    image:
      "https://images-eu.ssl-images-amazon.com/images/I/61KBFD2NyaL._AC._SR360,460.jpg",
    category: "Pantalones",
    stock: "13",
    rating: {
      rate: 1,
      count: 70,
    },
  },
];

const seed = async () => {
  await User_Profile.create(userAdmin);
  return Categories.bulkCreate(categoriasParaSeedear)
    .then(() => Products.bulkCreate(productosParaSeedear))
    .then(() =>
      Products_Categories.bulkCreate(productosPorCategoriaParaSeedear)
    )
    .catch((err) => console.log(err));
};

seed().then(() => {
  process.exit();
});
