import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { singleProduct } from "../store/productReducer";
import axios from "axios";

import { Box, Flex, Center, Image, Button } from "@chakra-ui/react";

export function Product() {
  const nameProduct = localStorage.getItem("product");
  console.log(nameProduct);
  const dispatch = useDispatch();
  const [product, setProduct] = React.useState({});
  const [quantity, setQuantity] = React.useState(1);
  React.useEffect(async () => {
    console.log(nameProduct);
    axios
      .get(`/api/products/${nameProduct}`)
      .then((res) => {
        console.log("RES DATA", res.data);
        setProduct(res.data);
      })
      .catch((e) => console.log(e));
  }, []);

  const addQuantity = () => {
    let suma = 1;
    //combierte el stock a numero y compara con la cantidad
    if (Number(product.stock) > quantity) suma = quantity + 1;
    else console.log(`sin stock pa!`);
    setQuantity(suma);
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
    const orderform = JSON.parse(window.localStorage.getItem("orderform"));
    //buscamos si hay un producto igual, si hay le sumamos lo que hayamos cargado
    //(queda configurar que solo se pueda cargar lo que queda de stock)
    if (orderform.items.length > 0) {
      orderform.items.map((prod) => {
        if (prod.id == aux.id) {
          if (prod.quantity + aux.quantity <= aux.stock)
            prod.quantity += aux.quantity;
          else console.log(`sin stock padre!`);
        }
      });
    }
    //sino lo cargamos a orderform
    else orderform.items.push(aux);
    //luego lo volvemos a setear en localstorage
    console.log(`suma de productos iguales`, orderform);
    window.localStorage.setItem("orderform", JSON.stringify(orderform));
  };

  return product ? (
    <Flex>
      <Box
        maxW="sm"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        ml="150px"
        mt="75px"
      >
        <Image
          src={`${product.image}`}
          // layout={"fill"}
          boxSize="350px"
        />{" "}
        <Center>
          <Box d="flex" mt="2" alignItems="center">
            <Box as="span" mb="5" color="gray.600" fontSize="sm"></Box>
          </Box>
        </Center>
      </Box>

      <Box
        mt="120px"
        ml="50px"
        mr="5"
        fontWeight="semibold"
        as="h4"
        lineHeight="tight"
        isTruncated
      >
        {product.title}{" "}
        <Box
          mt="20px"
          ml=""
          mr="5"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {product.description}{" "}
        </Box>
        <br />
        <Box>Price: $ {product.price}</Box>
        <br />
        <Box>Talle : S-M-L-XL</Box>
        <br />
        <Box mb={5}>
          <Center>
            {/* aca hay que configurar que se vea la cantidad que estamos agregando y que no te deje agregar mas de lo que hay en stock */}
            <Button onClick={() => addQuantity()} colorScheme="teal">
              +1
            </Button>
            <Button
              onClick={() => addProductToCart(product, quantity)}
              colorScheme="teal"
            >
              Comprar
            </Button>
          </Center>
        </Box>
      </Box>
    </Flex>
  ) : (
    <Flex>'CARGANDOO PAAA!!!'</Flex>
  );
}
