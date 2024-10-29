/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Container } from "@/src/components/Container";
import fetchService from "@/src/services/fetch";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { CircleArrowLeft } from "lucide-react";

const Catalog = () => {
  const router = useRouter();
  const { slug, name } = router.query;

  const [subcategory, setSubcategory] = useState<any>(null);
  console.log(slug);

  useEffect(() => {
    const fetchCategory = async () => {
      if (slug) {
        try {
          const response = await fetchService.getCategoryBySlug(slug);
          if (response.subcategories.length <= 0) {
            console.log("Category slug:", response.subcategories[0].slug);
            router.push({
              pathname: `/catalog/${response.subcategories.slug}`,
            });
          }
          setSubcategory(response.subcategories);
        } catch (error) {
          console.error("Ошибка при загрузке категории:", error);
        }
      }
    };

    fetchCategory();
  }, [slug]);

  if (!subcategory) {
    return (
      <>
        <div className="my-44 flex flex-col items-center text-center">
          <div className="text-[3rem] flex">
            Загрузка
            <span className="dot-1">.</span>
            <span className="dot-2">.</span>
            <span className="dot-3">.</span>
          </div>
        </div>

        <style jsx>{`
          @keyframes dotAnimation {
            0%,
            100% {
              opacity: 0;
            }
            25% {
              opacity: 1;
            }
          }

          .dot-1 {
            animation: dotAnimation 1.5s infinite;
          }

          .dot-2 {
            animation: dotAnimation 1.5s infinite 0.5s;
          }

          .dot-3 {
            animation: dotAnimation 1.5s infinite 1s;
          }
        `}</style>
      </>
    );
  }

  if (!subcategory.length) {
    return (
      <div className="my-44 flex flex-col items-center text-center">
        <div className=" text-[3rem] ">Ничего не найдено</div>
        <div className="underline items-center w-[400px] text-center justify-center flex">
          <Link href="/" className="flex flex-row">
            <CircleArrowLeft className="mr-2" />
            Вернуться на главную
          </Link>
        </div>
      </div>
    );
  }

  return (
    <Container className="flex flex-col justify-between items-center text-center font-montserrat mb-[20%]">
      <p className="w-full text-[#999999] font-[700] leading-[20px] flex flex-row text-start ml-5">
        <Link href="/" className="hover:border-b hover:border-[#999999]">
          Главная
        </Link>
        <span className="mx-2"> / </span>
        <span>Категория {name}</span>
      </p>

      <div className="w-full flex flex-col mt-9">
        <div className="w-full">
          <h1 className="text-[2rem] font-[800] text-center">{name}</h1>
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
                <Link
                  href={{
                    pathname: `/products/`,
                    query: { category: category.slug },
                  }}
                >
                  {category.name}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Catalog;
