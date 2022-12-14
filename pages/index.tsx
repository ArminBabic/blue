import type { NextPage } from "next";
import Head from "next/head";

import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Values from "../components/Values";
import Projects from "../components/Projects";
import Why from "../components/Why";
import Services from "../components/Services";
import Contact from "../components/Contact";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>BlueDuck</title>
        <link rel="icon" href="" />
      </Head>
      <section className="bg-[url('../images/bg.png')] bg-right bg-no-repeat bg-cover h-[1111px] ">
        <Header />
        <Hero />
      </section>
      <About />
      <Services />
      <Projects />
      <Values />
      <Why />

      <Contact />

      <main>
        <section></section>
      </main>
    </>
  );
};

export default Home;
