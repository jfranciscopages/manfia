import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Textarea,
  Input,
  HStack,
  Stack,
  Select,
  useColorModeValue,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Productos() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios
      .get("/api/categories/getCategories")
      .then((res) => res.data)
      .then((data) => setCategories(data));
  }, []);

  return (
    <Flex
      maxH={"92vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack
        spacing={4}
        w={"full"}
        maxW={"md"}
        bg={useColorModeValue("white", "gray.700")}
        rounded={"xl"}
        boxShadow={"lg"}
        p={6}
        my={12}
      >
        <Heading lineHeight={1.1} fontSize={{ base: "2xl", md: "3xl" }}>
          Agregar producto
        </Heading>
        <FormControl id="title">
          <FormLabel>Nombre del producto</FormLabel>
          <Input type="title" />
        </FormControl>
        <FormControl id="price">
          <FormLabel>Precio</FormLabel>
          <Input type="password" />
        </FormControl>
        <FormControl id="description">
          <FormLabel>Descripción</FormLabel>
          <Textarea
            id="description"
            placeholder="Breve descipción del producto"
          ></Textarea>
        </FormControl>
        <FormControl id="sex">
          <FormLabel>Género</FormLabel>
          <Select
            placeholder="Seleccione el género del producto"
            size="md"
            id="sex"
          >
            <option value="hombre">Hombre</option>
            <option value="mujer">Mujer</option>
          </Select>
        </FormControl>

        <FormControl id="category">
          <FormLabel>Categoría</FormLabel>
          <Select
            placeholder="Seleccione el tipo de producto"
            size="md"
            id="sex"
          >
            {categories
              ? categories.map((cat) => (
                  <option value={`${cat.id}`}>{cat.name}</option>
                ))
              : null}
          </Select>
        </FormControl>
        <FormControl id="stock">
          <FormLabel>Stock o cantidad de producto</FormLabel>
          <Input type="stock" />
        </FormControl>
        <FormControl id="image">
          <FormLabel>Imagen</FormLabel>
          <Input type="link" placeholder="Inserte el link a la imagen" />
        </FormControl>
        <Stack spacing={6}>
          <Button
            bg={"teal"}
            color={"white"}
            _hover={{
              bg: "black",
            }}
          >
            Submit
          </Button>
        </Stack>
      </Stack>

      {/*       <Stack
        spacing={4}
        w={"full"}
        maxW={"md"}
        bg={useColorModeValue("white", "gray.700")}
        rounded={"xl"}
        boxShadow={"lg"}
        p={6}
        my={12}
        minH={"57vh"}
        maxH={"92vh"}
      >
        <Heading lineHeight={1.1} fontSize={{ base: "2xl", md: "3xl" }}>
          Editar o eliminar productos
        </Heading>
      </Stack> */}
    </Flex>
  );
}
