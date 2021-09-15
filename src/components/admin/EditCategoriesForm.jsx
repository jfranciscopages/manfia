import React, { useState } from "react";
import { useSelector } from "react-redux";

import useEditCategory from "../../hooks/useEditCategory";

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

export default function EditForm() {
  const selectedCategory = localStorage.getItem("cat");

  const params = useEditCategory();
  const { onSubmit, name, setName, id, setId, sex, setSex } = params;

  setId(selectedCategory.id);
  setName(selectedCategory.name);
  setSex(selectedCategory.sex);
  return (
    <>
      <br />
      <Flex
        maxH={"92vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <form onSubmit={(e) => onSubmit(e)}>
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
              Editar categoría
            </Heading>
            <FormControl id="name">
              <FormLabel>Nombre de la categoría</FormLabel>
              <Input
                type="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </FormControl>
            <FormControl id="sex">
              <FormLabel>Precio</FormLabel>
              <Input
                type="sex"
                value={sex}
                onChange={(e) => setSex(e.target.value)}
              />
            </FormControl>

            <Stack spacing={6}>
              <Button
                bg={"teal"}
                color={"white"}
                _hover={{
                  bg: "black",
                }}
                type="submit"
              >
                Aceptar
              </Button>
            </Stack>
          </Stack>
        </form>
      </Flex>
    </>
  );
}
