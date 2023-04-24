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
  const { favorites, page, setPage } = useContext(FavoriteContext);

  const [currentPage, setCurrentPage] = useState(1);
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [characters, setCharacters] = useState<iPersona[]>([]);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [totalItems, setTotalItems] = useState<number>(0);

  const itemsPerPage = 20;

  const offset = (currentPage - 1) * itemsPerPage;
  const currentItems =
    characters && characters.slice(offset, offset + itemsPerPage);

  const pageCount = Math.ceil(totalItems / itemsPerPage);

  const handlePageClick = (data: { selected: number }) => {
    const page = data.selected + 1;

    setCurrentPage(page);
  };

  const fetchData = async (page: number) => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character?page=${page}`
    );
    const data = await response.json();

    setTotalPages(data.info.pages);
    setTotalItems(data.info.count);

    const urls = await Promise.all(
      data.results.map(async (persona: { image: RequestInfo | URL }) => {
        if (persona.image) {
          const response = await fetch(persona.image);
          return response.url;
        }
        return "";
      })
    );

    setImageUrls(urls);
    setCharacters(data.results);
  };

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

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
          {characters &&
            characters.map((persona, index) => (
              <Card
                key={index}
                id={persona.id ?? 0}
                image={imageUrls[index]}
                name={persona.name}
                specie={persona.species}
                isFavorite={false}
              />
            ))}
        </ul>
        <ReactPaginate
          previousLabel={"< Anterior "}
          nextLabel={" Próximo >"}
          breakLabel={"..."}
          breakClassName={"break"}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={2}
          onPageChange={handlePageClick}
          containerClassName={styles.paginate}
          activeClassName={"active"}
          initialPage={currentPage}
        />
      </main>
    </>
  );
}

export async function getImg(id: number) {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${id}`
  );
  const data = await response.json();

  return data.image;
}
