import { Inter } from "next/font/google";
import Image from "next/image";
import styles from "@/styles/Card.module.css";
import { useContext, useEffect, useState } from "react";

import { FavoriteContext, iCard } from "@/context";

const inter = Inter({ subsets: ["latin"] });

export default function Card({ id, name, image, specie }: iCard) {
  const { setFavorites, favorites, addToFavorites } =
    useContext(FavoriteContext);

  const [isFavorite, setFavorite] = useState(false);
  useEffect(() => {
    if (favorites.some((fav) => fav.id === id)) {
      setFavorite(true);
    } else {
      setFavorite(false);
    }
  }, [favorites]);

  return (
    <li key={id} className={styles.card}>
      {image && (
        <Image
          src={image}
          alt={name ? name : ""}
          width={200}
          height={180}
          quality={75}
        />
      )}
      <h2>{name}</h2>
      <p>{specie}</p>
      <FavoriteBtn card={{ id, name, image, specie }} isFavorite={isFavorite} />
    </li>
  );
}

function FavoriteBtn({
  card,
  isFavorite,
}: {
  card: iCard;
  isFavorite: boolean;
}) {
  const { favorites, addToFavorites } = useContext(FavoriteContext);

  return (
    <button className={styles.btnCard} onClick={() => addToFavorites(card)}>
      {isFavorite ? "Remover" : "Favoritos"}
    </button>
  );
}
