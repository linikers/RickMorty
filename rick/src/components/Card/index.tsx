import { Inter } from "next/font/google";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { iPersona } from "./ipersona";

export interface iCard {
  src: any;
  id?: number;
  name: string;
  image?: string;
  specie?: string;
}

const inter = Inter({ subsets: ["latin"] });

export default function Card({ id, name, image, specie }: iCard) {
  return (
    <li key={id} className={styles.card}>
      <Image src={image} alt={name} width={200} height={180} quality={75} />
      <h2>{name}</h2>
      <p>{specie}</p>
      <button>Favorito</button>
    </li>
  );
}
