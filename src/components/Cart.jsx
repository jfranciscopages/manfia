import React from "react";
import useCart from "../hooks/useCart";
import CheckoutButton from "./CheckoutButton";
import GoLoginButton from "./GoLoginButton";
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
  let orderform = JSON.parse(window.localStorage.getItem("orderform"));
  const {
    substractQuantity,
    addOneMoreProduct,
    deleteProductCart,
    totalAmountToPay,
    changes,
  } = useCart();

  React.useEffect(() => {
    orderform = JSON.parse(window.localStorage.getItem("orderform"));
  }, [changes]);

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

                      <Th>Cantidad</Th>
                      <Th>Precio</Th>
                      <Th></Th>
                    </Tr>
                  </Thead>

                  <Tbody>
                    {orderform.items.length > 0
                      ? orderform.items.map((product) => (
                          <Tr key={product.id}>
                            <Td>
                              <Image src={product.image} boxSize="50px" />
                            </Td>
                            <Td fontSize="md">{product.title}</Td>

                            <Td>
                              <Stack spacing={4} direction="row" align="center">
                                <Button
                                  colorScheme="teal"
                                  size="xs"
                                  onClick={() => substractQuantity(product)}
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
                                onClick={() => deleteProductCart(product)}
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
                        ${totalAmountToPay}
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
              orderform.clientProfile != null ? (
                <CheckoutButton />
              ) : (
                <GoLoginButton />
              )
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
