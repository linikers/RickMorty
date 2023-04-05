import Head from "next/head";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Card from "@/components/Card";
import Header from "@/components/Header";
import styles from "@/styles/Search.module.css";
import { iPersona } from "@/components/Card/ipersona";

const inter = Inter({ subsets: ["latin"] });

export default async function Search() {
  const router = useRouter();

  const [searchQuey, setSearchQuery] = useState("");
  const [personSearch, setPersonSearch] = useState<iPersona[]>([]);
  const [imageUrls, setImageUrls] = useState<string[]>([]);

  async function getSearchProps(q: string) {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?name=${q}`
    );

    const { results: personas } = await response.json();

    return {
      personas,
    };
  }

  function SearchPerson(persona: string) {
    const searchPersona = persona;
    getSearchProps(searchPersona).then(({ personas }) => {
      setPersonSearch(personas);
    });
  }

  useEffect(() => {
    const { q } = router.query;

    if (q) {
      setSearchQuery(q.toString());
      SearchPerson(q.toString());
    }
  }, [router.query]);

  async function fetchImage(persona: iPersona): Promise<string> {
    if (!persona.image) {
      throw new Error("imagem não encontrada");
    }

    const response = await fetch(persona.image);
    const blob = await response.blob();
    const imageUrl = URL.createObjectURL(blob);
    return imageUrl;
  }

  const urls = await Promise.all(
    personSearch.map(async (persona) => {
      return fetchImage(persona);
    })
  );

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
        <ul className={styles.listPersona}>
          {personSearch.map((persona, index) => (
            <Card
              key={persona.id}
              id={index}
              image={imageUrls[index]}
              name={persona.name}
              specie={persona.species}
            />
          ))}
        </ul>
      </main>
    </>
  );
}
