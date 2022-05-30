import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { FaMapMarkerAlt } from "react-icons/fa";

interface Props {
  id: string;
  urlImage: string;
  cityName: string;
  countryName: string;
  align?: "center" | "flex-start" | "flex-end";
}

export const Banner: NextPage<Props> = ({
  id,
  urlImage,
  cityName,
  countryName,
  align = "center",
}) => {
  const router = useRouter();
  const handleClickCity = () => {
    router.push(`/city/${cityName.toLocaleLowerCase().split(" ").join("-")}`);
  };
  return (
    <Stack
      overflow="hidden"
      position="relative"
      width="full"
      height="40vh"
      align="center"
      justify="center"
    >
      <Image
        src={urlImage}
        alt={cityName}
        objectFit="cover"
        layout="fill"
        objectPosition="center"
        className="zoom"
      />
      <Stack maxW={"2xl"} align={"center"} spacing={6} zIndex={1}>
        <Stack direction={"row"} align="center">
          <FaMapMarkerAlt size={24} color="white" />
          <Text
            color={"white"}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
          >
            {`${cityName}, ${countryName}`}
          </Text>
        </Stack>
        <Stack direction={"row"}>
          <Button
            bg={"white"}
            rounded={"full"}
            color={"secundary.500"}
            _hover={{ bg: "secundary.500", color: "primary.400" }}
            onClick={handleClickCity}
          >
            Show me more
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};
