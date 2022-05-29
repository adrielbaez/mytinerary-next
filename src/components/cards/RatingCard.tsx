import { Stack, chakra } from "@chakra-ui/react";
import React from "react";
import { FaMoneyBillAlt, FaStar } from "react-icons/fa";
import { NextPage } from "next";

interface Props {
  title: string;
}

export const RatingCard: NextPage<Props> = ({ title }) => {
  return (
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
  );
};
