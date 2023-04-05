import Head from "next/head";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Card from "@/components/Card";
import Header from "@/components/Header";
import styles from "@/styles/Search.module.css";
import { iPersona } from "@/components/Card/ipersona";

const inter = Inter({ subsets: ["latin"] });

export default function Search() {
  const router = useRouter();

  const [searchQuery, setSearchQuery] = useState("");
  const [personSearch, setPersonSearch] = useState<iPersona[]>([]);
  const [imageUrls, setImageUrls] = useState<string[]>([]);

  async function getSearchProps(q: string) {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?name=${q}`
    );

    const { results: personas } = await response.json();

    return personas;
  }

  async function fetchImage(persona: iPersona): Promise<string> {
    try {
      if (!persona.image) {
        throw new Error("imagem não encontrada");
      }
      const response = await fetch(persona.image);
      const blob = await response.blob();
      const imageUrl = URL.createObjectURL(blob);
      return imageUrl;
    } catch (error) {
      console.error(error);
      return "";
    }
  }

  useEffect(() => {
    async function fetchData() {
      const { q } = router.query;
      if (q) {
        const searchPersona = q.toString();
        setSearchQuery(searchPersona);
        try {
          const personas = await getSearchProps(searchPersona);
          setPersonSearch(personas);
          const urls = await Promise.all(
            personas.map(async (persona: iPersona) => {
              try {
                const imageUrl = await fetchImage(persona);
                return imageUrl;
              } catch (error) {
                console.error(error);
                return "";
              }
            })
          );
          setImageUrls(urls);
        } catch (error) {
          console.error(error);
          setPersonSearch([]);
          setImageUrls([]);
        }
      }
    }
    fetchData();
  }, [router.query]);

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
        <h2>Resultados para {searchQuery}</h2>
        <ul className={styles.listPersona}>
          {personSearch.map((persona, index) => (
            <Card
              key={persona.id}
              id={index}
              image={persona.image}
              name={persona.name}
              specie={persona.species}
              isFavorite={false}
            />
          ))}
        </ul>
      </main>
    </>
  );
}
