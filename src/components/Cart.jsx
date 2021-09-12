import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import {
  getCart,
  addQuantityToCartProduct,
  substractQuantityToCartProduct,
  deleteCartProduct,
} from "../store/cartReducer";

import {
  Table,
  Tr,
  Td,
  Th,
  Box,
  Thead,
  Tbody,
  Tfoot,
  Button,
  Image,
  Stack,
  Heading,
  Spacer,
} from "@chakra-ui/react";
import { AddIcon, MinusIcon, DeleteIcon } from "@chakra-ui/icons";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const [quantity, setquantity] = useState();

  // traer orderId
  const orderId = 1;

  useEffect(() => {
    dispatch(getCart(orderId));
  }, []);

  const handleAddQuantity = (productId) => {
    dispatch(addQuantityToCartProduct(orderId, productId));
  };

  const handleSubstractQuantity = (productId) => {
    dispatch(substractQuantityToCartProduct(orderId, productId));
  };
  const handleDelete = (productId) => {
    dispatch(deleteCartProduct(orderId, productId));
  };

  const handleSubmit = () => {
    // redirigir a pagina checkout detalle
  };
  return (
    <>
      <Heading fontSize="2xl" textAlign="center" marginTop="20px">
        MI CARRITO
      </Heading>
      <Box display="flex" alignItems="center">
        <Table>
          <Thead>
            <Tr>
              <Th>Producto</Th>
              <Th></Th>
              <Th>Descripción</Th>
              <Th>Cantidad</Th>
              <Th>Precio</Th>
              <Th></Th>
            </Tr>
          </Thead>

          <Tbody>
            {cart.length > 0 ? (
              cart.map((product) => (
                <Tr>
                  <Td>
                    {" "}
                    <Image
                      src={product.image}
                      // layout={"fill"}
                      boxSize="50px"
                    />
                  </Td>
                  <Td fontSize="md">{product.title}</Td>
                  <Td fontSize="xs">{product.description}</Td>
                  <Td>
                    <Stack spacing={4} direction="row" align="center">
                      <Button
                        colorScheme="teal"
                        size="xs"
                        onClick={() =>
                          handleSubstractQuantity(product.productId)
                        }
                      >
                        <MinusIcon />
                      </Button>
                      <Box>
                        {
                          product.stock //poner quantity en lugar de stock!!
                        }
                      </Box>
                      <Button
                        colorScheme="teal"
                        size="xs"
                        onClick={() => handleAddQuantity(product.productId)}
                      >
                        <AddIcon />
                      </Button>
                    </Stack>
                  </Td>
                  <Td>{Number(product.price) * Number(product.stock)}</Td>
                  <Td>
                    <Button
                      colorScheme="teal"
                      size="xs"
                      onClick={() => handleDelete(product.productId)}
                    >
                      <DeleteIcon />
                    </Button>
                  </Td>
                </Tr>
              ))
            ) : (
              <em>No hay productos en el carrito.</em>
            )}
          </Tbody>

          <Tfoot>
            <Th mr="4" fontSize="2xl">
              TOTAL
            </Th>
            <Th>
              {cart.length > 0
                ? cart.reduce(function (eAnterior, eActual, indice) {
                    return eAnterior + Number(eActual.price);
                  }, 0)
                : ""}
            </Th>
          </Tfoot>
        </Table>
      </Box>
      <Box>
        <Link to="/checkout">Checkout</Link>
      </Box>
    </>
  );
};

export default Cart;
