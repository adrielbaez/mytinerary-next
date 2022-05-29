import { Collapse, Stack, useDisclosure, Text } from "@chakra-ui/react";
import React from "react";
import { ActivitiesSection } from "./ActivitiesSection";

export const Itinerary = () => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <div>
      <Stack>
        <Stack width={400} bg="red.300">
          <Stack>
            <Text>Hola</Text>
          </Stack>
          <ActivitiesSection />
        </Stack>
      </Stack>
    </div>
  );
};
