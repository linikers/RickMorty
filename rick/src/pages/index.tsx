import Head from "next/head";
import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

interface iPersona {
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

interface IHomeProps {
  personas: iPersona[];
}

export default async function Home({ personas }: IHomeProps) {
  const images = personas.map((persona) => getImg(persona.id));

  return (
    <>
      <Head>
        <title>Rick and Morty</title>
        <meta name="description" content="Rick and Morty" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>
          <h1>Rick and Morty show</h1>
        </div>

        <ul>
          {await (async () => {
            const imageUrls = await Promise.all(images);

            return imageUrls.map((imageUrl, index) => (
              <li key={personas[index].id}>
                <Image
                  src={imageUrl}
                  alt={personas[index].name}
                  width={300}
                  height={250}
                />
                <h3>{personas[index].name}</h3>
                <p>{personas[index].species}</p>
              </li>
            ));
          })()}
        </ul>
      </main>
    </>
  );
}

async function getImg(id) {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${id}`
  );
  const data = await response.json();
  return data.image;
}

export async function getStaticProps() {
  const response = await fetch("https://rickandmortyapi.com/api/character");
  const { results: personas } = await response.json();

  return {
    props: {
      personas,
    },
  };
}
