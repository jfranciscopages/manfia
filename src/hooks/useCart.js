import React from "react";
import { useHistory } from "react-router";
import { nostockAlert } from "../utils/alerts";

function useCart() {
  const history = useHistory();
  const [changes, setchanges] = React.useState(false);

  let orderform = JSON.parse(window.localStorage.getItem("orderform"));

  const addProductToCart = (product) => {
    let orderform = JSON.parse(window.localStorage.getItem("orderform"));
    let item;
    let aux = {
      id: product.id,
      image: product.image,
      title: product.title,
      price: product.price,
      quantity: 1,
      stock: Number(product.stock),
      orderId: "",
    };
    //buscamos si hay un producto igual, si hay le sumamos lo que hayamos cargado
    //(queda configurar que solo se pueda cargar lo que queda de stock)
    if (orderform.items.length > 0) {
      let itemIndex = orderform.items.findIndex(
        (prod) => prod.id === product.id
      );
      if (itemIndex != -1) item = orderform.items.splice(itemIndex, 1).pop();
      if (item && item.quantity + 1 <= item.stock) {
        item.quantity++;
        orderform.items.push(item);
      } else if (item) {
        console.log(`Sin STOCK!!`);
        orderform.items.push(item);
      } else {
        orderform.items.push(aux);
      }
    } else {
      orderform.items.push(aux);
    }
    window.localStorage.setItem("orderform", JSON.stringify(orderform));
  };

  const addOneMoreProduct = (product) => {
    orderform = JSON.parse(window.localStorage.getItem("orderform"));
    if (orderform.items.length > 0) {
      orderform.items.map((prod) => {
        if (prod.id == product.id) {
          if (prod.quantity + 1 <= prod.stock) prod.quantity++;
          else nostockAlert();
        }
      });
    }
    //luego lo volvemos a setear en localstorage
    window.localStorage.setItem("orderform", JSON.stringify(orderform));
    setchanges(!changes);
  };

  const substractQuantity = (product) => {
    if (orderform.items.length > 0) {
      let idx = orderform.items.findIndex((prod) => prod.id == product.id);
      if (orderform.items[idx].quantity > 1) orderform.items[idx].quantity--;
      else orderform.items.splice(idx, 1);
    }
    window.localStorage.setItem("orderform", JSON.stringify(orderform));
    setchanges(!changes);
  };

  const deleteProductCart = (product) => {
    if (orderform.items.length > 0) {
      let idx = orderform.items.findIndex((prod) => prod.id == product.id);
      orderform.items.splice(idx, 1);
    }
    window.localStorage.setItem("orderform", JSON.stringify(orderform));
    setchanges(!changes);
  };

  return {
    substractQuantity,
    addProductToCart,
    addOneMoreProduct,
    deleteProductCart,
    orderform,
  };
}

export default useCart;
