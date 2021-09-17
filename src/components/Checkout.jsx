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
<Box  backgroundColor="gray.200">

      <Heading
          fontSize="3xl"
          marginTop="0px"
          paddingLeft="30px"
          paddingTop="50px"
          color="teal.400"
          backgroundColor="gray.200"
        >
          Envío
        </Heading>
          <Box display="flex" alignItems="center"   paddingTop="10px"   backgroundColor="gray.200" >
            <Table   >
              <Thead>
                <Tr>
                  <Th fontSize="lg" color="black">Domicilio de envío</Th>
                  <Td textTransform="uppercase" fontSize="lg" color ="black">{sendOrder.order.orderAddress}</Td>
                 
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Th fontSize="lg" color="black">Medio de pago</Th>
                  <Td textTransform="uppercase" fontSize="lg" color ="black">{sendOrder.order.orderPaymentType}</Td>
                </Tr>
              </Tbody>
            </Table>
          </Box>
    
   
        <Heading
          fontSize="3xl"
          paddingLeft="30px"
          paddingTop="50px"
          color="teal.400"
          backgroundColor="gray.200"
          paddingBottom="50px"
        >
          Resumen de compra
        </Heading>
          <Box display="flex" alignItems="center">
            {sendOrder ? (
              sendOrder.items.length > 0 ? (
                <Table>
                  <Thead>
                    <Tr>
                      <Th fontSize="xl" color="black">Producto</Th>
                      <Th></Th>

                      <Th fontSize="xl" color="black">Cantidad</Th>
                      <Th fontSize="xl" color="black">Precio</Th>
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
                            <Td  alignSelf="center" fontSize="xl">
                              {product.title}
                            </Td>
                            <Td>
                              <Stack spacing={4} direction="row" align="center">
                                <Box></Box>
                                <Box></Box>
                                <Box></Box>
                                <Box fontSize="xl" align="center" > {product.quantity} </Box>
                              </Stack>
                            </Td>
                            <Td fontSize="xl">${Number(product.price * product.quantity)}</Td>
                          </Tr>
                        ))
                      : ""}
                  </Tbody>

  
                  <Tfoot >
                    <Tr>
                      <Th></Th>
                      <Th></Th>
            
                      <Th mr="4" color="black" fontSize="2xl">
                        TOTAL
                      </Th>

                      <Th mr="4" color="black" fontSize="2xl">
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
          
          <Box paddingBottom="70px" paddingTop="50px"  align="center">
            <Button colorScheme="teal" fontSize="xl" onClick={() => submitToBack()}>FINALIZAR COMPRA</Button>
          </Box>
        {/* </Stack> */}
        
      
      {/* </Flex> */}
    </Box>
    </>
  );
}

export default Checkout;
