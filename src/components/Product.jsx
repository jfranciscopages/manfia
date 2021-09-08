import * as React from "react";

import {
  Grid,
  GridItem,
  Container,
  Box,
  SimpleGrid,
  Flex,
  Center,
  Image,
  Stack,
  Heading,
  Button,
} from "@chakra-ui/react";

export function Product() {
  return (
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
          src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
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
        Mens Casual Premium Slim Fit T-Shirts
        <Box
          mt="20px"
          ml=""
          mr="5"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          Description : Remera manga corta, dos colores, cero onda
        </Box>
        <br />
        <Box>Price : US$ 3.000</Box>
        <br />
        <Box>Talle : S-M-L-XL</Box>
        <br />
        <Box mb={5}>
          <Center>
            <Button colorScheme="teal">Comprar</Button>
          </Center>
        </Box>
      </Box>
    </Flex>
  );
}
