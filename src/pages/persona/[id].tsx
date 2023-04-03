import Head from "next/head";
import { useRouter } from "next/router";

export default function PersonaPage() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <Head>
        <title>Personagem</title>
      </Head>
      <main>
        <h2>{id}</h2>
      </main>
    </>
  );
}
