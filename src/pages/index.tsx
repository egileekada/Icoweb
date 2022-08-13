import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import NavBar from "../components/Navbar";
import Firstsection from "../components/Firstsection";
import WhatWeDo from "../components/WhatWeDo";
import ProjectsHandled from "../components/ProjectsHandled";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  return (
    <>
      <div>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <NavBar />
        <Firstsection />
        <WhatWeDo />
        <ProjectsHandled />
        <Footer />
      </div>
    </>
  );
};

export default Home;
