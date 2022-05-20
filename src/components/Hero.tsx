import Image from "next/image";
import React from "react";
import { Stack } from "@chakra-ui/react";

export const Hero = () => {
  return (
    <Stack
      style={{
        position: "relative",
        width: "100%",
        filter: "brightness(0.8)",
      }}
      height={{
        base: "300px",
        md: "400px",
        lg: "500px",
        xl: "600px",
        "2xl": "700px",
      }}
    >
      <Image
        src="/canada-nature.jpg"
        alt="canada"
        layout="fill"
        objectFit="cover"
        priority={true}
      />
    </Stack>
  );
};
