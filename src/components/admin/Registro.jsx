import { useColorModeValue } from "@chakra-ui/color-mode";
import {
  Box,
  Center,
  Container,
  Grid,
  GridItem,
  Flex,
  SimpleGrid,
  Text,
} from "@chakra-ui/layout";
import { useBreakpointValue } from "@chakra-ui/media-query";
import {
  Table,
  TableCaption,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/table";
import React from "react";

export default function Registro() {
  return (
    <>
      <br />
      <Table variant="striped" colorScheme="teal">
        <TableCaption>Registro de ventas</TableCaption>
        <Thead>
          <Tr>
            <Th>Producto</Th>
            <Th isNumeric> Número de orden</Th>
            <Th isNumeric>Precio</Th>
            <Th>Fecha de compra</Th>
            <Th isNumeric>Cantidad</Th>
            <Th isNumeric>Total</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>nombre del producto</Td>
            <Td>número de orden u orden id</Td>
            <Td isNumeric>precio individual</Td>
            <Td isNumeric>fecha de la compra</Td>
            <Td isNumeric>cant</Td>
            <Td isNumeric>precio*cantidad</Td>
          </Tr>
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>Producto</Th>
            <Th isNumeric> Número de orden</Th>
            <Th isNumeric>Precio</Th>
            <Th>Fecha de compra</Th>
            <Th isNumeric>Cantidad</Th>
            <Th isNumeric>Total</Th>
          </Tr>
        </Tfoot>
      </Table>
    </>
  );
}

/* nombre del producto / nombre del usuario / precio / fecha de compra */
/* 
PRODUCTO
NUMERO DE ORDEN
PRECIO
FECHA
CANTIDAD
TOTAL = PRECIO * CANTIDAD

  <Tr>
            <Td>feet</Td>
            <Td>centimetres (cm)</Td>
            <Td isNumeric>30.48</Td>
            <Td isNumeric>30.48</Td>
            <Td isNumeric>30.48</Td>
            <Td isNumeric>30.48</Td>
          </Tr>
          <Tr>
            <Td>yards</Td>
            <Td>metres (m)</Td>
            <Td isNumeric>0.91444</Td>
            <Td isNumeric>0.91444</Td>
            <Td isNumeric>0.91444</Td>
            <Td isNumeric>0.91444</Td>
          </Tr>

*/
