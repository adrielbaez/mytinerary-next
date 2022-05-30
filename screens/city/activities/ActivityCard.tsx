import { NextPage } from "next";
import React from "react";
import { Activity } from "../../../interfaces/activitiesCity";
import { ImageCard } from "../../../src/components/cards/ImageCard";

interface Props {
  activity: Activity;
}

export const ActivityCard: NextPage<Props> = ({ activity }) => {
  return (
    <ImageCard
      id={activity._id}
      urlImage={activity.image}
      title={activity.title}
    />
  );
};
