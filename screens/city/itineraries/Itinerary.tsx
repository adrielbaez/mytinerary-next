import {
  Collapse,
  Stack,
  useDisclosure,
  Text,
  useColorModeValue,
  Box,
} from "@chakra-ui/react";
import { NextPage } from "next";
import React from "react";
import { Itinerary as ItineraryType } from "../../../interfaces/itinerariesCIty";
import { ActivitiesSection } from "../activities/ActivitiesSection";
import { BannerItinerary } from "./BannerItinerary";

interface Props {
  itinerary: ItineraryType;
}

export const Itinerary: NextPage<Props> = ({ itinerary }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack
      width={{
        base: "90vw",
        md: "70vw",
        lg: "60vw",
        xl: "50vw",
        "2xl": "50vw",
      }}
      bg={useColorModeValue("white", "gray.800")}
      mb={5}
      shadow="2xl"
    >
      <Stack m={0}>
        <BannerItinerary itinerary={itinerary} />
        <ActivitiesSection
          city={itinerary.cityId.city}
          id={itinerary._id}
          isOpen={isOpen}
          onToggle={onToggle}
          itinerary={itinerary}
        />
      </Stack>
      <Box bg="red.200"></Box>
    </Stack>
  );
};
