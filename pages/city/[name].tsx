import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import React from "react";
import { mytineraryApi } from "../../api/mytinerayApi";
import { CitiesResponse, City } from "../../interfaces/citiesList";
import { Layout } from "../../src/layout";
import { chakra, Stack } from "@chakra-ui/react";
import { Itinerary } from "../../screens/city/itineraries/Itinerary";
import { Details } from "../../screens/city/Details";
import {
  ItinerariesCityResponse,
  Itinerary as ItineraryType,
} from "../../interfaces/itinerariesCIty";

interface Props {
  cityFinded: City;
  itineraries: ItineraryType[];
}

const CitiesPage: NextPage<Props> = ({ cityFinded: city, itineraries }) => {
  return (
    <Layout title="Cities - Mytinerary" showHeroCity city={city}>
      <>
        <Details
          city={city.city}
          country={city.country}
          description={city.description}
        />
        <Stack align={"center"} marginBottom={10}>
          <chakra.h1
            color={"primary.900"}
            fontSize="3xl"
            fontWeight="bold"
            textTransform="uppercase"
            textAlign="center"
          >
            Find the best Itinerary for your next trip!
          </chakra.h1>
        </Stack>
        <Stack align={"center"}>
          {itineraries.map((itinerary) => (
            <Itinerary itinerary={itinerary} key={itinerary._id} />
          ))}
        </Stack>
      </>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const { data } = await mytineraryApi.get<CitiesResponse>("/cities");
  const citiesPathsName = data.respuesta.map((city) =>
    city.city.toLocaleLowerCase().split(" ").join("-")
  );

  return {
    paths: citiesPathsName.map((name) => ({ params: { name } })),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { name } = params as { name: string };

  const citiesResponse = await mytineraryApi.get<CitiesResponse>("/cities");
  const cityFinded = citiesResponse.data.respuesta.find(
    (city) => city.city.toLocaleLowerCase().split(" ").join("-") === name
  );
  if (!cityFinded) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  const { data } = await mytineraryApi.get<ItinerariesCityResponse>(
    `/city/itineraries/${cityFinded._id}`
  );

  return {
    props: {
      cityFinded,
      itineraries: data.respuesta,
    },
  };
};

export default CitiesPage;
