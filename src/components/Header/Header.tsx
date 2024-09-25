/* eslint-disable @next/next/no-img-element */
import "./styles.module.sass";
import React from "react";
import { Input } from "../ui/input";
import Link from "next/link";
const Header = () => {
  return (
    <>
      <div className="flex justify-between align-center p-5">
        <div className="flex align-center">
          <img src="/logo.svg" alt="Логотип" className="w-auto mr-2" />
          <button className="flex border-none cursor-pointer bg-transparent align-center uppercase font-inter-bold font-bold">
            <img src="/location.svg" alt="" className="mr-2 w-[20]" /> Астана
            <i className="arrow-down border-solid-"></i>
          </button>
          <button className="flex border-none cursor-pointer bg-transparent align-center uppercase font-inter-bold font-bold">
            <img src="/ru.svg" alt="" className="mr-2 w-[20]" /> RU
            <i className="arrow-down border border-black"></i>
          </button>
        </div>
        <div className="flex align-center">
          <div className="mr-[50px]">
            <Link href="tel:87080016868">
              <img
                src="/phone.svg"
                alt="phone"
                className="mr-2 w-[20] mr-[50px]"
              />
              <span>8(708)001-68-68</span>
            </Link>
          </div>
          <div className="mr-[50px]">
            <img
              src="/email.svg"
              alt="email"
              className="mr-2 w-[20] mr-[50px]"
            />
            <span>info@example.com</span>
          </div>
          <button className="request-btn">
            <img src="/request.svg" alt="" className="mr-2 w-[20]" /> Оставить
            заявку
          </button>
        </div>
      </div>

      <div className="divider"></div>

      <div className="header-bottom">
        <div className="flex align-center">
          <button>
            <img src="/catalog.svg" alt="" className="mr-2 w-[20]" /> Каталог
          </button>
          <div className="search-bar relative flex align-center">
            <Input type="text" placeholder="Найти товар" defaultValue="" className="ml-5 border-none outline-none"/>
            <img src="/search-icon.svg" alt="Лупа" className="mr-2 absolute left-[30px] h-[16px] w-[16px]" />
          </div>
        </div>
        <div className="flex align-center">
          <div className="flex">
            <button className="ml-5">Преимущества</button>
            <button className="ml-5">Продукция</button>
            <button className="ml-5">Вопросы</button>
            <button className="ml-5">Контакты</button>
            <button className="ml-5">
              <img src="/cart.svg" alt="" className="mr-2 w-[30]" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
