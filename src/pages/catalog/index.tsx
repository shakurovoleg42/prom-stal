/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
import fetchService from "@/src/services/fetch";
import Link from "next/link";
import { Container } from "@/src/components/Container";
import React, { useEffect, useState } from "react";
import clsx from "clsx";
import Head from "next/head";
import { Skeleton } from "@/src/components/ui/skeleton";

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
      <Head>
        <title>Каталог металлопроката</title>
      </Head>
      <Container>
        <div className="text-[10px] leading-[10px] text-center my-8 font-inter">
          <h1 className="text-[#FFBC01] text-[1rem] leading-[60px] font-[600] sm:text-[3rem]">
            Каталог металлопроката
          </h1>
          <div className="flex flex-wrap items-start mt-8">
            {loading ? (
              Array.from({ length: 7 }).map((_, index) => (
                <div key={index} className="flex p-[10px] flex-[1_2_calc(25%-20px)] box-border items-start min-w-[300px] max-w-[400px]">
                  <div className="flex flex-col space-y-3">
                    <Skeleton className="h-[125px] w-[250px] rounded-xl" />
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-[250px]" />
                      <Skeleton className="h-4 w-[200px]" />
                    </div>
                  </div>
                </div>
              ))
            ) : (
              categories.map((item: any) => (
                <div
                  key={item.id}
                  className="flex p-[10px] flex-[1_2_calc(25%-20px)] box-border items-start min-w-[300px] max-w-[400px]"
                >
                  <div className="rounded-[4px] mr-[10px] bg-[#F4F6F7]">
                    <img
                      className="min-w-[80px] max-w-[80px] min-h-[80px] max-h-[80px] rounded-[8px] p-1"
                      src={item.image || "/no-image.jpg"}
                      alt="parts"
                    />
                  </div>
                  <div className="text-left text-[0.8rem] leading-[13px] font-[500]">
                    <h3 className="md:text-[1.7rem] font-[900] mb-2 leading-[31px]">
                      {item.name}
                    </h3>
                    <div
                      className={clsx(
                        "overflow-hidden transition-all duration-500 ease-in-out",
                        {
                          "max-h-[5000px]": expandedCategory === item.id,
                          "max-h-[100px]": expandedCategory !== item.id,
                        }
                      )}
                    >
                      {(expandedCategory === item.id
                        ? item.subcategories
                        : item.subcategories.slice(0, 4)
                      ).map((subItem: any) => (
                        <div key={subItem.id} className="flex flex-col sm:text-[0.8rem]">
                          <Link
                            href={{
                              pathname: `/catalog/${subItem.slug}`,
                              query: { category: subItem.slug, name: subItem.name },
                            }}
                            className="mb-4 font-bold hover:text-[#707070]"
                          >
                            {subItem.name}
                          </Link>
                        </div>
                      ))}
                    </div>
                    <button
                      onClick={() => toggleCategory(item.id)}
                      className="text-[#ddc124] font-bold mt-2"
                    >
                      {expandedCategory === item.id ? "Скрыть" : "Показать еще"}
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </Container>
    </>
  );
}
