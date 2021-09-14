import React from "react";

import axios from "axios";
import { nostockAlert } from "../utils/alerts";

function useCart() {
  const nameProduct = localStorage.getItem("product");

  const [product, setProduct] = React.useState({});
  const [changes, setchanges] = React.useState(false);

  const orderform = JSON.parse(window.localStorage.getItem("orderform"));

  React.useEffect(async () => {
    axios
      .get(`/api/products/${nameProduct}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((e) => console.log(e));
  }, [changes]);

  const substractQuantity = (product, quantity) => {
    let aux = {
      id: product.id,
      image: product.image,
      title: product.title,
      price: product.price,
      quantity: quantity,
      stock: Number(product.stock),
    };
    if (orderform.items.length > 0) {
      let idx = orderform.items.findIndex((prod) => prod.id == aux.id);
      if (orderform.items[idx].quantity > 1) orderform.items[idx].quantity--;
      else orderform.items.splice(idx, 1);
    }
    window.localStorage.setItem("orderform", JSON.stringify(orderform));

    setchanges(!changes);
  };

  const addProductToCart = (product, quantity) => {
    //trae el objeto del local storage
    let aux = {
      id: product.id,
      image: product.image,
      title: product.title,
      price: product.price,
      quantity: quantity,
      stock: Number(product.stock),
    };
    if (orderform.items.length > 0) {
      orderform.items.map((prod) => {
        if (prod.id == aux.id) {
          if (prod.quantity + aux.quantity <= aux.stock) prod.quantity++;
          else nostockAlert() 
        }
      });
    }
    //luego lo volvemos a setear en localstorage
    window.localStorage.setItem("orderform", JSON.stringify(orderform));
    setchanges(!changes);
  };

  const deleteProductCart = (product, quantity) => {
    let aux = {
      id: product.id,
      image: product.image,
      title: product.title,
      price: product.price,
      quantity: quantity,
      stock: Number(product.stock),
    };
    if (orderform.items.length > 0) {
      let idx = orderform.items.findIndex((prod) => prod.id == aux.id);
      orderform.items.splice(idx, 1);
    }
    window.localStorage.setItem("orderform", JSON.stringify(orderform));
    setchanges(!changes);
  };  

  return {
    substractQuantity,
    addProductToCart,
    deleteProductCart,
    orderform,
  };
}

export default useCart;