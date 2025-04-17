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
      return new URL(url, "https://apromstal.kz/").pathname;
    };

    const fetchSeoData = async (url: string) => {
      const cleanSlug = getCleanSlug(url);

      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API}/seo?slug=${cleanSlug}`
        );
        const json = await res.json();

        if (json.statusCode === 200) {
          setSeo(json.data);
        }
      } catch (error) {
        console.error("❌ Ошибка загрузки SEO данных:", error);
      }
    };

    fetchSeoData(router.asPath);

    const handleRouteChange = (url: string) => {
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
        <title>{seo?.meta_title || "А-промсталь"}</title>
        <meta name="description" content={seo?.meta_description || ""} />
        <meta property="og:title" content={seo?.meta_title || "А-промсталь"} />
        <meta property="og:description" content={seo?.meta_description || ""} />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={typeof window !== "undefined" ? window.location.href : ""}
        />
        <meta property="og:image" content="https://apromstal.kz/logo.svg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seo?.meta_title || "А-промсталь"} />
        <meta
          name="twitter:description"
          content={seo?.meta_description || ""}
        />
        <meta name="twitter:image" content="https://apromstal.kz/logo.svg" />
      </Head>
      <Component {...pageProps} />
      <div className="fixed bottom-4 right-4">
        <a
          href="https://api.whatsapp.com/send?phone=77714258484"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/whatsapp2.svg" alt="WhatsApp" className="w-12 h-12" />
        </a>
      </div>
    </Layout>
  );
}
