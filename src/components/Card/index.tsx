import { Inter } from "next/font/google";
import Image from "next/image";
import styles from "@/styles/Card.module.css";
import { useContext, useEffect, useState } from "react";

import { FavoriteContext, iCard } from "@/context";

const inter = Inter({ subsets: ["latin"] });

export default function Card({ id, name, image, specie, isFavorite }: iCard) {
  const { setFavorites, favorites, addToFavorites, removeFavorites } =
    useContext(FavoriteContext);

  const [cardIsFavorite, setCardIsFavorite] = useState(isFavorite);
  useEffect(() => {
    setCardIsFavorite(favorites.some((fav) => fav.id === id));
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
      {cardIsFavorite ? (
        <button className={styles.btnCard} onClick={() => removeFavorites(id)}>
          {" "}
          Remover
        </button>
      ) : (
        <button
          className={styles.btnCard}
          onClick={() =>
            addToFavorites({ id, name, image, specie, isFavorite: true })
          }
        >
          Favorito
        </button>
      )}
    </li>
  );
}

// function FavoriteBtn({
//   card,
//   isFavorite,
// }: {
//   card: iCard;
//   isFavorite: boolean;
// }) {
//   const { favorites, addToFavorites, removeFavorites } =
//     useContext(FavoriteContext);

//   return (
//     <button
//       className={styles.btnCard}
//       onClick={() =>
//         isFavorite ? removeFavorites(card.id) : addToFavorites(card)
//       }
//     >
//       {isFavorite ? "Remover" : "Favorito"}
//     </button>
//   );
// }
