import React from "react";
import Image from "next/image";
import { Box, chakra, Stack } from "@chakra-ui/react";
import { FaStar, FaMoneyBillAlt } from "react-icons/fa";
import { Itinerary } from "../../../interfaces/itinerariesCIty";
import { Activity } from "../../../interfaces/activitiesCity";

interface Props {
  urlImage: string;
  alt: string;
  width?: string;
  height?: string;
  showRating?: boolean;
  itineraries?: Itinerary[];
  title?: string;
}

export const ImageCard = ({
  urlImage,
  alt,
  width = "350px",
  height = "300px",
  showRating = false,
  title,
  itineraries,
}: Props) => {
  return (
    <Box
      width={{ base: width, md: "90vw", lg: "280px", xl: "280px" }}
      height={{ base: height, md: "300px", lg: "300px", xl: "300px" }}
      position={"relative"}
      shadow="lg"
      borderRadius="lg"
      overflow="hidden"
    >
      <Image
        src={urlImage}
        alt={alt}
        layout="fill"
        objectFit="cover"
        priority
      />
      <chakra.h1
        position="absolute"
        bottom={5}
        fontSize="3xl"
        color={"white"}
        fontWeight="700"
        marginLeft={5}
      >
        {alt}
      </chakra.h1>
      {/* description itenerary */}
      {showRating ? (
        <Stack
          zIndex={100}
          position="absolute"
          bg={"white"}
          width="100%"
          bottom={0}
          padding={1}
          borderRadius="sm"
          direction={"row"}
          justifyContent={"space-between"}
        >
          <Stack>
            <chakra.h3 color={"primary.900"} fontSize="md" fontWeight="bold">
              {title}
            </chakra.h3>
            <chakra.h4 fontSize="small">City Tours, Urban</chakra.h4>
            <Stack direction={"row"} alignItems="center">
              <FaStar color={"yellow.500"} size={15} />
              <FaStar color={"yellow.500"} size={15} />
              <FaStar color={"yellow.500"} size={15} />
              <chakra.h4 fontSize="small">
                {Math.floor(Math.random() * 15) + 1} reviews
              </chakra.h4>
            </Stack>
          </Stack>
          <Stack
            direction={"row"}
            align="center"
            justify="space-between"
            alignItems={"center"}
            bg={"primary.900"}
            borderRadius="xl"
            height={10}
            padding={1}
          >
            <chakra.h4 fontSize="small" color={"white"}>
              Cost: {Math.floor(Math.random() * 5) + 1}
            </chakra.h4>
            <FaMoneyBillAlt color={"white"} size={15} />
          </Stack>
        </Stack>
      ) : null}
    </Box>
  );
};
