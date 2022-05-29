import React from "react";
import { Hero } from "../../src/components/hero/Hero";
import { chakra } from "@chakra-ui/react";
import { City } from "../../interfaces/citiesList";
import { NextPage } from "next";

interface Props {
  city: City;
}

export const CityHero: NextPage<Props> = ({ city }) => {
  return (
    <Hero image={city?.src} title={city?.city}>
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
          {city?.city}
        </chakra.span>
      </chakra.h1>
    </Hero>
  );
};
