import React from "react";
import Head from "next/head";
import { Navbar } from "./Navbar";
import { Hero } from "../../screens/home";
import Footer from "./footer/Footer";
import { Stack } from "@chakra-ui/react";

interface Props {
  children: JSX.Element;
  showHero?: boolean;
  title: string;
}

export const Layout = ({ children, showHero = false, title }: Props) => {
  return (
    <>
      <Head>
        <title>{title || "Mytinerary - App"}</title>
        <meta name="author" content="Adriel Baez" />
        <meta name="description" content="Informacion sobre ciudades" />
        <meta name="keywords" content="paises, countries, cities" />
      </Head>
      <Navbar />
      {showHero ? <Hero /> : null}

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
