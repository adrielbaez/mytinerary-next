import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { NextPage } from "next";
import { FaMapMarkerAlt } from "react-icons/fa";

interface Props {
  urlImage: string;
  cityName: string;
  countryName: string;
  align?: "center" | "flex-start" | "flex-end";
}

export const Banner: NextPage<Props> = ({
  urlImage,
  cityName,
  countryName,
  align = "center",
}) => {
  return (
    <Stack overflow="hidden">
      <Flex
        w={"full"}
        h={"40vh"}
        backgroundImage={`url(${urlImage})`}
        backgroundSize={"cover"}
        backgroundPosition={"center center"}
        className="zoom"
      >
        <VStack
          w={"full"}
          justify={"center"}
          align={align}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
        >
          <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
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
                bg={"blue.400"}
                rounded={"full"}
                color={"white"}
                _hover={{ bg: "blue.500" }}
              >
                Show me more
              </Button>
              <Button
                bg={"whiteAlpha.300"}
                rounded={"full"}
                color={"white"}
                _hover={{ bg: "whiteAlpha.500" }}
              >
                Show me more
              </Button>
            </Stack>
          </Stack>
        </VStack>
      </Flex>
    </Stack>
  );
};
