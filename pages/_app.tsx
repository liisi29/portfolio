import LayoutMain from "@components/layout/LayoutMain";
import { AppProps } from "next/app";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  console.log(pageProps);
  return (
    <LayoutMain>
      <Component {...pageProps} />
    </LayoutMain>
  );
}

export default MyApp;
