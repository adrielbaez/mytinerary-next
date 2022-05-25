import React from "react";
import Image from "next/image";
import { Box, chakra, Stack } from "@chakra-ui/react";
import { FaStar, FaMoneyBillAlt } from "react-icons/fa";
import { Itinerary } from "../../../interfaces/itinerariesCIty";
import { Activity } from "../../../interfaces/activitiesCity";
import { RatingCard } from "./RatingCard";

interface Props {
  urlImage: string;
  alt: string;
  width?: string;
  height?: string;
  showRating?: boolean;
  title?: string;
}

export const ImageCard = ({
  urlImage,
  alt,
  width = "350px",
  height = "300px",
  showRating = false,
  title,
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
      {showRating ? <RatingCard title={title!} /> : null}
    </Box>
  );
};
