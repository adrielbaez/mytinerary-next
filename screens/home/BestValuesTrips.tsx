import React from "react";
import { ImageCard } from "../../src/components/cards/ImageCard";
import { SectionContainer } from "../../src/components/section/SectionContainer";
import { Itinerary } from "../../interfaces/itinerariesCIty";
import { NextPage } from "next";
import {
  ActivitiesCityResponse,
  Activity,
} from "../../interfaces/activitiesCity";

interface Props {
  activities: Activity[];
}

export const BestValuesTrips: NextPage<Props> = ({ activities }) => {
  return (
    <SectionContainer
      title="Best Value Trips"
      subtitle="Best offers trips from us"
    >
      <>
        {activities.map((activity) => (
          <ImageCard
            id={activity._id}
            key={activity._id}
            urlImage={activity.image}
            showRating={true}
            title={activity.title}
          />
        ))}
      </>
    </SectionContainer>
  );
};
