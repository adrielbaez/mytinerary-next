import { Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import { Layout } from "../src/layout/Layout";

const Home: NextPage = () => {
  return (
    <Layout showHero={true}>
      <div>
        <Text color="brand.400" fontWeight={700}>
          Hola
        </Text>
      </div>
    </Layout>
  );
};

export default Home;
