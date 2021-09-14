import * as React from "react";
import { Link } from "react-router-dom";
import { Box, Button, SimpleGrid, Image, Center } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../store/productsReducer";

const List = () => {
  const products = useSelector((state) => {
    // console.log("STATE", state.products);
    return state.products;
  });
  // console.log("PRODUCTS", products);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getProducts());
  }, []);

  const setOneProduct = (e) => {
    localStorage.setItem("product", e);
  };

  return (
    <SimpleGrid
      minChildWidth="305px"
      spacing={50}
      ml={100}
      mr={100}
      mt={100}
      mb={100}
    >
      {products &&
        products.map((product) => {
          return (
            <Box
              maxW="sm"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
            >
              <Image src={`${product.image}`} boxSize="350px" />{" "}
              <Center>
                <Box
                  mt="10"
                  ml="5"
                  mr="5"
                  fontWeight="semibold"
                  as="h4"
                  lineHeight="tight"
                  isTruncated
                >{`${product.title}`}</Box>
              </Center>
              <Center>
                <Box>{`$ ${product.price}`}</Box>
              </Center>
              <Center>
                <Box d="flex" mt="2" alignItems="center">
                  <Box as="span" mb="5" color="gray.600" fontSize="sm">
                    {product.rating.count} {product.rating.rate} star reviews
                  </Box>
                </Box>
              </Center>
              <Box mb={5}>
                <Center>
                  <Link to={`/products/${product.title}`}>
                    <Button
                      colorScheme="teal"
                      onClick={() => setOneProduct(product.title)}
                    >
                      Ver más
                    </Button>
                  </Link>
                </Center>
              </Box>
            </Box>
          );
        })}
    </SimpleGrid>
  );
};

export default List;
