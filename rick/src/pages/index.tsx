import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "../components/Header/index";
import Card, { iPersona } from "@/components/Card";

const inter = Inter({ subsets: ["latin"] });

interface IHomeProps {
  personas: iPersona[];
}

export default function Home({ personas }: IHomeProps) {
  return (
    <>
      <Head>
        <title>Rick and Morty</title>
        <meta name="description" content="Rick and Morty" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className={styles.main}>
        <Card personas={personas} />
      </main>
    </>
  );
}
export async function getStaticProps() {
  const response = await fetch("https://rickandmortyapi.com/api/character");
  console.log(response);
  const { results: personas } = await response.json();
  console.log(personas);
  return {
    props: {
      personas,
    },
  };
}
