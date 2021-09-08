const db = require("./index");
const User = require("../models/User");
const Category = require("../models/Category");
const Product = require("../models/Product");
const ProductCategory = require("../models/ProductCategory");

const userParaSeedear = [
  {
    access: "admin",
    email: "admin@gmail.com",
    password: "admin",
    fullName: "admin",
    address: "Cespedes 1567",
    country: "hola",
    phone: "1130922002",
  },
  {
    access: "user",
    email: "david@gmail.com",
    password: "david",
    fullName: "david guetta",
    address: "necochea 123",
    country: "argentina",
    phone: "15702367033",
  },
  {
    access: "user",
    email: "ramon@gmail.com",
    password: "ramon",
    fullName: "ramon guetta",
    address: "colombia 123",
    country: "colombia",
    phone: "15702367033",
  },
  {
    access: "user",
    email: "roberto@gmail.com",
    password: "roberto",
    fullName: "roberto guetta",
    address: "brasil 123",
    country: "brasil",
    phone: "15702367033",
  },

  {
    access: "user",
    email: "juan@gmail.com",
    password: "juan",
    fullName: "juan guetta",
    address: "venezuela 123",
    country: "venezuela",
    phone: "15702367033",
  },
];

const categoriasParaSeedear = [
  {
    name: "Remeras",
  },
  {
    name: "Pantalones",
  },
  {
    name: "Buzos",
  },
  {
    name: "Camperas",
  },
  {
    name: "Shorts",
  },
  {
    name: "",
  },
];

const productosPorCategoriaParaSeedear = [
  {
    categoryId: "1",
    productId: "1",
  },
  {
    categoryId: 2,
    productId: 1,
  },
  {
    categoryId: 8,
    productId: 2,
  },
  {
    categoryId: 4,
    productId: 2,
  },
  {
    categoryId: 8,
    productId: 3,
  },
  {
    categoryId: 4,
    productId: 3,
  },
  {
    categoryId: 5,
    productId: 4,
  },
  {
    categoryId: 6,
    productId: 4,
  },
  {
    categoryId: 5,
    productId: 5,
  },

  {
    categoryId: 6,
    productId: 5,
  },
  {
    categoryId: 1,
    productId: 6,
  },
  {
    categoryId: 3,
    productId: 6,
  },
  {
    categoryId: 9,
    productId: 6,
  },
  {
    categoryId: 1,
    productId: 7,
  },
  {
    categoryId: 3,
    productId: 7,
  },
  {
    categoryId: 2,
    productId: 8,
  },
  {
    categoryId: 5,
    productId: 8,
  },
  {
    categoryId: 4,
    productId: 8,
  },
  {
    categoryId: 8,
    productId: 9,
  },
  {
    categoryId: 4,
    productId: 9,
  },
  {
    categoryId: 2,
    productId: 9,
  },
];

const productosParaSeedear = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    sex: "men",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    category: "Remera",
    stock: "13",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirts ",
    price: 22.3,
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    sex: "women",
    image:
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    category: "Pantalon",
    stock: "13",
    rating: {
      rate: 4.1,
      count: "259",
    },
  },
  {
    id: 3,
    title: "Mens Cotton Jacket",
    price: 55.99,
    description:
      "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    sex: "men",
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    category: "Buzos",
    stock: "13",
    rating: {
      rate: 4.7,
      count: 500,
    },
  },
  {
    id: 4,
    title: "Mens Casual Slim Fit",
    price: 15.99,
    description:
      "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    sex: "women",
    image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    category: "Shorts",
    stock: "13",
    rating: {
      rate: 2.1,
      count: 430,
    },
  },
  {
    id: 5,
    title: "John Hardy Women's Legends Naga",
    price: 695,
    description:
      "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    sex: "men",
    image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
    category: "Remera",
    stock: "13",
    rating: {
      rate: 4.6,
      count: 400,
    },
  },
  {
    id: 6,
    title: "Solid Gold Petite Micropave ",
    price: 168,
    description:
      "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
    category: "women",
    stock: "13",
    rating: {
      rate: 3.9,
      count: 70,
    },
  },
  {
    id: 7,
    title: "Solid Gold Petite Micropave ",
    price: 168,
    description:
      "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
    category: "women",
    stock: "13",
    rating: {
      rate: 3.9,
      count: 70,
    },
  },
  {
    id: 8,
    title: "Solid Gold Petite Micropave ",
    price: 168,
    description:
      "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
    category: "women",
    stock: "13",
    rating: {
      rate: 3.9,
      count: 70,
    },
  },
  {
    id: 9,
    title: "Solid Gold Petite Micropave ",
    price: 168,
    description:
      "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
    category: "women",
    stock: "13",
    rating: {
      rate: 3.9,
      count: 70,
    },
  },
  {
    id: 10,
    title: "Solid Gold Petite Micropave ",
    price: 168,
    description:
      "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
    category: "women",
    stock: "13",
    rating: {
      rate: 3.9,
      count: 70,
    },
  },
  {
    id: 11,
    title: "Solid Gold Petite Micropave ",
    price: 168,
    description:
      "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
    category: "women",
    stock: "13",
    rating: {
      rate: 3.9,
      count: 70,
    },
  },
  {
    id: 12,
    title: "Solid Gold Petite Micropave ",
    price: 168,
    description:
      "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
    category: "women",
    stock: "13",
    rating: {
      rate: 3.9,
      count: 70,
    },
  },
  {
    id: 13,
    title: "Solid Gold Petite Micropave ",
    price: 168,
    description:
      "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
    category: "women",
    stock: "13",
    rating: {
      rate: 3.9,
      count: 70,
    },
  },
  {
    id: 14,
    title: "Solid Gold Petite Micropave ",
    price: 168,
    description:
      "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
    category: "women",
    stock: "13",
    rating: {
      rate: 3.9,
      count: 70,
    },
  },
];

const seed = () => {
  return User.bulkCreate(userParaSeedear)
    .then(() => Category.bulkCreate(categoriasParaSeedear))
    .then(() => Product.bulkCreate(productosParaSeedear))
    .then(() => ProductCategory.bulkCreate(productosPorCategoriaParaSeedear));
};

seed().then(() => {
  process.exit();
});
