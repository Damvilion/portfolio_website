import Head from "next/head";
import { Inter } from "next/font/google";
import ToolsIUse from "./ToolsIUse";
import MainContent from "./MainContent";
import Projects from "./Projects";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Noel Ohaeri</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white px-10">
        <section className="min-h-screen py-1">
          <MainContent />
        </section>
        <section>
          <ToolsIUse />
        </section>

        <section className="">
          <Projects />
        </section>
      </main>
    </>
  );
}
