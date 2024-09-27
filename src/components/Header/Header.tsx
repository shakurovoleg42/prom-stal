/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Input } from "../ui/inputSearch";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { Container } from "../Container";

const Header = () => {
  return (
    <Container>
      <div className="flex justify-between items-center py-5">
        <div className="flex items-center">
          <Link href="/">
            <img src="/logo.svg" alt="Логотип" className="w-[100px] mr-2" />
          </Link>
          <button className="flex border-none cursor-pointer bg-transparent justify-center items-center font-inter-bold font-bold mr-12  text-[13px]">
            <img src="/location.svg" alt="" className="mr-2 w-[20px]" /> Астана
            <ChevronDown />
          </button>
          <button className="flex border-none cursor-pointer bg-transparent justify-center items-center uppercase font-inter-bold font-bold mr-12 text-[13px]">
            <img src="/ru.svg" alt="" className="mr-2 w-[20px]" /> RU
            <ChevronDown />
          </button>
        </div>
        <div className="flex items-center">
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
          <Link href="#">
            <button className="mr-[50px] text-[12px] flex items-center font-bold py-1 px-5 bg-[#F5F7F8] rounded-[6px]">
              <img src="/request.svg" alt="" className="mr-2 w-[20px]" />
              Оставить заявку
            </button>
          </Link>
        </div>
      </div>

      <div className="relative w-full h-[3px] bg-transparent">
        <div className="absolute top-[-1px] left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#FFD66C] to-transparent"></div>
      </div>

      <div className="mt-8 flex justify-between items-center py-5">
        <div className="flex items-center">
          <button className="flex items-center font-bold uppercase text-[14px]">
            <img
              src="/catalog.svg"
              alt=""
              className="mr-2 w-[20px] text-[14px]"
            />
            Каталог
          </button>
          <div className="relative flex items-center bg-[#F5F7F8] py-3 pr-[8px] pl-[25px] rounded-[8px] ml-12">
            <Input
              type="text"
              placeholder="Найти товар"
              defaultValue=""
              className="ml-5 border-none outline-none"
            />
            <img
              src="/search-icon.svg"
              alt="Лупа"
              className="mr-2 absolute left-[15px] h-[16px] w-[16px] text-[14px]"
            />
          </div>
        </div>
        <div className="flex items-center">
          <div className="flex">
            <button className="ml-5 text-[14px] uppercase font-bold">
              Преимущества
            </button>
            <button className="ml-5 text-[14px] uppercase font-bold">
              Продукция
            </button>
            <button className="ml-5 text-[14px] uppercase font-bold">
              Вопросы
            </button>
            <button className="ml-5 text-[14px] uppercase font-bold">
              Контакты
            </button>
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
