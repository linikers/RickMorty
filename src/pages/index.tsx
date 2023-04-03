import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "../components/Header/index";
import Card from "@/components/Card";
import { useState, useEffect, useContext } from "react";
import { iPersona } from "@/components/Card/ipersona";
import { FavoriteContext } from "@/context";

const inter = Inter({ subsets: ["latin"] });

interface IHomeProps {
  personas: iPersona[];
}

export default function Home({ personas }: IHomeProps) {
  const [imageUrls, setImageUrls] = useState<string[]>([]);

  const { favorites } = useContext(FavoriteContext);

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
        <div>
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
        </div>
      </main>
    </>
  );
}
export async function getStaticProps() {
  const response = await fetch("https://rickandmortyapi.com/api/character");
  console.log(response);
  const { results: personas } = await response.json();

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

  return data.image;
}
