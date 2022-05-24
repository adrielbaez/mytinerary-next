import React from "react";
import { ImageCard } from "../../src/components/cards/ImageCard";
import { SectionContainer } from "../../src/components/section/SectionContainer";

export const BestValuesTrips = () => {
  return (
    <SectionContainer
      title="Best Value Trips"
      subtitle="Best offers trips from us"
    >
      <>
        <ImageCard
          urlImage="https://images6.alphacoders.com/739/thumbbig-739635.jpg"
          alt="Tokio"
          showRating={true}
        />
        <ImageCard
          urlImage="https://images6.alphacoders.com/739/thumbbig-739635.jpg"
          alt="Tokio"
          showRating={true}
        />
        <ImageCard
          urlImage="https://images6.alphacoders.com/739/thumbbig-739635.jpg"
          alt="Tokio"
          showRating={true}
        />
        <ImageCard
          urlImage="https://images6.alphacoders.com/739/thumbbig-739635.jpg"
          alt="Tokio"
          showRating={true}
        />
      </>
    </SectionContainer>
  );
};
