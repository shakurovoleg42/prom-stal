import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import NextTopLoader from "nextjs-toploader";
import "./globals.css";

interface SeoData {
  meta_title?: string;
  meta_description?: string;
}

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [seo, setSeo] = useState<SeoData | null>(null);

  useEffect(() => {
    const getCleanSlug = (url: string) => {
      return new URL(url, "http://localhost").pathname; // Убираем query параметры
    };

    const fetchSeoData = async (url: string) => {
      const cleanSlug = getCleanSlug(url);
      console.log("🔍 Отправляем запрос на SEO:", cleanSlug);

      try {
        const res = await fetch(
          `https://api.apromstal.kz/api/seo?slug=${cleanSlug}`
        );
        const json = await res.json();
        console.log("✅ Получены данные SEO:", json);

        if (json.statusCode === 200) {
          setSeo(json.data);
        }
      } catch (error) {
        console.error("❌ Ошибка загрузки SEO данных:", error);
      }
    };

    console.log("📌 Текущий маршрут:", getCleanSlug(router.asPath));
    fetchSeoData(router.asPath);

    const handleRouteChange = (url: string) => {
      console.log("➡️ Новый маршрут:", getCleanSlug(url));
      fetchSeoData(url);
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.asPath]);

  return (
    <Layout>
      <NextTopLoader color="#fbff00" height={2} showSpinner={false} />
      <Head>
        <title>{seo?.meta_title || "A-promstal"}</title>
        <meta name="description" content={seo?.meta_description || ""} />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
