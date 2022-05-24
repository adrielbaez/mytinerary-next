import React from "react";
import Head from "next/head";
import { Navbar } from "./Navbar";
import { Hero } from "../../screens/home";

interface Props {
  children: JSX.Element;
  showHero?: boolean;
}

export const Layout = ({ children, showHero = false }: Props) => {
  return (
    <div>
      <Head>
        <title>{"Mytinerary - App"}</title>
        <meta name="author" content="Adriel Baez" />
        <meta name="description" content="Informacion sobre ciudades" />
        <meta name="keywords" content="paises, countries, cities" />
      </Head>
      <Navbar />
      {showHero ? <Hero /> : null}

      <main
        style={{
          padding: "0px 20px",
          maxWidth: "1200px",
          margin: "auto",
        }}
      >
        {children}
      </main>
    </div>
  );
};
