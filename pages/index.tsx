import { Text } from "@chakra-ui/react";
import type { GetStaticProps, NextPage } from "next";
import { useEffect, useState } from "react";
import { mytineraryApi } from "../api/mytinerayApi";
import { CitiesResponse, City } from "../interfaces/citiesList";
import { BestValuesTrips, PopularDestination } from "../screens/home";
import { Layout } from "../src/layout/Layout";
import { ItinerariesCity, Itinerary } from "../interfaces/itinerariesCIty";
import { ActivitiesCityResponse, Activity } from "../interfaces/activitiesCity";

interface Props {
  cities: City[];
  itineraries: Itinerary[];
  activities: Activity[];
}

const Home: NextPage<Props> = ({ cities, itineraries, activities }) => {
  const [newCities, setNewCities] = useState<City[]>([]);
  const [itinerariesItems, setItinerariesItemns] = useState<Itinerary[]>([]);
  const [activitiesItems, setActivitiesItems] = useState<Activity[]>([]);
  useEffect(() => {
    const data = cities.sort(() => (Math.random() > 0.5 ? 1 : -1)).slice(0, 4);
    setNewCities(data);

    setItinerariesItemns(itineraries);
    setActivitiesItems(
      activities.sort(() => (Math.random() > 0.5 ? 1 : -1)).slice(0, 3)
    );
  }, [cities, itineraries, activities]);

  return (
    <Layout showHero>
      <>
        <PopularDestination cities={newCities} />
        <BestValuesTrips
          itineraries={itinerariesItems}
          activities={activitiesItems}
        />
      </>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await mytineraryApi.get<CitiesResponse>("/cities");

  const cities: City[] = data.respuesta;

  const ushuaiaID = "6078dee3f5f2d747d0050da3";

  const { data: itineraries } = await mytineraryApi.get<ItinerariesCity>(
    `city/itineraries/${ushuaiaID}`
  );

  const itinerary1Promise = mytineraryApi.get<ActivitiesCityResponse>(
    "/activities/itinerary/6084d84d309fac4c44e87ca2"
  );
  const itinerary2Promise = mytineraryApi.get<ActivitiesCityResponse>(
    "/activities/itinerary/6084df5b1618c74be8a54208"
  );

  const [itinerary1Response, itinerary2Response] = await Promise.all([
    itinerary1Promise,
    itinerary2Promise,
  ]);

  return {
    props: {
      cities,
      itineraries: itineraries.respuesta,
      activities: [
        ...itinerary1Response.data.respuesta,
        ...itinerary2Response.data.respuesta,
      ],
    },
  };
};

export default Home;
