import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import CityCard from "../../screens/cities/CityCard";
import { Search } from "../../screens/cities/Search";
import { SectionContainer } from "../../src/components/section/SectionContainer";
import { Layout } from "../../src/layout";

const Cities = () => {
  return (
    <Layout title="Cities">
      <SectionContainer title="Cities" withFragment>
        <>
          <Search />
          <Grid
            templateColumns={{
              base: "repeat(1, 1fr)",
              sm: "repeat(1, 1fr)",
              md: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)",
            }}
            gap={6}
          >
            <CityCard />
            <CityCard />
            <CityCard />
            <CityCard />
            <CityCard />
          </Grid>
        </>
      </SectionContainer>
    </Layout>
  );
};

export default Cities;
