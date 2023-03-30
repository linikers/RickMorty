import Head from "next/head";
import { Inter } from "next/font/google";
import Image from "next/image";
import { useState, useEffect } from "react";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export interface iPersona {
  id: number;
  name: string;
  status?: string;
  species?: string;
  type: string | null;
  gender?: string;

  origin?: {
    name?: string;
    url?: string;
  };
  location?: {
    name?: string;
    url?: string;
  };
}

export default function Card({ personas }: { personas: iPersona[] }) {
  const [imageUrls, setImageUrls] = useState<string[]>([]);

  useEffect(() => {
    const fetchImgs = async () => {
      if (personas) {
        const urls = await Promise.all(
          personas.map((persona) => getImg(persona.id))
        );
        setImageUrls(urls);
      }
    };
    fetchImgs();
  }, [personas]);

  return (
    <ul className={styles.listPersona}>
      {imageUrls.length > 0 &&
        personas &&
        personas.map((persona, index) => (
          <li key={personas[index].id} className={styles.card}>
            <Image
              src={imageUrls[index]}
              alt={personas[index].name}
              width={200}
              height={180}
              quality={75}
            />
            <h2>{personas[index].name}</h2>
            <p>{personas[index].species}</p>
            <button>Favorito</button>
          </li>
        ))}
    </ul>
  );
}

async function getImg(id: number) {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${id}`
  );
  const data = await response.json();
  console.log(data.image);
  return data.image;
}
