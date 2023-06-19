import Head from "next/head";
import ToolsIUse from "./ToolsIUse";
import MainContent from "./MainContent";
import Projects from "./Projects";
import { Fade } from "react-reveal";

import { Inter } from "next/font/google";

export default function Home() {
  return (
    <>
      <Head>
        <title>Noel Ohaeri</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white px-10 font-Inter">
        <section className="min-h-screen py-1">
          <Fade big>
            <MainContent />
          </Fade>
        </section>
        <Fade top distance="5%">
          <section>
            <ToolsIUse />
          </section>

          <section className="">
            <Projects />
          </section>
        </Fade>
      </main>
    </>
  );
}
