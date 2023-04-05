import Head from "next/head";
import { Inter } from "next/font/google";
import { useContext, useEffect, useState } from "react";
import { FavoriteContext, iCard } from "@/context";
import Header from "@/components/Header";
import Card from "@/components/Card";
import { iPersona } from "@/components/Card/ipersona";
import styles from "@/styles/Search.module.css";

const inter = Inter({ subsets: ["latin"] });

interface IFavoritesProps {
  personas: iCard[];
}

export default function Favorites({ personas }: IFavoritesProps) {
  const { favorites } = useContext(FavoriteContext);
  console.log(favorites);
  const favoritesPersonas = personas.filter((persona) =>
    favorites.find((favorite) => favorite.id === persona.id)
  );

  return (
    <>
      <Head>
        <title>Rick and Morty - Favoritos</title>
        <meta name="description" content="Rick and Morty" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className={styles.main}>
        <ul className={styles.listPersona}>
          {favorites.length > 0 ? (
            favorites.map((persona) => (
              <Card
                key={persona.id}
                id={persona.id}
                image={persona.image}
                name={persona.name}
                specie={persona.specie}
                isFavorite={false}
              />
            ))
          ) : (
            <p className={styles.favMsg}>
              <b className={styles.favB}>“Wubba Lubba Dub Dub”</b>
              <br /> Você ainda não tem nenhum personagem favorito.
            </p>
          )}
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
  const image = data.image;

  return image;
}
