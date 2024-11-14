/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import {
  Sheet,
  SheetContent,
  SheetClose,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { Input } from "../ui/inputSearch";
import Image from "next/image";
import fetchService from "@/src/services/fetch";

export default function SecondHeader() {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const [categories, setCategories] = useState([]);
  const [hoveredCategory, setHoveredCategory] = useState<any>(null);
  const [hoveredSubcategory, setHoveredSubcategory] = useState<any>(null);
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

  const handleSubcategoryHover = (subcategory: any) => {
    setHoveredSubcategory(subcategory);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      subcategoryRef.current &&
      !subcategoryRef.current.contains(event.target as Node)
    ) {
      setHoveredCategory(null);
      setHoveredSubcategory(null); // Reset subcategory hover when clicking outside
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const pages = [
    {
      name: "Главная",
      href: "/",
    },
    {
      name: "О компании",
      href: "/about",
    },
    {
      name: "Преимущества",
      href: "/#regards",
    },
    {
      name: "Продукция",
      href: "/catalog",
    },
    {
      name: "Вопросы",
      href: "/#faq",
    },
    {
      name: "Оплата",
      href: "/payment",
    },
    {
      name: "Доставка",
      href: "/delivery",
    },
    {
      name: "Контакты",
      href: "/contacts",
    },
  ];

  return (
    <div className="mt-8 flex justify-between items-center py-5 relative">
      <div className="flex flex-col sm:items-center sm:flex-row text-black w-full">
        <Sheet>
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
              <SheetTitle className="text-[2rem] block pt-[20px] sm:mt-0 lg:hidden">
                {/* Перейти к: */}
              </SheetTitle>
            </SheetHeader>
            <div>
              <SheetClose asChild>
                <button
                  className=" w-[60vw] flex flex-row items-center lg:hidden text-[1.3rem]  font-bold  gap-2 bg-[#0b515a] text-white rounded-xl p-3"
                  onClick={() => router.push("/catalog")}
                >
                  <p className="">Каталог</p>
                  <ChevronRight />
                </button>
              </SheetClose>
            </div>
            <div className="flex flex-row text-black text-[1.4rem] bg-[#fcfcfc] h-full px-3 rounded-lg gap-3">
              {/* Основной блок категорий */}
              <div className=" w-[300px] flex-col gap-4 mt-6 ">
                <ul className="hidden lg:block flex-col gap-4">
                  {categories.map((category: any) => (
                    <li
                      key={category.id}
                      className="cursor-pointer font-[600] leading-normal  hover:bg-[#fdff77] hover:text-[#353535] rounded-lg py-4"
                      onMouseEnter={() => handleMouseEnter(category)}
                    >
                      <SheetClose asChild>
                        <Link
                          className="p-2"
                          href={`/catalog/${category.slug}`}
                        >
                          {category.name}
                        </Link>
                      </SheetClose>
                    </li>
                  ))}
                </ul>
                <ul className="flex bg-[fcfcfc] w-[100vw] lg:hidden flex-col gap-4 mt-6">
                  {pages.map((page: any) => (
                    <li
                      key={page.name}
                      className="cursor-pointer font-[600] leading-normal  hover:bg-[#fdff77] gap-4"
                    >
                      <SheetClose asChild>
                        <Link href={`${page.href}`}>{page.name}</Link>
                      </SheetClose>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Блок с подкатегориями справа */}
              <div className="flex-grow ml-8">
                {hoveredCategory && (
                  <div
                    ref={subcategoryRef}
                    className="w-auto h-full bg-white pt-5 px-5 rounded-lg"
                    style={{
                      maxHeight: "calc(100vh - 100px)",
                      overflowY: "auto",
                    }}
                  >
                    <h2 className="text-lg font-bold mb-4 border-b">
                      {hoveredCategory.name}
                    </h2>
                    <ul className="flex flex-col gap-4 text-[1.2rem] font-[500] w-auto">
                      {hoveredCategory.subcategories?.map(
                        (subcategory: any) => (
                          <li
                            key={subcategory.id}
                            className=" cursor-pointer hover:bg-[#fdff77] hover:text-[#353535] p-2 rounded-lg"
                            onMouseEnter={() =>
                              handleSubcategoryHover(subcategory)
                            } // Hover on subcategory
                          >
                            <SheetClose asChild>
                              <Link
                                href={`/catalog/${subcategory.slug}`}
                                className="flex flex-row items-center justify-between"
                              >
                                <span>{subcategory.name}</span>
                                <ChevronRight className="text-[25px]" />
                              </Link>
                            </SheetClose>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                )}
              </div>
              <div>
                {hoveredSubcategory &&
                  hoveredSubcategory.subcategories?.length > 0 && (
                    <div
                    ref={subcategoryRef}
                    className="w-auto h-full bg-white pt-5 px-5 rounded-lg"
                    style={{
                      maxHeight: "calc(100vh - 100px)",
                      overflowY: "auto",
                    }}
                  >
                      <h3 className="text-lg font-bold mb-4 border-b">
                        {hoveredSubcategory.name}
                      </h3>
                      <ul className="flex flex-col gap-4 text-[1.2rem] font-[500] w-auto">
                        {hoveredSubcategory.subcategories.map(
                          (nestedSubcategory: any) => (
                            <li
                              key={nestedSubcategory.id}
                              className="w-full cursor-pointer hover:bg-[#fdff77] hover:text-[#353535] p-2 rounded-lg"
                            >
                              <SheetClose asChild>
                              <Link
                                  href={`/catalog/${nestedSubcategory.slug}`}
                                  className="flex flex-row items-center justify-between"
                                  onMouseDown={() => {
                                    router.push(
                                      `/catalog/${nestedSubcategory.slug}`
                                    )
                                    return <SheetClose/>
                                  }}
                                >
                                  <span>{nestedSubcategory.name}</span>
                                  <ChevronRight className="text-[25px]" />
                                </Link>
                              </SheetClose>
                                
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  )}
              </div>
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
      <div className="hidden xl:flex items-center justify-center">
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
