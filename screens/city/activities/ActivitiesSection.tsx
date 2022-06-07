import {
  Button,
  Collapse,
  Divider,
  Heading,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { NextPage } from "next";
import React from "react";
import { useActivities } from "../../../src/hooks/useActivities";
import { ActivityCard } from "./ActivityCard";
import { Commnets } from "../comments/Comments";
import { Itinerary } from "../../../interfaces/itinerariesCIty";

interface Props {
  city: string;
  id: string;
  isOpen: boolean;
  onToggle: () => void;
  itinerary: Itinerary;
}
export const ActivitiesSection: NextPage<Props> = ({
  id,
  isOpen,
  onToggle,
  city,
  itinerary,
}) => {
  const { isLoading, activities } = useActivities(id);

  return (
    <Stack bg={useColorModeValue("white", "gray.800")} mt={10}>
      <Collapse in={isOpen} animateOpacity>
        <Heading fontSize={"xl"} color="primary.900" textAlign={"center"}>
          {`Activities to do in ${city}`}
        </Heading>
        {/* Activities */}
        <Stack
          width="full"
          // height={250}
          direction={{ base: "column", md: "row" }}
          align="center"
          mt={3}
        >
          {!isLoading &&
            activities!.map((activity) => (
              <ActivityCard activity={activity} key={activity._id} />
            ))}
        </Stack>
        {/* comments */}
        <Divider h={10} />
        <Commnets itinerary={itinerary} />
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
        {isOpen ? "View Less" : "View More"}
      </Button>
    </Stack>
  );
};
