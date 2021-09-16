import * as React from "react";
import { useSelector} from "react-redux";

import { Box, Center, Image, Button, SimpleGrid } from "@chakra-ui/react";

const SearchOptions = () => {
  console.log("TITLE COMPONENTE");
  const search = useSelector((state) => state.search);

  console.log("SEARCH", search);

  return (
    <SimpleGrid
      minChildWidth="305px"
      spacing={50}
      ml={100}
      mr={100}
      mt={100}
      mb={100}
    >
      {search &&
        search.map((search) => {
          return (
            <Box
              maxW="sm"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
            >
              <Image src={`${search.image}`} boxSize="350px" />{" "}
              <Center>
                <Box
                  mt="10"
                  ml="5"
                  mr="5"
                  fontWeight="semibold"
                  as="h4"
                  lineHeight="tight"
                  isTruncated
                >{`${search.title}`}</Box>
              </Center>
              <Center>
                <Box>{`$ ${search.price}`}</Box>
              </Center>
              <Center>
                <Box d="flex" mt="2" alignItems="center">
                  <Box as="span" mb="5" color="gray.600" fontSize="sm">
                    {search.rating.count} {search.rating.rate} star reviews
                  </Box>
                </Box>
              </Center>
              <Box mb={5}>
                <Center>
                  {/* <Link to={`/products/${product.title}`}> */}
                  <Button
                    colorScheme="teal"
                    //   onClick={() => setOneProduct(product.title)}
                  >
                    Ver más
                  </Button>
                  {/* </Link> */}
                </Center>
              </Box>
            </Box>
          );
        })}
    </SimpleGrid>
  );
};

export default SearchOptions;
