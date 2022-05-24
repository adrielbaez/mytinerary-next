import { Stack, chakra, Box } from "@chakra-ui/react";
import React from "react";
import { City } from "../../interfaces/citiesList";
import { ImageCard } from "../../src/components/cards/ImageCard";
import { SectionContainer } from "../../src/components/section/SectionContainer";
import { NextPage } from "next";

interface Props {
  cities: City[];
}

export const PopularDestination: NextPage<Props> = ({ cities }) => {
  return (
    <SectionContainer
      title="Popular Destinations"
      subtitle={`World's best tourist destinations`}
    >
      <>
        {cities.map((city) => (
          <ImageCard key={city._id} urlImage={city.src} alt={city.city} />
        ))}
      </>
    </SectionContainer>
  );
};
