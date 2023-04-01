import { Inter } from "next/font/google";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { useContext, useEffect } from "react";

import { FavoriteContext, FavoriteProvider } from "@/contexts/context";

export interface iCard {
  id?: number;
  name: string;
  image?: string;
  specie?: string;
}

const inter = Inter({ subsets: ["latin"] });

export default function Card({ id, name, image, specie }: iCard) {
  const { setFavorites, favorites } = useContext(FavoriteContext);

  const addToFavorite = () => {
    console.log("click");
    const favorite = { id, name, image, specie };
    setFavorites([...favorites, favorite]);
  };
  return (
    <FavoriteProvider>
      <li key={id} className={styles.card}>
        <Image src={image} alt={name} width={200} height={180} quality={75} />
        <h2>{name}</h2>
        <p>{specie}</p>
        <FavoriteBtn
          {...{ id, name, image, specie, favorites, addToFavorite }}
        />
      </li>
    </FavoriteProvider>
  );
}

function FavoriteBtn({
  id,
  name,
  image,
  specie,
  favorites,
  addToFavorite,
}: iCard & { favorites: iCard[]; addToFavorite: () => void }) {
  useEffect(() => {
    console.log(favorites);
  }, [favorites]);

  return <button onClick={addToFavorite}>Favoritos</button>;
}
