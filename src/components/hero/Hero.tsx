import * as React from "react";
import { Container, chakra, Stack, Text, Button, Box } from "@chakra-ui/react";
import Image from "next/image";
import { NextPage } from "next";
// Here we have used react-icons package for the icons

interface Props {
  image: string;
  title: string;
  children: JSX.Element;
}

export const Hero: NextPage<Props> = ({ children, image, title }) => {
  return (
    <Stack
      direction="column"
      spacing={6}
      alignItems="center"
      justifyContent="center"
      position="relative"
      height={{
        base: "80vh",
        md: "80vh",
        lg: "80vh",
        xl: "80vh",
        "2xl": "90vh",
      }}
    >
      <Image
        src={image}
        alt={title}
        layout="fill"
        objectFit="cover"
        style={{
          filter: "brightness(0.7)",
        }}
        priority
      />
      <Stack
        direction="column"
        spacing={6}
        alignItems="center"
        position={"absolute"}
      >
        {children}
      </Stack>
    </Stack>
  );
};
