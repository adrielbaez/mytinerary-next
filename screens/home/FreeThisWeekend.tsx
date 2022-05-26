import { Avatar, Stack, Text, Wrap, WrapItem } from "@chakra-ui/react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
import { City } from "../../interfaces/citiesList";
import { SectionContainer } from "../../src/components/section/SectionContainer";

interface Props {
  cities: City[];
}
export const FreeThisWeekend: NextPage<Props> = ({ cities }) => {
  const router = useRouter();
  const handleClickCity = (id: string) => {
    router.push(`/city/${id}`);
  };
  return (
    <SectionContainer
      title="FREE THIS WEEKEND?"
      subtitle={`World's best tourist destinations`}
    >
      <Stack
        direction={{ base: "column", md: "row", lg: "row", xl: "row" }}
        justify="space-around"
      >
        {cities.map((city) => (
          <Stack
            align={"center"}
            key={city._id}
            marginX={4}
            _hover={{
              cursor: "pointer",
            }}
            onClick={() => handleClickCity(city._id)}
          >
            <Avatar
              size="lg"
              name={city.city}
              src={city.src}
              className="pulse"
            />{" "}
            <Text>{city.city}</Text>
          </Stack>
        ))}
      </Stack>
    </SectionContainer>
  );
};
