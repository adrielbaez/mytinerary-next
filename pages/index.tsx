import { Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import { BestValuesTrips, PopularDestination } from "../screens/home";
import { Layout } from "../src/layout/Layout";

const Home: NextPage = () => {
  return (
    <Layout showHero={true}>
      <>
        <PopularDestination />
        <BestValuesTrips />
      </>
    </Layout>
  );
};

export default Home;
