import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Stack,
} from "@chakra-ui/react";
import { NextPage } from "next";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useDebouncedSearch } from "../../src/hooks/useDebouncedSearch";
import { useEffect } from "react";

interface Props {
  onSearch: (value: string) => void;
  // value: string;
}

export const Search: NextPage<Props> = ({ onSearch }) => {
  const [textValue, setTextValue] = useState("");

  const deboncedValue = useDebouncedSearch(textValue.toLowerCase().trim());

  useEffect(() => {
    onSearch(deboncedValue);
  }, [deboncedValue, onSearch]);

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
          value={textValue}
          onChange={(e) => setTextValue(e.target.value)}
        />
        <InputRightElement>
          <FaSearch />
        </InputRightElement>
      </InputGroup>
    </Stack>
  );
};
