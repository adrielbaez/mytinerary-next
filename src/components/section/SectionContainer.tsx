import { Stack, chakra, Box } from "@chakra-ui/react";
import React from "react";

interface Props {
  title: string;
  subtitle?: string;
  children: JSX.Element;
  withFragment?: boolean;
}

export const SectionContainer = ({
  title,
  subtitle,
  children,
  withFragment = false,
}: Props) => {
  return (
    <Stack>
      <Stack align={"center"}>
        <chakra.h1
          color={"primary.900"}
          fontSize="3xl"
          fontWeight="bold"
          textTransform="uppercase"
        >
          {title}
        </chakra.h1>
        <chakra.h3 color={"secondary.500"} fontSize="lg">
          {subtitle}
        </chakra.h3>
      </Stack>
      {withFragment ? (
        <>{children}</>
      ) : (
        <Stack
          marginTop={6}
          gap={4}
          direction={{ base: "column", md: "column", lg: "row", xl: "row" }}
          align={"center"}
          alignItems="center"
          justifyContent={"center"}
          borderRadius="md"
        >
          {children}
        </Stack>
      )}
    </Stack>
  );
};
