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
import SecondHeader from "./SecondHeader";

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

  return (
    <Container className="font-inter">
      <div className="flex flex-col justify-between items-center py-5 lg:flex-row">
        <div className="flex items-center">
          <Link href="/">
            <img src="/logo.svg" alt="Логотип" className="w-[100px] mr-2" />
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex border-none cursor-pointer bg-transparent justify-center items-center font-inter-bold font-bold mr-12  text-[13px]">
              <img
                src="/location.svg"
                alt="location"
                className="mr-2 w-[20px] "
              />
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
              <img src="/ru.svg" alt="flag" className="mr-2 w-[20px]" /> RU
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
        </div>
        <div className="mt-6 sm:mt-4 lg:mt-0">
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
            <form>
              <SheetContent className="flex flex-col items-center text-left sm:items-center">
                <SheetHeader>
                  <SheetTitle className="text-[2rem]">
                    Заказ в 1 клик
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col items-left gap-8 py-4 px-2">
                  <div className="flex flex-col items-center gap-4 sm:grid sm:grid-cols-4">
                    <Label htmlFor="product" className="text-left font-bold">
                      Товар
                    </Label>
                    <Input
                      id="product"
                      placeholder="Кабель силовой медный"
                      required
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4 sm:grid sm:grid-cols-4">
                    <Label htmlFor="count" className="text-left font-bold">
                      Количество
                    </Label>
                    <Input id="count" placeholder="20" required />
                  </div>
                  <div className="flex flex-col items-center gap-4 sm:grid sm:grid-cols-4">
                    <Label
                      htmlFor="phonenumber"
                      className="text-left font-bold"
                    >
                      Номер телефона
                    </Label>
                    <Input
                      id="phonenumber"
                      placeholder="+7 (___) ___-__-__"
                      required
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4 sm:grid sm:grid-cols-4">
                    <Label htmlFor="email" className="text-left font-bold">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="example@gmail.com"
                      required
                    />
                  </div>
                </div>
                <SheetFooter>
                  <SheetClose asChild>
                    <Button type="submit">Отправить</Button>
                  </SheetClose>
                </SheetFooter>
              </SheetContent>
            </form>
          </Sheet>
        </div>
      </div>

      <div className="relative w-full h-[3px] bg-transparent">
        <div className="absolute top-[-1px] left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#FFD66C] to-transparent"></div>
      </div>

      <SecondHeader />
    </Container>
  );
};

export default Header;
