import * as React from "react";
import { Container, chakra, Stack, Text, Button, Box } from "@chakra-ui/react";
import Image from "next/image";
import { Hero } from "../../src/components/hero/Hero";
// Here we have used react-icons package for the icons

export const HeroContent = () => {
  return (
    <Hero image="https://i.imgur.com/0AGCzZb.jpg" title="Canada nature">
      <>
        <chakra.h1
          fontSize={{ base: "4xl", sm: "5xl" }}
          fontWeight="bold"
          textAlign="center"
          color="white"
          maxW="600px"
        >
          Welcome to {""}
          <chakra.span
            color="primary.400"
            bg="linear-gradient(transparent 50%, white 50%)"
          >
            MyTinerary
          </chakra.span>
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
          >
            {`Let's Go!!`}
          </Button>
        </Stack>
      </>
    </Hero>
  );
};
