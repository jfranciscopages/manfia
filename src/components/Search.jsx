import React from "react";
import {
  IconButton,
  Input,
  Box,
  InputLeftElement,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { searchProducts } from "../store/searchReducer";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Search = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("INPUT", input);
    dispatch(searchProducts(input));
  };

  return (
    <Box>
      <InputGroup>
        <Input
          placeholder="  Buscar"
          bg="white"
          fontSize="lg"
          value={input}
          onChange={handleChange}
        />
        <InputRightElement
          children={
            <IconButton
              color="black"
              aria-label="Search database"
              icon={<SearchIcon />}
              onClick={(e) => handleSubmit(e)}
            />
          }
        />
      </InputGroup>
    </Box>
  );
};

export default Search;
