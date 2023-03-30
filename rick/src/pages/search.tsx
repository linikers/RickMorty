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

  const [searchQuey, setSearchQuery] = useState("");
  const [personSearch, setPersonSearch] = useState([]);

  useEffect(() => {
    const { q } = router.query;

    if (q) {
      setSearchQuery(q.toString());
    }
  }, [router.query]);

  async function SearchPerson(person: string) {
    const searchPersona = `=${person}`;
    const { personas } = await getSearchProps(searchPersona);
    setPersonSearch(personas);
  }
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
        <h2>Resultados para {searchQuey}</h2>
        {personSearch.map((person) => (
          <Card key={person.id} person={person} />
        ))}
      </main>
    </>
  );
}

export async function getSearchProps(q: string) {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/?name=${q}`
  );
  console.log(response);
  const { results: personas } = await response.json();
  console.log(personas);
  return {
    personas,
  };
}
