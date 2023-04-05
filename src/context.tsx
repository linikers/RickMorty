import { createContext, useState, useContext, ReactNode } from "react";
import { iPersona } from "./components/Card/ipersona";

interface FavoriteContextType {
  favorites: iCard[];
  setFavorites: React.Dispatch<React.SetStateAction<iCard[]>>;
  getPersonas: () => Promise<{ props: { personas: iPersona[] } }>;
  getImg: (id: number) => Promise<string>;
  addToFavorites: (card: iCard) => void;
  removeFavorites: (id: number) => void;
}
interface IFavoriteProps {
  children: ReactNode;
}

export interface iCard {
  id: number;
  name?: string;
  image?: string;
  specie?: string;
  isFavorite: boolean;
}

export const FavoriteContext = createContext<FavoriteContextType>({
  favorites: [],
  setFavorites: () => {},
  getPersonas: async () => ({ props: { personas: [] } }),
  getImg: async (id: number) => "",
  addToFavorites: (card: iCard) => {},
  removeFavorites: (id: number) => {},
});

export const FavoriteProvider: React.FC<IFavoriteProps> = ({ children }) => {
  const [favorites, setFavorites] = useState<iCard[]>([]);

  async function getPersonas() {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    console.log(response);
    const { results: personas } = await response.json();

    return {
      props: {
        personas,
      },
    };
  }
  async function getImg(id: number) {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/${id}`
    );
    const data = await response.json();

    return data.image;
  }

  const addToFavorites = (card: iCard) => {
    console.log("click");

    setFavorites((prevFavorites) => [...favorites, card]);
    console.log(favorites);
  };

  const removeFavorites = (id: number) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((card) => card.id !== id)
    );
  };

  return (
    <FavoriteContext.Provider
      value={{
        favorites,
        setFavorites,
        getPersonas,
        getImg,
        addToFavorites,
        removeFavorites,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};
