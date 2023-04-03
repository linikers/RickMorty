import { Inter } from "next/font/google";
import Image from "next/image";
import styles from "@/styles/Card.module.css";
import { useContext, useEffect } from "react";

import { FavoriteContext } from "@/context";

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
  useEffect(() => {
    console.log(favorites);
  });

  return (
    <li key={id} className={styles.card}>
      <Image src={image} alt={name} width={200} height={180} quality={75} />
      <h2>{name}</h2>
      <p>{specie}</p>
      <FavoriteBtn {...{ id, name, image, specie, favorites, addToFavorite }} />
    </li>
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
  return (
    <button className={styles.btnCard} onClick={addToFavorite}>
      Favoritos
    </button>
  );
}
