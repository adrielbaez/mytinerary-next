import { Box, GridItem } from "@chakra-ui/react";
import Image from "next/image";

const CityCard = () => {
  return (
    <GridItem
      w="100%"
      h="250"
      bg="blue.500"
      position="relative"
      className="card"
      cursor="pointer"
    >
      <Image
        src={`https://i.imgur.com/0AGCzZb.jpg`}
        alt="una city"
        objectFit="cover"
        layout="fill"
      />
    </GridItem>
  );
};

export default CityCard;
