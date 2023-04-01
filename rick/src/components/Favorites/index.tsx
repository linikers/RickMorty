import { useContext, useState } from "react";
import Card, { iCard } from "@/components/Card";
import { FavoriteContext, FavoriteProvider } from "@/contexts/context";

export default function Favorites() {
  const { favorites, setFavorites } = useContext(FavoriteContext);

  return (
    <FavoriteProvider value={{ favorites, setFavorites }}>
      <div>
        <h1>Meus favoritos</h1>
        {console.log(favorites)}
        <ul>
          {favorites.map((card) => (
            <li key={card.id}>{card.name}</li>
          ))}
        </ul>
        <hr />
        <h1>Personagens</h1>
      </div>
    </FavoriteProvider>
  );
}
