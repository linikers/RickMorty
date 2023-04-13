import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "../components/Header/index";
import Card from "@/components/Card";
import { useState, useEffect, useContext } from "react";
import { iPersona } from "@/components/Card/ipersona";
import { FavoriteContext } from "@/context";
import ReactPaginate from "react-paginate";

const inter = Inter({ subsets: ["latin"] });

interface IHomeProps {
  personas: iPersona[];
}
interface IPageSelected {
  selected: number;
}
export default function Home({ personas }: IHomeProps) {
  const [imageUrls, setImageUrls] = useState<string[]>([]);

  const { favorites, page, setPage } = useContext(FavoriteContext);

  useEffect(() => {
    const fetchImgs = async () => {
      const urls = await Promise.all(
        personas.map(async (persona) => {
          if (persona.image) {
            const response = await fetch(persona.image);
            return response.url;
          }
          return "";
        })
      );

      setImageUrls(urls);
    };
    fetchImgs();
  }, [personas]);

  const itemsPerPage = 20;
  const [totalPages, setTotalPages] = useState<number>(0);
  const [totalItems, setTotalItems] = useState<number>(0);

  const pageCount = Math.ceil(personas.length / itemsPerPage);
  const offset = page * itemsPerPage;
  const currentItems = personas.slice(offset, offset + itemsPerPage);

  function handlePage(selectedItem: { selected: number }) {
    setPage(selectedItem.selected + 1);
  }

  return (
    <>
      <Head>
        <title>Rick and Morty</title>
        <meta name="description" content="Rick and Morty" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        <ul className={styles.listPersona}>
          {currentItems.map((persona, index) => (
            <Card
              key={index}
              id={persona.id ?? 0}
              image={imageUrls[offset + index]}
              name={persona.name}
              specie={persona.species}
              isFavorite={false}
            />
          ))}
        </ul>
        <ReactPaginate
          previousLabel={"< Anterior"}
          nextLabel={"Próximo"}
          breakLabel={"..."}
          breakClassName={"break"}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePage}
          containerClassName={"paginate"}
          activeClassName={"active"}
          initialPage={page - 1}
        />
      </main>
    </>
  );
}
export async function getStaticProps() {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character?page=${page}`
  );
  console.log(response);
  const { results: personas } = await response.json();

  return {
    props: {
      personas,
    },
  };
}
export async function getImg(id: number) {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${id}`
  );
  const data = await response.json();

  return data.image;
}
