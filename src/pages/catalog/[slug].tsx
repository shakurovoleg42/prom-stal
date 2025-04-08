/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Container } from "@/src/components/Container";
import fetchService from "@/src/services/fetch";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { CircleArrowLeft } from "lucide-react";
import Loading from "@/src/components/ui/loading";
import Head from "next/head";

const Catalog = () => {
  const router = useRouter();
  const { slug } = router.query;

  const [subcategory, setSubcategory] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");

  useEffect(() => {
    const fetchCategory = async () => {
      if (slug) {
        setIsLoading(true);
        try {
          const response = await fetchService.getCategoryBySlug(slug);
          console.log(response);
          setMetaTitle(response.category.meta_title);
          setMetaDescription(response.category.meta_description);
          const subcategories = response.subcategories;

          if (subcategories.length > 0) {
            setSubcategory(subcategories);
          } else {
            router.push({
              pathname: `/products`,
              query: { category: slug },
            });
          }
        } catch (error) {
          console.error("Ошибка при загрузке категории:", error);
        } finally {
          setIsLoading(false);
        }
      }
    };

    fetchCategory();
  }, [router, slug]);

  if (isLoading) {
    // Проверка состояния загрузки
    return <Loading />;
  }

  if (!subcategory.length) {
    return (
      <div className="my-44 flex flex-col items-center text-center">
        <div className="text-[3rem]">Ничего не найдено</div>
        <div className="underline items-center w-[400px] text-center justify-center flex">
          <div className="flex flex-row" onClick={() => router.back()}>
            <CircleArrowLeft className="mr-2" />
            Вернуться на главную
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content="https://apromstal.kz/favicon.ico" />
        <meta property="og:url" content={`https://apromstal.kz/${slug}`} />
      </Head>
      <Container className="flex flex-col justify-between items-center text-center font-montserrat mb-[20%]">
        <p className="w-full text-[#999999] font-[700] leading-[20px] sm:ml-5 sm:flex sm:flex-row text-start">
          <Link href="/" className="hover:border-b hover:border-[#999999]">
            Главная
          </Link>
          <span className="mx-2"> / </span>
          <Link
            href="/catalog"
            className="hover:border-b hover:border-[#999999]"
          >
            Каталог
          </Link>
          <span className="mx-2"> / </span>
          <span className="">Категория {subcategory[0].name}</span>
        </p>

        <div className="w-full flex flex-col mt-9">
          <div className="w-full">
            <h1 className="text-[2rem] font-[800] text-center px-3">
              {subcategory[0].name}
            </h1>
          </div>
          <div className="w-full flex flex-wrap justify-center gap-24 mt-5">
            {subcategory.map((category: any) => (
              <div
                key={category.id}
                className="max-w-[150px] flex flex-col items-center text-left text-wrap gap-3"
              >
                <img
                  src={category.image || "/no-image.jpg"}
                  alt={category.name}
                  className="w-[90px] h-[90px]"
                />
                <div className="flex flex-col text-center gap-5">
                  {category.subcategories &&
                  category.subcategories.length > 0 ? (
                    <Link
                      href={{
                        pathname: `/catalog/${category.slug}`,
                        query: { category: category.slug },
                      }}
                    >
                      {category.name}
                    </Link>
                  ) : (
                    <Link
                      href={{
                        pathname: `/products`,
                        query: { category: category.slug },
                      }}
                    >
                      {category.name}
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
};

export default Catalog;
