/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  Sheet,
  // SheetClose,
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

  const goToProduct = (query: string) => {
    router.push({
      pathname: "/search",
      query: { query },
    });
  };

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetchService.getAllCategories();
      console.log(response);
      setCategories(
        response.flatMap((item: { subcategories: any }) => item.subcategories)
      );
    };

    fetchCategories();
  }, []);

  // const pages = [
  //   {
  //     name: "Главная",
  //     href: "/",
  //   },
  //   {
  //     name: "О компании",
  //     href: "/about",
  //   },
  //   {
  //     name: "Преимущества",
  //     href: "/#regards",
  //   },
  //   {
  //     name: "Продукция",
  //     href: "/catalog",
  //   },
  //   {
  //     name: "Вопросы",
  //     href: "/#faq",
  //   },
  //   {
  //     name: "Оплата",
  //     href: "/payment",
  //   },
  //   {
  //     name: "Доставка",
  //     href: "/delivery",
  //   },
  //   {
  //     name: "Контакты",
  //     href: "/contacts",
  //   },
  // ];

  return (
    <div className="mt-8 flex justify-between items-center py-5">
      <div className="flex flex-col sm:items-center sm:flex-row text-black">
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
              <SheetTitle className="text-[2rem] border-b border-1-[#999999]">
                {/* Перейти к: */}
              </SheetTitle>
            </SheetHeader>
            <div className="flex flex-col text-black text-[1.4rem] bg-[#fcfcfc] h-full py-6 px-3 rounded-lg">
              <ul className="flex flex-col gap-4">
                {categories.map((category: any) => (
                  <li key={category.id} className="cursor-pointer font-[600] leading-mormal ">
                    {category.name}
                  </li>
                ))}
              </ul>
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
          {/* <button className="ml-5 text-[14px] uppercase font-bold">
            <img src="/cart.svg" alt="cart" className="mr-2 w-[30px]" />
          </button> */}
        </div>
      </div>
    </div>
  );
}
