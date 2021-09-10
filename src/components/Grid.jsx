import * as React from "react";
import {Link} from "react-router-dom"
import { Box, Button, SimpleGrid, Image, Center } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../store/productsReducer";
import {singleProduct} from "../store/productReducer"


const List = () => {
 
  const products = useSelector((state) => { console.log ("STATE",state.products)
    return state.products});
  console.log("PRODUCTS",products)

  const dispatch = useDispatch();
  
  React.useEffect(() => {
    dispatch(getProducts());
  }, []);


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
              <Image
                src={`${product.image}`}
                boxSize="350px"
              />{" "}
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
                  <Button colorScheme="teal"  onClick= {() => dispatch(singleProduct(product.title))}  >Ver más</Button>
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



 // const products = [
  //   {
  //     id: 1,
  //     title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  //     price: 109.95,
  //     description:
  //       "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  //     category: "men's clothing",
  //     image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  //     rating: {
  //       rate: 3.9,
  //       count: 120,
  //     },
  //   },
  //   {
  //     id: 2,
  //     title: "Mens Casual Premium Slim Fit T-Shirts ",
  //     price: 22.3,
  //     description:
  //       "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
  //     category: "men's clothing",
  //     image:
  //       "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
  //     rating: {
  //       rate: 4.1,
  //       count: "259",
  //     },
  //   },
  //   {
  //     id: 3,
  //     title: "Mens Cotton Jacket",
  //     price: 55.99,
  //     description:
  //       "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
  //     category: "men's clothing",
  //     image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
  //     rating: {
  //       rate: 4.7,
  //       count: 500,
  //     },
  //   },
  //   {
  //     id: 4,
  //     title: "Mens Casual Slim Fit",
  //     price: 15.99,
  //     description:
  //       "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
  //     category: "men's clothing",
  //     image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
  //     rating: {
  //       rate: 2.1,
  //       count: 430,
  //     },
  //   },
  //   {
  //     id: 5,
  //     title:
  //       "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
  //     price: 695,
  //     description:
  //       "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
  //     category: "jewelery",
  //     image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
  //     rating: {
  //       rate: 4.6,
  //       count: 400,
  //     },
  //   },
  //   {
  //     id: 6,
  //     title: "Solid Gold Petite Micropave ",
  //     price: 168,
  //     description:
  //       "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
  //     category: "jewelery",
  //     image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
  //     rating: {
  //       rate: 3.9,
  //       count: 70,
  //     },
  //   },
  // ];