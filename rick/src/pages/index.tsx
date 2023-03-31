import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "../components/Header/index";
import Card from "@/components/Card";
import { useState, useEffect } from "react";
import { iPersona } from "@/components/Card/ipersona";

const inter = Inter({ subsets: ["latin"] });

interface IHomeProps {
  personas: iPersona[];
}

export default function Home({ personas }: IHomeProps) {
  const [imageUrls, setImageUrls] = useState<string[]>([]);

  useEffect(() => {
    const fetchImgs = async () => {
      const urls = await Promise.all(
        personas.map(async (persona) => {
          const response = await fetch(persona.image);

          return response.url;
        })
      );

      setImageUrls(urls);
    };
    fetchImgs();
  }, [personas]);
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
        <ul className={styles.listPersona}>
          {personas &&
            personas.map((persona, index) => (
              <Card
                key={persona.id}
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
export async function getImg(id: number) {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${id}`
  );
  const data = await response.json();
  console.log(data.image);
  return data.image;
}
