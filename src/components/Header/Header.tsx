/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Input } from "../ui/input";
import Link from "next/link";
import { Button } from "@/src/components/ui/button";
import { Label } from "@/src/components/ui/label";
import { ChevronDown } from "lucide-react";
import { Container } from "../Container";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/src/components/ui/dropdown-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/src/components/ui/sheet";
import Image from "next/image";

const Header = () => {
  const langs = [
    {
      name: "Русский",
      code: "ru",
    },
    {
      name: "English",
      code: "en",
    },
    {
      name: "Қазақ",
      code: "kk",
    },
  ];

  const cities = [
    {
      name: "Алматы",
      code: "almaty",
    },
    {
      name: "Астана",
      code: "astana",
    },
    {
      name: "Актау",
      code: "Aktau",
    },
  ];

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
      href: "/products",
    },
    {
      name: "Вопросы",
      href: "/#faq",
    },
    {
      name: "Контакты",
      href: "/contacts",
    },
  ];

  return (
    <Container className="font-inter">
      <div className="flex flex-col justify-between items-center py-5 lg:flex-row">
        <div className="flex items-center">
          <Link href="/">
            <img src="/logo.svg" alt="Логотип" className="w-[100px] mr-2" />
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex border-none cursor-pointer bg-transparent justify-center items-center font-inter-bold font-bold mr-12  text-[13px]">
              <img src="/location.svg" alt="" className="mr-2 w-[20px] " />
              Астана
              <ChevronDown />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuSeparator />
              {cities.map((cities) => (
                <DropdownMenuItem key={cities.code}>
                  <b className="hover:bg-[#f7f7f7] cursor-pointer p-2 rounded-[8px]">
                    {cities.name}
                  </b>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex border-none cursor-pointer bg-transparent justify-center items-center uppercase font-inter-bold font-bold mr-12 text-[13px]">
              <img src="/ru.svg" alt="" className="mr-2 w-[20px]" /> RU
              <ChevronDown />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuSeparator />
              {langs.map((lang) => (
                <DropdownMenuItem key={lang.code}>
                  <b className="hover:bg-[#f7f7f7] cursor-pointer p-2 rounded-[8px]">
                    {lang.name}
                  </b>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="hidden sm:flex items-center sm:mt-5 lg:mt-0">
          <div>
            <Link
              href="tel:87080016868"
              className="mr-[50px] text-[12px] flex items-center"
            >
              <img src="/phone.svg" alt="phone" className="w-[20px] mr-2" />
              <b>8(708)001-68-68</b>
            </Link>
          </div>
          <div>
            <Link
              href="mailto:info@example.com"
              className="mr-[50px] text-[12px] flex items-center"
            >
              <img src="/email.svg" alt="email" className="w-[20px] mr-2" />
              <b>info@example.com</b>
            </Link>
          </div>
          <Sheet>
            <SheetTrigger
              asChild
              className="mr-[50px] text-[12px] flex items-center font-bold py-1 px-5 bg-[#F5F7F8] rounded-[6px]"
            >
              <button>
                <Image
                  src="/request.svg"
                  alt="Request"
                  width={20}
                  height={20}
                  className="mr-2"
                />
                Оставить заявку
              </button>
            </SheetTrigger>
            <SheetContent className="flex flex-col items-start text-left">
              <SheetHeader>
                <SheetTitle className="text-[2rem]">Заказ в 1 клик</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col items-left gap-8 py-4 px-2">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="product" className="text-left">
                    Товар
                  </Label>
                  <Input
                    id="name"
                    placeholder="Кабель силовой медный"
                    className="col-span-3 py-7 px-2 border border-1-black"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="username" className="text-left">
                    Количество
                  </Label>
                  <Input
                    id="username"
                    placeholder="20"
                    className="col-span-3 py-7 px-2 border border-1-black"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="username" className="text-left">
                    Номер телефона
                  </Label>
                  <Input
                    id="username"
                    placeholder=""
                    className="col-span-3 py-7 px-2 border border-1-black"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="username" className="text-left">
                    Email
                  </Label>
                  <Input
                    id="username"
                    placeholder="example@gmail.com"
                    className="col-span-3 py-7 px-2 border border-1-black"
                  />
                </div>
              </div>
              <SheetFooter>
                <SheetClose asChild>
                  <Button type="submit">Отправить</Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      <div className="relative w-full h-[3px] bg-transparent">
        <div className="absolute top-[-1px] left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#FFD66C] to-transparent"></div>
      </div>

      <div className="mt-8 flex justify-between items-center py-5">
        <div className="flex flex-col sm:items-center sm:flex-row">
          <Sheet>
            <SheetTrigger className="flex items-center font-bold uppercase text-[14px] ml-5 mb-5 sm:mb-0">
              <img
                src="/catalog.svg"
                alt=""
                className="mr-2 w-[20px] text-[14px] border-1-black bg-white p-1 rounded-[5px]"
              />
              Каталог
            </SheetTrigger>
            <SheetContent
              side="left"
              className="flex flex-col items-start text-left"
            >
              <SheetHeader>
                <SheetTitle className="text-[2rem] border-b border-1-[#999999]">
                  Перейти к:
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col mt-12 gap-2">
                {pages.map((page) => (
                  <SheetClose asChild key={page.name}>
                    <Link
                      href={page.href}
                      className="hover:bg-[#f7f7f7] cursor-pointer p-2 rounded-[8px] text-[22px]"
                    >
                      <b>{page.name}</b>
                    </Link>
                  </SheetClose>
                ))}
              </div>
            </SheetContent>
          </Sheet>

          <div className="relative flex items-center bg-[#F5F7F8] py-3 pr-[8px] pl-[25px] rounded-[8px] ml-12">
            <Input
              type="text"
              placeholder="Найти товар"
              defaultValue=""
              className="ml-5 border-none outline-none w-auto"
            />
            <Image
              src="/search-icon.svg"
              alt="Лупа"
              width={16}
              height={16}
              className="mr-2 absolute left-[15px] text-[14px]"
            />
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
              href="/products"
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
            <button className="ml-5 text-[14px] uppercase font-bold">
              <img src="/cart.svg" alt="" className="mr-2 w-[30px]" />
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Header;
