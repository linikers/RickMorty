import { iCard } from "@/components/Card";
import { createContext, useState, useContext } from "react";
import { iPersona } from "./components/Card/ipersona";

interface FavoriteContextType {
  favorites: iCard[];
  setFavorites: React.Dispatch<React.SetStateAction<iCard[]>>;
  getPersonas: () => Promise<{ props: { personas: iPersona[] } }>;
  getImg: (id: number) => Promise<string>;
}
export const FavoriteContext = createContext<FavoriteContextType>({
  favorites: [],
  setFavorites: () => {},
  getPersonas: async () => ({ props: { personas: [] } }),
  getImg: async (id: number) => "",
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

  return (
    <FavoriteContext.Provider
      value={{
        favorites,
        setFavorites,
        getPersonas,
        getImg,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};
