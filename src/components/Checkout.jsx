import React from "react";
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

import axios from "axios";
import { useHistory } from "react-router";

function Checkout() {
  const history = useHistory();
  let sendOrder = JSON.parse(window.localStorage.getItem("orderform"));
  console.log(sendOrder)

  let submitToBack = () => {
    console.log("send", sendOrder);
    axios
      .post("/api/cart/createOrder", sendOrder)
      .then((data) => {
        console.log(`dasodsaodsadosad`, data);
        history.push(`/history`);
      })
      .catch((err) => console.error(err));
  };

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
          Resumen de compra
        </Heading>
        <Stack
          flexDir="column"
          mb="2"
          justifyContent="center"
          alignItems="center"
        >
          <Box display="flex" alignItems="center">
            <Table>
              <Thead>
                <Tr>
                  <Th>Domicilio de envío</Th>
                  <Th>Medio de pago</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Th>{sendOrder.order.orderAddress}</Th>
                  <Th>{sendOrder.order.orderPaymentType}</Th>
                </Tr>
              </Tbody>
            </Table>
          </Box>
          <Box display="flex" alignItems="center">
            {sendOrder ? (
              sendOrder.items.length > 0 ? (
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
                    {sendOrder
                      ? sendOrder.items.map((product) => (
                          <Tr key={product.id}>
                            <Td>
                              <Image src={product.image} boxSize="50px" />
                            </Td>
                            <Td alignSelf="center" fontSize="md">
                              {product.title}
                            </Td>
                            <Td>
                              <Stack spacing={4} direction="row" align="center">
                                <Box> {product.quantity} </Box>
                              </Stack>
                            </Td>
                            <Td>${Number(product.price * product.quantity)}</Td>
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
                        ${sendOrder.order.totalAmmount}
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
            <Button onClick={() => submitToBack()}>FINALIZAR COMPRA</Button>
          </Box>
        </Stack>
      </Flex>
    </>
  );
}

export default Checkout;
