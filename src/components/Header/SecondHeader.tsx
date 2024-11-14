/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import Link from "next/link";
import { Input } from "../ui/inputSearch";
import Image from "next/image";
import fetchService from "@/src/services/fetch";

export default function SecondHeader() {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const [categories, setCategories] = useState([]);
  const [hoveredCategory, setHoveredCategory] = useState<any>(null);
  const subcategoryRef = useRef<HTMLDivElement>(null);

  const goToProduct = (query: string) => {
    router.push({
      pathname: "/search",
      query: { query },
    });
  };

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetchService.getAllCategories();
      setCategories(
        response.flatMap((item: { subcategories: any }) => item.subcategories)
      );
    };
    fetchCategories();
  }, []);

  const handleMouseEnter = (category: any) => {
    setHoveredCategory(category);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      subcategoryRef.current &&
      !subcategoryRef.current.contains(event.target as Node)
    ) {
      setHoveredCategory(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="mt-8 flex justify-between items-center py-5 relative">
      <div className="flex flex-col sm:items-center sm:flex-row text-black">
        <Sheet >
          <SheetTrigger className="flex items-center font-bold uppercase text-[14px] ml-5 mb-5 sm:mb-0 text-black">
            <img
              src="/catalog.svg"
              alt="burger menu"
              className="mr-2 w-[20px] text-[14px] border-1-black bg-white p-1 rounded-[5px]"
            />
            Каталог
          </SheetTrigger>
          <SheetContent
            side="top"
            className="flex flex-col items-start text-left w-full h-full"
          >
            <SheetHeader>
              <SheetTitle className="text-[2rem] border-b border-1-[#999999]">
                {/* Перейти к: */}
              </SheetTitle>
            </SheetHeader>
            <div className="flex flex-row text-black text-[1.4rem] bg-[#fcfcfc] h-full  px-3 rounded-lg">
              {/* Основной блок категорий */}
              <ul className="flex flex-col gap-4 mt-6">
                {categories.map((category: any) => (
                  <li
                    key={category.id}
                    className="cursor-pointer font-[600] leading-normal"
                    onMouseEnter={() => handleMouseEnter(category)}
                  >
                    {category.name}
                  </li>
                ))}
              </ul>

              {/* Блок с подкатегориями, который показывается рядом */}
              {hoveredCategory && (
                <div
                  ref={subcategoryRef}
                  className="ml-8 w-[250px] h-full bg-white  p-5 rounded-lg"
                  style={{ minHeight: "100vh" }}
                >
                  <h2 className="text-lg font-bold mb-4 border-b">{hoveredCategory.name}</h2>
                  <ul className="flex flex-col gap-2 text-[1.2rem] font-[500]">
                    {hoveredCategory.subcategories?.map((subcategory: any) => (
                      <li key={subcategory.id} className="cursor-pointer hover:text-[#c79f32]">
                        {subcategory.name}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </SheetContent>
        </Sheet>
        <div>
          <form
            action=""
            className="relative flex items-center bg-[#F5F7F8] py-3 pr-[8px] pl-[25px] rounded-[8px] ml-5"
            onSubmit={(e) => {
              e.preventDefault();
              goToProduct(search);
            }}
          >
            <Input
              type="text"
              placeholder="Найти товар"
              name="searchInput"
              defaultValue=""
              className="ml-5 border-none outline-none w-auto "
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className="flex items-center" type="submit">
              <Image
                src="/search-icon.svg"
                alt="Лупа"
                width={16}
                height={16}
                className="mr-2 absolute left-[15px] text-[14px] cursor-pointer"
              />
            </button>
          </form>
        </div>
      </div>
      <div className="hidden xl:flex items-center ">
        <div className="flex">
          <Link
            href="/#regards"
            className="ml-5 text-[14px] uppercase font-bold"
          >
            Преимущества
          </Link>
          <Link
            href="/catalog"
            className="ml-5 text-[14px] uppercase font-bold"
          >
            Продукция
          </Link>
          <Link href="/#faq" className="ml-5 text-[14px] uppercase font-bold">
            Вопросы
          </Link>
          <Link
            href="/contacts"
            className="ml-5 text-[14px] uppercase font-bold"
          >
            Контакты
          </Link>
        </div>
      </div>
    </div>
  );
}
