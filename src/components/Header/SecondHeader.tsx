import React from 'react'
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet'
import Link from 'next/link'
import { Input } from '../ui/input'
import Image from 'next/image'

export default function SecondHeader() {

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

          <div className="relative flex items-center bg-[#F5F7F8] py-3 pr-[8px] pl-[25px] rounded-[8px] ml-5">
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
  )
}
