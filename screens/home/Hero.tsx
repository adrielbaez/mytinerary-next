import * as React from "react";
import { Container, chakra, Stack, Text, Button, Box } from "@chakra-ui/react";
import Image from "next/image";
// Here we have used react-icons package for the icons

export const Hero = () => {
  return (
    <Stack
      direction="column"
      spacing={6}
      alignItems="center"
      justifyContent="center"
      bgColor={"red.300"}
      position="relative"
      height={{
        base: "80vh",
        md: "80vh",
        lg: "80vh",
        xl: "80vh",
        "2xl": "90vh",
      }}
    >
      <Image
        src="/canada-nature.jpg"
        alt="Polynesia"
        layout="fill"
        objectFit="cover"
        style={{
          filter: "brightness(0.7)",
        }}
        priority
      />
      <Stack
        direction="column"
        spacing={6}
        alignItems="center"
        position={"absolute"}
      >
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
      </Stack>
    </Stack>
  );
};
