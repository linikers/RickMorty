import { Inter } from "next/font/google";
import Image from "next/image";
import styles from "@/styles/Card.module.css";
import { useContext, useEffect } from "react";

import { FavoriteContext, iCard } from "@/context";

const inter = Inter({ subsets: ["latin"] });

export default function Card({ id, name, image, specie }: iCard) {
  const { setFavorites, favorites, addToFavorites } =
    useContext(FavoriteContext);

  // useEffect(() => {
  //   if (favorites) {
  //     console.log(favorites);
  //   }
  // }, [favorites]);

  return (
    <li key={id} className={styles.card}>
      <Image src={image} alt={name} width={200} height={180} quality={75} />
      <h2>{name}</h2>
      <p>{specie}</p>
      <FavoriteBtn card={{ id, name, image, specie }} />
    </li>
  );
}

function FavoriteBtn({ card }: { card: iCard }) {
  const { favorites, addToFavorites } = useContext(FavoriteContext);

  return (
    <button className={styles.btnCard} onClick={() => addToFavorites(card)}>
      Favoritos
    </button>
  );
}
