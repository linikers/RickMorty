import { createContext, useState, useContext } from "react";
import { iPersona } from "./components/Card/ipersona";

interface FavoriteContextType {
  favorites: iCard[];
  setFavorites: React.Dispatch<React.SetStateAction<iCard[]>>;
  getPersonas: () => Promise<{ props: { personas: iPersona[] } }>;
  getImg: (id: number) => Promise<string>;
  addToFavorites: (card: iCard) => void;
}

export interface iCard {
  id?: number;
  name?: string;
  image?: string;
  specie?: string;
}

export const FavoriteContext = createContext<FavoriteContextType>({
  favorites: [],
  setFavorites: () => {},
  getPersonas: async () => ({ props: { personas: [] } }),
  getImg: async (id: number) => "",
  addToFavorites: (card: iCard) => {},
});

export const FavoriteProvider: React.FC = ({ children }: any) => {
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
  return (
    <FavoriteContext.Provider
      value={{
        favorites,
        setFavorites,
        getPersonas,
        getImg,
        addToFavorites,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};
