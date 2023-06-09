import { FavoriteProvider } from "@/context";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <FavoriteProvider>
      <Component {...pageProps} />
    </FavoriteProvider>
  );
}
