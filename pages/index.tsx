import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Values from "../components/Values";
import Projects from "../components/Projects";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>BlueDuck</title>
        <link rel="icon" href="" />
      </Head>
      <section className="home px-6">
        <Header />
        <Hero />
      </section>
      <About />
      <Projects />
      <Values />

      <main>
        <section></section>
      </main>
    </>
  );
};

export default Home;
