/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
import fetchService from "@/src/services/fetch";
import Link from "next/link";
import { Container } from "@/src/components/Container";
import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { Skeleton } from "@/src/components/ui/skeleton";
import Banner from "@/src/components/Banner";
import Image from "next/image";

export default function Catalog() {
  const [categories, setCategories] = useState([]);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true);
      const response = await fetchService.getAllCategories();
      setCategories(
        response.flatMap((item: { subcategories: any }) => item.subcategories)
      );
      setLoading(false);
    };

    fetchCategories();
  }, []);

  const toggleCategory = (categoryId: string) => {
    setExpandedCategory((prev) => (prev === categoryId ? null : categoryId));
  };

  return (
    <>
      <Banner />
      <Container>
        <div className="text-[10px] leading-[10px] text-center my-8 font-inter">
          <h1 className="text-[#FFBC01] text-[1rem] leading-[60px] font-[600] sm:text-[3rem]">
            Каталог металлопроката
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-8">
            {loading
              ? Array.from({ length: 9 }).map((_, index) => (
                  <div
                    key={index}
                    className="p-4 box-border flex flex-col items-center bg-white rounded-lg"
                  >
                    <Skeleton className="h-[125px] w-full max-w-[250px] rounded-xl" />
                    <div className="w-full max-w-[250px] mt-3 space-y-2">
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-3/4" />
                    </div>
                  </div>
                ))
              : categories.map((item: any) => (
                  <div
                    key={item.id}
                    className="p-4 box-border flex flex-col items-center rounded-lg "
                  >
                    <Image
                      className="w-full max-w-[120px] aspect-[4/4] object-cover rounded-lg bg-white p-2"
                      src={item.image || "/no-image.jpg"}
                      width={120}
                      height={120}
                      alt="parts"
                    />
                    <div className="flex min-h-[52px] items-center mt-3">
                      <h3 className="text-center text-[1.2rem] leading-6 font-bold ">
                        {item.name}
                      </h3>
                    </div>

                    <div
                      className={clsx(
                        "overflow-hidden transition-all duration-700 ease-in-out text-start",
                        {
                          "max-h-[5000px]": expandedCategory === item.id,
                          "max-h-[180px]": expandedCategory !== item.id,
                        }
                      )}
                    >
                      {(expandedCategory === item.id
                        ? item.subcategories
                        : item.subcategories.slice(0, 4)
                      ).map((subItem: any) => (
                        <div
                          key={subItem.id}
                          className="mt-4 text-[0.8rem] leading-3"
                        >
                          <Link
                            href={`/catalog/${subItem.slug}`}
                            className="text-[#000000] font-bold hover:text-[#707070]"
                          >
                            {subItem.name}
                          </Link>
                        </div>
                      ))}
                    </div>
                    <button
                      onClick={() => toggleCategory(item.id)}
                      className={clsx("text-[#ddc124] font-bold mt-2", {
                        block: item.subcategories.length > 4,
                        hidden: item.subcategories.length <= 4,
                      })}
                    >
                      {expandedCategory === item.id ? "Скрыть" : "Показать еще"}
                    </button>
                  </div>
                ))}
          </div>
        </div>
      </Container>
    </>
  );
}
