import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { DeleteCart, IncreaseQuantity } from "../store/cart";
import { Product } from "./Product";
import { Button, IconButton, ButtonGroup, Box } from "@chakra-ui/react";
import axios from "axios";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const [products, setproducts] = useState({});
  const [quantity, setquantity] = useState(0);

  useEffect(async () => {
    // dispatch(GetAllProduct());
    const prod = localStorage.getItem("product");
    console.log("PROD", prod);
    await axios
      .get(`/api/products/${prod}`)
      .then((res) => setproducts(res.data));
  }, []);
  console.log(products);
  return products ? (
    <div>
      <h3>Tu Carrito</h3>
      <>
        <Product
          title={products.title}
          price={products.price}
          quantity={products.quantity}
          total={products.price * products.quantity}
        />
        <ButtonGroup size="sm" isAttached variant="outline">
          <Button mr="-px" onClick={() => dispatch(IncreaseQuantity)}>
            Agregar +
          </Button>
          <IconButton aria-label="Add one" />
        </ButtonGroup>

        <ButtonGroup size="sm" isAttached variant="outline">
          <Button mr="-px" onClick={() => dispatch(DeleteCart)}>
            Restar -
          </Button>
          <IconButton aria-label="Rest one" />
        </ButtonGroup>

        <ButtonGroup size="sm" isAttached variant="outline">
          <Button mr="-px">Remover producto</Button>
          <IconButton aria-label="Remove from cart" />
        </ButtonGroup>
      </>
      {/* <p>Total:{total}</p> */}
      {products.length > 0 ? <Link to="/checkout">Checkout</Link> : ""}
    </div>
  ) : (
    <Box>HGOLANDASDASDAS!!</Box>
  );
};

export default Cart;
