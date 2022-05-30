import { useEffect, useState } from "react";
import { mytineraryApi } from "../../api/mytinerayApi";
import {
  ActivitiesCityResponse,
  Activity,
} from "../../interfaces/activitiesCity";

interface ActivitiesDetails {
  isLoading: boolean;
  activities?: Activity[];
}

export const useActivities = (itineraryId: string) => {
  const [activities, setActivities] = useState<ActivitiesDetails>({
    isLoading: true,
    activities: undefined,
  });

  const getActivities = async () => {
    const { data } = await mytineraryApi.get<ActivitiesCityResponse>(
      `/activities/itinerary/${itineraryId}`
    );

    setActivities({
      isLoading: false,
      activities: data.respuesta,
    });
  };

  useEffect(() => {
    getActivities();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { ...activities };
};
