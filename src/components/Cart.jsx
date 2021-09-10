import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";
import { GetAllProduct, DeleteCart, IncreaseQuantity,DecreaseQuantity, onCheckoutClicked } from "../store/cart";
import {Product} from "./Product"
import{
    Button,
    IconButton,
    ButtonGroup,
    AddIcon
} from "@chakra-ui/react";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const [products, setproducts] = useState([  
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
]);
  const [quantity, setquantity] = useState(0);

  useEffect(() => {
    dispatch(GetAllProduct());
  },[]);


  return (
    <div>
      <h3>Tu Carrito</h3>
     {  products.length > 0 ? products.map(product =>
      <>
      <Product
        title={product.title}
        price={product.price}
        quantity={product.quantity}
        total={product.price*product.quantity}
      />
      <ButtonGroup size="sm" isAttached variant="outline">
      <Button mr="-px" onClick={()=>dispatch(IncreaseQuantity)}>Agregar +</Button> 
      <IconButton aria-label="Add one"  />
      </ButtonGroup>

      <ButtonGroup size="sm" isAttached variant="outline">
      <Button mr="-px" onClick={()=>dispatch(DeleteCart)}>Restar -</Button> 
      <IconButton aria-label="Rest one"  />
      </ButtonGroup>

      <ButtonGroup size="sm" isAttached variant="outline">
      <Button mr="-px" onClick={()=>dispatch(DecreaseQuantity)}>Remover producto</Button>
      <IconButton aria-label="Remove from cart"  />
      </ButtonGroup>
      </>
      ) : <em>No hay productos en el carrito.</em>}


      {/* <p>Total:{total}</p> */}
      {products.length > 0 ?
      <Link to="/checkout">
    
      Checkout
        </Link>: ''}
    </div>
  );
}

export default Cart