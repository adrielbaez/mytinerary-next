import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import React from "react";
import { mytineraryApi } from "../../api/mytinerayApi";
import { CitiesResponse, City } from "../../interfaces/citiesList";
import { CityHero } from "../../screens/city/CityHero";
import { Layout } from "../../src/layout";
import { chakra, Stack } from "@chakra-ui/react";
import { Itinerary } from "../../screens/city/Itinerary";
import { Details } from "../../screens/city/Details";

interface Props {
  cityFinded: City;
}

const CitiesPage: NextPage<Props> = ({ cityFinded: city }) => {
  return (
    <Layout title="Cities - Mytinerary" showHeroCity city={city}>
      <>
        <Details
          city={city.city}
          country={city.country}
          description={city.description}
        />
        <Stack align={"center"}>
          <chakra.h1
            color={"primary.900"}
            fontSize="3xl"
            fontWeight="bold"
            textTransform="uppercase"
          >
            Itineraries
          </chakra.h1>
        </Stack>
        <Stack align={"center"}>
          <Itinerary />
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
  return {
    props: {
      cityFinded,
    },
  };
};

export default CitiesPage;
