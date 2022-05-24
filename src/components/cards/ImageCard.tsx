import React from "react";
import Image from "next/image";
import { Box, chakra, Stack } from "@chakra-ui/react";
import { FaStar, FaMoneyBillAlt } from "react-icons/fa";

interface Props {
  urlImage: string;
  alt: string;
  width?: string;
  height?: string;
  showRating?: boolean;
}

export const ImageCard = ({
  urlImage,
  alt,
  width = "350px",
  height = "300px",
  showRating = false,
}: Props) => {
  return (
    <Box
      width={{ base: width, md: "90vw", lg: "280px", xl: "280px" }}
      height={{ base: height, md: "300px", lg: "300px", xl: "300px" }}
      position={"relative"}
      shadow="lg"
    >
      <Image src={urlImage} alt={alt} layout="fill" objectFit="cover" />
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
          padding={2}
        >
          <chakra.h3 color={"primary.900"} fontSize="md" fontWeight="bold">
            French Autumn
          </chakra.h3>
          <chakra.h4 fontSize="small">City Tours, Urban</chakra.h4>
          <Stack direction={"row"} alignItems="center">
            <FaStar color={"yellow.500"} size={15} />
            <FaStar color={"yellow.500"} size={15} />
            <FaStar color={"yellow.500"} size={15} />
            <chakra.h4 fontSize="small">4 reviews</chakra.h4>
          </Stack>
          <Stack
            direction={"row"}
            align="center"
            justify="space-between"
            alignItems={"center"}
            bg={"primary.900"}
            position="absolute"
            right={0}
            padding={2}
            borderRadius="md"
          >
            <chakra.h4 fontSize="small" color={"white"}>
              Cost : 6
            </chakra.h4>
            <FaMoneyBillAlt color={"white"} size={15} />
          </Stack>
        </Stack>
      ) : null}
    </Box>
  );
};
