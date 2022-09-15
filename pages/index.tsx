import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import bg from "../images/bg.png";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Values from "../components/Values";
import Projects from "../components/Projects";
import Why from "../components/Why";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>BlueDuck</title>
        <link rel="icon" href="" />
      </Head>
      <section className="bg-[url('../images/bg.png')] bg-no-repeat bg-cover">
        <Header />
        <Hero />
      </section>
      <About />
      <Projects />
      <Values />
      <Why />

      <main>
        <section></section>
      </main>
    </>
  );
};

export default Home;
