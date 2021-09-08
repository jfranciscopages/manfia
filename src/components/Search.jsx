import React from "react";
import { IconButton, Input, Box } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const Search = () => {
  return (
    <Box>
      <Input placeholder="Buscar" />
      <IconButton aria-label="Search database" icon={<SearchIcon />} />
    </Box>
  );
};

export default Search;
