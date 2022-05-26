import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import { FaSearch } from "react-icons/fa";

export const Search = () => {
  return (
    <Stack align="center" paddingBottom={8}>
      <InputGroup
        width={{
          base: "90%",
          sm: "400px",
        }}
      >
        <Input
          placeholder="Enter amount"
          focusBorderColor="primary.400"
          rounded={"full"}
        />
        <InputRightElement>
          <FaSearch />
        </InputRightElement>
      </InputGroup>
    </Stack>
  );
};
