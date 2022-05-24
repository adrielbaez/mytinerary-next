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
  itineraries: Itinerary[];
  activities: Activity[];
}

export const BestValuesTrips: NextPage<Props> = ({
  itineraries,
  activities,
}) => {
  return (
    <SectionContainer
      title="Best Value Trips"
      subtitle="Best offers trips from us"
    >
      <>
        {activities.map((activity) => (
          <ImageCard
            key={activity._id}
            urlImage={activity.image}
            alt={activity.title}
            showRating={true}
            itineraries={itineraries}
            title={activity.title}
          />
        ))}
      </>
    </SectionContainer>
  );
};
