import React, { useEffect } from "react";

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

function ShoppingHistory() {
  const [shoppingHistory, setShoppingHistory] = React.useState([]);
  let orderform = JSON.parse(window.localStorage.getItem("orderform"));

  useEffect(() => {
    axios
      .get(`/api/cart/history/${orderform.clientProfile.id}`)
      .then((res) => res.data)
      .then((history) => {
        console.log("viene del back", history);
        return setShoppingHistory(history);
      });
  }, []);

  return (
    <>
      {console.log(shoppingHistory)}
      <Flex
        flexDirection="column"
        width="100wh"
        height="100vh"
        backgroundColor="gray.200"
        justifyContent="center"
        alignItems="center"
      >
        <Stack
          flexDir="column"
          mb="2"
          justifyContent="center"
          alignItems="center"
        >
          <Heading
            fontSize="2xl"
            textAlign="center"
            marginTop="20px"
            color="teal.400"
          >
            Volver a Comprar
          </Heading>
        </Stack>
      </Flex>
    </>
  );
}

export default ShoppingHistory;
