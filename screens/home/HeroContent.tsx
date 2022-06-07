import * as React from "react";
import { chakra, Stack, Text, Button, Box } from "@chakra-ui/react";
import { Hero } from "../../src/components/hero/Hero";
// Here we have used react-icons package for the icons

export const HeroContent = () => {
  return (
    <Hero image="/playa.jpg" title="Canada nature">
      <>
        <chakra.h1
          fontSize={{ base: "4xl", sm: "5xl" }}
          fontWeight="bold"
          textAlign="center"
          color="white"
          maxW="600px"
        >
          MyTinerary
        </chakra.h1>
        <Text maxW="550px" fontSize="xl" textAlign="center" color="white">
          Find your perfect trip, designed by insiders who know and love their
          cities!
        </Text>
        <Stack
          direction={{ base: "column", sm: "row" }}
          w={{ base: "100%", sm: "auto" }}
          spacing={5}
        >
          <Button
            variant="outline"
            rounded="md"
            size="lg"
            height="3.5rem"
            fontSize="1.2rem"
            bg="white"
            color={"primary.900"}
          >
            Go to Cities
          </Button>
        </Stack>
      </>
    </Hero>
  );
};
