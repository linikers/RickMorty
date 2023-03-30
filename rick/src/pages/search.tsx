import Head from "next/head";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Card from "@/components/Card";
import Header from "@/components/Header";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Search() {
  const router = useRouter();
  const [personSearch, setPersonSearch] = useState([]);
  const { q } = router.query;
  return (
    <>
      <Head>
        <title>Rick and Morty - Busca</title>
        <meta name="description" content="Rick and Morty" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <h2>Resultados para {q}</h2>
      </main>
    </>
  );
}
