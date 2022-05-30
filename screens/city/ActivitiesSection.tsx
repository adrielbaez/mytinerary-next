import { Button, Collapse, Stack, useDisclosure } from "@chakra-ui/react";
import { NextPage } from "next";
import React from "react";

interface Props {
  isOpensds?: boolean;
}
export const ActivitiesSection: NextPage<Props> = ({ isOpensds }) => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <>
      <Button onClick={onToggle}>clic</Button>
      <Collapse in={isOpen} animateOpacity>
        <Stack width={400} height={250} bg="blue.300">
          ActivitiesSection
        </Stack>
      </Collapse>
    </>
  );
};
