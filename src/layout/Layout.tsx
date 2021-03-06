import React from "react";
import Head from "next/head";
import { Navbar } from "./Navbar";
import { HeroContent } from "../../screens/home";
import Footer from "./footer/Footer";
import { Stack } from "@chakra-ui/react";
import { CityHero } from "../../screens/city/CityHero";
import { City } from "../../interfaces/citiesList";

interface Props {
  children: JSX.Element;
  showHero?: boolean;
  title: string;
  showHeroCity?: boolean;
  city?: City;
}

export const Layout = ({
  children,
  showHero = false,
  title,
  showHeroCity = false,
  city,
}: Props) => {
  return (
    <>
      <Head>
        <title>{title || "Mytinerary - App"}</title>
        <meta name="author" content="Adriel Baez" />
        <meta name="description" content="Informacion sobre ciudades" />
        <meta name="keywords" content="paises, countries, cities" />
      </Head>
      <Navbar />
      {showHero ? <HeroContent /> : null}
      {showHeroCity ? <CityHero city={city!} /> : null}

      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          minHeight: "95vh",
        }}
      >
        <main
          style={{
            padding: "0px 20px",
            maxWidth: "1200px",
            overflow: "hidden",
            width: "100%",
            flex: 1,
            margin: "10px 0px",
            backgroundColor: "white",
          }}
        >
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};
