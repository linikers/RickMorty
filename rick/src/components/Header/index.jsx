import Image from "next/image";
import logo from "../../../public/logo.svg";
import styles from "@/styles/Header.module.css";

export default function Header() {
  return (
    <header className={styles.top}>
      <figure>
        <Image
          className={styles.logo}
          src={logo}
          alt="Rick and morty"
          quality={75}
          width={270}
          height={79}
        />
      </figure>
    </header>
  );
}
