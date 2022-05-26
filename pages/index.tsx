import { Text } from "@chakra-ui/react";
import type { GetStaticProps, NextPage } from "next";
import { useEffect, useState } from "react";
import { mytineraryApi } from "../api/mytinerayApi";
import { CitiesResponse, City } from "../interfaces/citiesList";
import { Banner, BestValuesTrips, PopularDestination } from "../screens/home";
import { Layout } from "../src/layout/Layout";
import { ItinerariesCity, Itinerary } from "../interfaces/itinerariesCIty";
import { ActivitiesCityResponse, Activity } from "../interfaces/activitiesCity";
import { conditionalBanner } from "../utils";
import { FreeThisWeekend } from "../screens/home/FreeThisWeekend";
import { SectionContainer } from "../src/components/section/SectionContainer";

interface Props {
  cities: City[];
  activities: Activity[];
}

const Home: NextPage<Props> = ({ cities, activities }) => {
  const [newCities, setNewCities] = useState<City[]>([]);
  const [activitiesItems, setActivitiesItems] = useState<Activity[]>([]);
  useEffect(() => {
    const data = cities.sort(() => (Math.random() > 0.5 ? 1 : -1));
    setNewCities(data);

    setActivitiesItems(
      activities.sort(() => (Math.random() > 0.5 ? 1 : -1)).slice(0, 3)
    );
  }, [cities, activities]);

  return (
    <Layout title="Mytinerary - App" showHero>
      <>
        <PopularDestination cities={newCities.slice(0, 4)} />

        <SectionContainer
          title="RECENT POSTS"
          subtitle="Countries"
          withFragment
        >
          <>
            {newCities.slice(4, 7).map((city, i) => (
              <Banner
                id={city._id}
                urlImage={city.src}
                key={city._id}
                cityName={city.city}
                countryName={city.country}
                align={conditionalBanner(i)}
              />
            ))}
          </>
        </SectionContainer>
        <BestValuesTrips activities={activitiesItems} />
        <FreeThisWeekend cities={newCities.slice(0, 5)} />
      </>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await mytineraryApi.get<CitiesResponse>("/cities");

  const cities: City[] = data.respuesta;

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
      activities: [
        ...itinerary1Response.data.respuesta,
        ...itinerary2Response.data.respuesta,
      ],
    },
  };
};

export default Home;
