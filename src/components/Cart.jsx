import React from "react";
import { Link } from "react-router-dom";
import useCart from "../hooks/useCart";

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
  Flex,
} from "@chakra-ui/react";
import { AddIcon, MinusIcon, DeleteIcon } from "@chakra-ui/icons";

function Cart() {
  const { substractQuantity, addOneMoreProduct, deleteProductCart, orderform } =
    useCart();

  return (
    <>
      <Flex
        flexDirection="column"
        width="100wh"
        height="100vh"
        backgroundColor="gray.200"
        justifyContent="center"
        alignItems="center"
      >
        <Heading
          fontSize="2xl"
          textAlign="center"
          marginTop="20px"
          color="teal.400"
        >
          MI CARRITO
        </Heading>
        <Stack
          flexDir="column"
          mb="2"
          justifyContent="center"
          alignItems="center"
        >
          <Box display="flex" alignItems="center">
            {orderform ? (
              orderform.items.length > 0 ? (
                <Table>
                  <Thead>
                    <Tr>
                      <Th>Producto</Th>
                      <Th></Th>
                      <Th></Th>
                      <Th>Cantidad</Th>
                      <Th>Precio</Th>
                      <Th></Th>
                    </Tr>
                  </Thead>

                  <Tbody>
                    {orderform
                      ? orderform.items.map((product) => (
                          <Tr>
                            <Td>
                              <Image src={product.image} boxSize="50px" />
                            </Td>
                            <Td fontSize="md">{product.title}</Td>
                            <Td fontSize="xs">{product.description}</Td>
                            <Td>
                              <Stack spacing={4} direction="row" align="center">
                                <Button
                                  colorScheme="teal"
                                  size="xs"
                                  onClick={() =>
                                    substractQuantity(product, product.quantity)
                                  }
                                >
                                  <MinusIcon />
                                </Button>
                                <Box> {product.quantity} </Box>

                                <Button
                                  colorScheme="teal"
                                  size="xs"
                                  onClick={() => addOneMoreProduct(product)}
                                >
                                  <AddIcon />
                                </Button>
                              </Stack>
                            </Td>
                            <Td>${Number(product.price * product.quantity)}</Td>
                            <Td>
                              <Button
                                colorScheme="teal"
                                size="xs"
                                onClick={() =>
                                  deleteProductCart(product, product.quantity)
                                }
                              >
                                <DeleteIcon />
                              </Button>
                            </Td>
                          </Tr>
                        ))
                      : ""}
                  </Tbody>

                  <Tfoot>
                    <Tr>
                      <Th mr="4" fontSize="2xl">
                        TOTAL
                      </Th>

                      <Th mr="4" fontSize="2xl">
                        $
                        {orderform.items.reduce(function (eAnterior, eActual) {
                          return (
                            eAnterior + Number(eActual.price * eActual.quantity)
                          );
                        }, 0)}
                      </Th>
                    </Tr>
                  </Tfoot>
                </Table>
              ) : (
                ""
              )
            ) : (
              ""
            )}
          </Box>
          <Box>
            {orderform.items.length > 0 ? (
              <Link to="/checkout">Checkout</Link>
            ) : (
              <Box>No hay productos en el carrito.</Box>
            )}
          </Box>
        </Stack>
      </Flex>
    </>
  );
}

export default Cart;
