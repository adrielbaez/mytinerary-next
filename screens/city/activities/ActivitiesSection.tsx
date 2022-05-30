import {
  Button,
  Collapse,
  Stack,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { NextPage } from "next";
import React from "react";

interface Props {
  isOpensds?: boolean;
}
export const ActivitiesSection: NextPage<Props> = ({ isOpensds }) => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Stack marginTop={0} bg={useColorModeValue("white", "gray.800")}>
      <Collapse in={isOpen} animateOpacity>
        <Stack width={400} height={250} bg="blue.300">
          ActivitiesSection
        </Stack>
      </Collapse>
      <Button
        w={"full"}
        bg="primary.900"
        color={"white"}
        rounded={"md"}
        _hover={{
          transform: "translateY(-2px)",
          boxShadow: "lg",
        }}
        onClick={onToggle}
      >
        Clic
      </Button>
    </Stack>
  );
};
