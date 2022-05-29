import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import React from "react";
import { mytineraryApi } from "../../api/mytinerayApi";
import { CitiesResponse, City } from "../../interfaces/citiesList";
import { CityHero } from "../../screens/city/CityHero";
import { Layout } from "../../src/layout";

interface Props {
  cityFinded: City;
}

const CitiesPage: NextPage<Props> = ({ cityFinded: city }) => {
  return (
    <Layout title="Cities - Mytinerary" marginTop={false}>
      <>
        <CityHero city={city} />;
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
