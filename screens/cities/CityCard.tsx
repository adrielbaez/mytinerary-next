import { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { Box, GridItem, chakra } from "@chakra-ui/react";
import { City } from "../../interfaces/citiesList";

interface Props {
  city: City;
}

const CityCard: NextPage<Props> = ({ city }) => {
  const router = useRouter();
  const handleClickCity = (id: string) => {
    router.push(`/city/${id}`);
  };
  return (
    <GridItem
      w="100%"
      h="250"
      bg="blue.500"
      position="relative"
      className="card"
      cursor="pointer"
      onClick={() => handleClickCity(city._id)}
      style={{
        filter: "brightness(0.8)",
      }}
    >
      <Image
        src={city.src}
        alt={city.city}
        objectFit="cover"
        layout="fill"
        priority
      />
      <chakra.h1
        position="absolute"
        bottom={5}
        fontSize="3xl"
        color={"white"}
        fontWeight="700"
        marginLeft={5}
        shadow="lg"
      >
        {city.city}
      </chakra.h1>
    </GridItem>
  );
};

export default CityCard;
