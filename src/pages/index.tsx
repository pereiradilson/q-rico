import React, { useEffect } from "react";
import Head from "next/head";

import Aos from "aos";
import "aos/dist/aos.css";

import Content from "./components/Content";
import About from "./components/About";
import Card from "./components/Card";
import Information from "./components/Information";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  useEffect(() => {
    Aos.init({
      easing: "ease-out-back",
      duration: 2000,
    });
  }, []);

  return (
    <>
      <Head>
        <title>Q-Rico | Construindo sua independência Financeira.</title>
      </Head>

      <Content />

      <About />

      <Card />

      <Information />

      <Contact />

      <Footer />
    </>
  );
}
