import { Stack, chakra, Box } from "@chakra-ui/react";
import React from "react";
import { ImageCard } from "../../src/components/cards/ImageCard";
import { SectionContainer } from "../../src/components/section/SectionContainer";

export const PopularDestination = () => {
  return (
    <SectionContainer
      title="Popular Destinations"
      subtitle={`World's best tourist destinations`}
    >
      <ImageCard
        urlImage="https://images6.alphacoders.com/739/thumbbig-739635.jpg"
        alt="Tokio"
      />
    </SectionContainer>
  );
};
