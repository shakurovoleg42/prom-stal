import Layout from "../components/Layout";
import type { AppProps } from "next/app";
import NextTopLoader from "nextjs-toploader";
import "./globals.css";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <NextTopLoader color="#fbff00" height={2} showSpinner={false} />
      <Component {...pageProps} />
    </Layout>
  );
}
