import { Grid, GridItem } from "@chakra-ui/react";
import React, { useState } from "react";
import CityCard from "../../screens/cities/CityCard";
import { Search } from "../../screens/cities/Search";
import { SectionContainer } from "../../src/components/section/SectionContainer";
import { useAppSelector } from "../../src/hooks/redux";
import { Layout } from "../../src/layout";
import { useEffect } from "react";
import { City } from "../../interfaces/citiesList";

const Cities = () => {
  const { cities } = useAppSelector((state) => state.cities);
  const [term, setTerm] = useState("");
  const [citiesFiltered, setCitiesFiltered] = useState<City[]>([]);

  useEffect(() => {
    if (cities) {
      setCitiesFiltered(cities);
    }
  }, [cities]);

  useEffect(() => {
    if (term === "") {
      return setCitiesFiltered(cities);
    }
    let newCities = cities.filter(
      (city) => city.city.toLowerCase().trim().indexOf(term) === 0
    );
    setCitiesFiltered(newCities);
  }, [term, cities]);

  return (
    <Layout title="Cities">
      <SectionContainer title="Cities" withFragment>
        <>
          <Search onSearch={(value) => setTerm(value)} />
          <Grid
            templateColumns={{
              base: "repeat(1, 1fr)",
              sm: "repeat(1, 1fr)",
              md: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)",
            }}
            gap={6}
          >
            {citiesFiltered.map((city) => (
              <CityCard key={city._id} city={city} />
            ))}
          </Grid>
        </>
      </SectionContainer>
    </Layout>
  );
};

export default Cities;
