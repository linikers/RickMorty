import Head from "next/head";
import { Inter } from "next/font/google";
import Image from "next/image";
import { useState, useEffect } from "react";
import styles from "@/styles/Home.module.css";
import Header from "../components/Header/index";

const inter = Inter({ subsets: ["latin"] });

interface iPersona {
  id: number;
  name: string;
  status?: string;
  species?: string;
  type: string | null;
  gender?: string;

  origin?: {
    name?: string;
    url?: string;
  };
  location?: {
    name?: string;
    url?: string;
  };
}

interface IHomeProps {
  personas: iPersona[];
}

export default function Home({ personas }: IHomeProps) {
  const [imageUrls, setImageUrls] = useState<string[]>([]);

  useEffect(() => {
    const fetchImgs = async () => {
      const urls = await Promise.all(
        personas.map((persona) => getImg(persona.id))
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
          {imageUrls.length > 0 &&
            imageUrls.map((imageUrl, index) => (
              <li key={personas[index].id} className={styles.card}>
                <Image
                  src={imageUrl}
                  alt={personas[index].name}
                  width={200}
                  height={180}
                  quality={75}
                />
                <h2>{personas[index].name}</h2>
                <p>{personas[index].species}</p>
                <button>Favorito</button>
              </li>
            ))}
        </ul>
      </main>
    </>
  );
}

async function getImg(id: number) {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${id}`
  );
  const data = await response.json();
  return data.image;
}

export async function getStaticProps() {
  const response = await fetch("https://rickandmortyapi.com/api/character");
  const { results: personas } = await response.json();

  return {
    props: {
      personas,
    },
  };
}
