import Image from "next/image";
import logo from "../../../public/logo.svg";
import styles from "@/styles/Header.module.css";
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Header() {
  const [search, setSearch] = useState("");

  const router = useRouter();

  const handleSearch: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    if (!search.trim()) {
      return;
    }
    const result = await searchPerson(search.trim());

    router.push(`/search?q=${search.trim()}`);
    setSearch("");
  };

  return (
    <header className={styles.top}>
      <Link href="/">
        <Image
          className={styles.logo}
          src={logo}
          alt="Rick and morty"
          quality={75}
          width={270}
          height={79}
        />
      </Link>

      <form className={styles.formSearch} onSubmit={handleSearch}>
        <input
          className={styles.inputSearch}
          id="search"
          type="text"
          placeholder="Pesquisa"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <button className={styles.btnSearch} type="submit">
          Busca
        </button>
      </form>
    </header>
  );
}

async function searchPerson(person: string) {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/?name=${person}`
  );
  const data = await response.json();
  console.log(data.results);
  return data.results;
}
