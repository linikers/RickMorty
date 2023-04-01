import { iCard } from "@/components/Card";
import { iPersona } from "@/components/Card/ipersona";
import { createContext, useState, useContext } from "react";

interface FavoriteContextType {
  favorites: iCard[];
  setFavorites: React.Dispatch<React.SetStateAction<iCard[]>>;
}
export const FavoriteContext = createContext<FavoriteContextType>({
  favorites: [],
  setFavorites: () => {},
});

export const FavoriteProvider: React.FC = ({ children }) => {
  const [favorites, setFavorites] = useState<iCard[]>([]);

  return (
    <FavoriteContext.Provider
      value={{
        favorites,
        setFavorites,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};
