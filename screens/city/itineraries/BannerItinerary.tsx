import {
  Heading,
  Avatar,
  Box,
  Image,
  Flex,
  Text,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { NextPage } from "next";
import { FaHeart, FaMoneyBillAlt, FaTimesCircle } from "react-icons/fa";
import { Itinerary as ItineraryType } from "../../../interfaces/itinerariesCIty";

interface Props {
  itinerary: ItineraryType;
}

export const BannerItinerary: NextPage<Props> = ({ itinerary }) => {
  return (
    <Box
      maxW={["100%", "100%", "100%", "100%", "100%"]}
      w={"full"}
      h="full"
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"2xl"}
      rounded={"md"}
      overflow={"hidden"}
      margin={0}
    >
      <Image
        h={"120px"}
        w={"full"}
        src={
          "https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
        }
        objectFit={"cover"}
        alt={"banner"}
      />
      <Flex justify={"center"} mt={-12}>
        <Avatar
          size={"xl"}
          src={itinerary.authorPicture}
          css={{
            border: "2px solid white",
          }}
        />
      </Flex>

      <Box p={1}>
        <Stack spacing={0} align={"center"} mb={5}>
          <Text color={"gray.500"}>{itinerary.authorName}</Text>
          <Heading fontSize={"2xl"} color="primary.900" fontWeight={500}>
            {itinerary.title}
          </Heading>
        </Stack>

        <Stack direction={"row"} justify={"center"} spacing={6}>
          <Stack spacing={0} align={"center"}>
            <FaMoneyBillAlt size={24} />
            <Text fontSize={"sm"} color={"gray.500"}>
              Price: {itinerary.price}
            </Text>
          </Stack>
          <Stack spacing={0} align={"center"}>
            <FaTimesCircle size={24} />
            <Text fontSize={"sm"} color={"gray.500"}>
              Duration: {itinerary.duration}
            </Text>
          </Stack>
          <Stack spacing={0} align={"center"}>
            <FaHeart size={24} />
            <Text fontSize={"sm"} color={"gray.500"}>
              Likes: {itinerary.likes}
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};
