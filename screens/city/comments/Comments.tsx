import { Container, Heading, Box } from "@chakra-ui/react";
import { NextPage } from "next";
import { Itinerary } from "../../../interfaces/itinerariesCIty";
import { SingleComment } from "./SingleComment";

interface Props {
  itinerary: Itinerary;
}
export const Commnets: NextPage<Props> = ({ itinerary }) => {
  return (
    <Container maxW="5xl" p={{ base: 5, md: 10 }}>
      <Box>
        <Heading as="h3" size="lg" fontWeight="bold" textAlign="left" mb={4}>
          Reviews
        </Heading>
      </Box>
      <SingleComment comments={itinerary.comments} />
    </Container>
  );
};
