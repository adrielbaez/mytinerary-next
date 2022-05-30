import React from "react";
import { Stack, chakra } from "@chakra-ui/react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { NextPage } from "next";

interface Props {
  city: string;
  country: string;
  description: string;
}
export const Details: NextPage<Props> = ({ city, country, description }) => {
  return (
    <Stack align={"flex-start"} marginBottom={20}>
      <Stack direction={"row"} align="center">
        <FaMapMarkerAlt size={24} color="black" />
        <chakra.h1
          color={"primary.900"}
          fontSize="3xl"
          fontWeight="bold"
          textTransform="initial"
        >
          {`${city}, ${country}`}
        </chakra.h1>
      </Stack>
      <chakra.h3 color={"secondary.500"} fontSize="lg">
        {description}
      </chakra.h3>
    </Stack>
  );
};
