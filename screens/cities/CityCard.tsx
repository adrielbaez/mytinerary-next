import { Box, GridItem } from "@chakra-ui/react";
import { NextPage } from "next";
import Image from "next/image";
import { City } from "../../interfaces/citiesList";

interface Props {
  city: City;
}

const CityCard: NextPage<Props> = ({ city }) => {
  return (
    <GridItem
      w="100%"
      h="250"
      bg="blue.500"
      position="relative"
      className="card"
      cursor="pointer"
    >
      <Image src={city.src} alt={city.city} objectFit="cover" layout="fill" />
    </GridItem>
  );
};

export default CityCard;
