import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { singleProduct } from "../store/productReducer";
import axios from "axios";

import { Box, Flex, Center, Image, Button } from "@chakra-ui/react";

export function Product() {
  const nameProduct = localStorage.getItem("product");
  const dispatch = useDispatch();
  const [product, setProduct] = React.useState({});

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
            <Button colorScheme="teal">Comprar</Button>
          </Center>
        </Box>
      </Box>
    </Flex>
  ) : (
    <Flex>'CARGANDOO PAAA!!!'</Flex>
  );
}
