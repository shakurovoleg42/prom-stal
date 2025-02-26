/* eslint-disable @next/next/no-img-element */
import Banner from "@/src/components/Banner";
import { Container } from "@/src/components/Container";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import fetchService from "@/src/services/fetch";

const News = () => {
  interface Article {
    id: number;
    image: string;
    title: string;
    description: string;
  }

  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetchService.getAllArticles();
      setArticles(res);
    };
    fetchData();
  }, []);

  return (
    <>
      <Head>
        <title>Статьи</title>
        <meta name="description" content="Статьи" />
      </Head>
      <Banner />
      <Container className="py-10 flex flex-col items-center">
        <div className="mb-8 text-center md:text-left">
          <h1 className="text-[18px] sm:text-[22px] lg:text-[28px] font-[600] font-montserrat px-5">
            В этом разделе собраны статьи, которые помогут вам разобраться в
            важных вопросах.
          </h1>
        </div>
        <div className="grid grid-cols-1 gap-4 w-full">
          {articles.map((item) => (
            <div
              key={item.id}
              className="w-full group flex flex-col md:flex-row"
              // ${item.id % 2 === 0 ? "md:flex-row-reverse" : ""}` Если потребуется сделать чередование с reverse по id
            >
              {/* Контейнер с картинкой */}
              <div className="relative overflow-hidden w-full max-w-[500px] aspect-[500/270] rounded-l-lg">
                <Link
                  href={`/posts/${item.id}`}
                  className="block w-full h-full"
                >
                  <img
                    src={item.image}
                    alt="banner"
                    className="w-full h-full object-cover transition-transform duration-1000 ease-in-out group-hover:scale-110"
                  />
                </Link>
              </div>
              {/* Контейнер с текстом */}
              <Link
                href={`/posts/${item.id}`}
                className="block bg-[#11545a] w-full max-w-[550px] md:max-w-[800px] aspect-[550/270]"
              >
                <div className="flex flex-col gap-5 justify-center items-center p-8 text-white">
                  <span className="text-[24px] font-[800] leading-[1.25]">
                    {item.title}
                  </span>
                  <p className="text-[16px] font-[400] leading-[1.6]  whitespace-pre-wrap">
                    {item.description}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
};

export default News;
