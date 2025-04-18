/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="w-full flex flex-col bg-[#0A8C99] py-14 px-5 items-center justify-center text-white sm:flex-col xl:flex-row ">
      <div className="mb-5 px-9 footer-logo">
        <Link href="/">
          <Image
            src="/footer-logo.svg"
            alt="Логотип"
            width={260}
            height={144}
          />
        </Link>
      </div>

      <div className="flex flex-col mb-5 px-9 text-[18px] my-1 font-[500] ">
        <Link href="/catalog" className="hover:underline">
          Черный металлопрокат
        </Link>
        <Link href="/catalog" className="hover:underline">
          Специальные стали и сплавы
        </Link>
        <Link href="/catalog" className="hover:underline">
          Нержавеющий металлопрокат
        </Link>
        <Link href="/catalog" className="hover:underline">
          Цветной металлопрокат
        </Link>
        <Link href="/catalog" className="hover:underline">
          Запорно-регулирующая арматура
        </Link>
        <div className="flex flex-col mt-2">
          <Link
            href="mailto:APS168@yandex.kz"
            className="mt-2 font-[500] text-[21px] leading-[31.5px] hover:underline"
          >
            APS168@yandex.kz
          </Link>
          <Link
            href="tel:+7 771 425 8484"
            className="mt-2 font-[500] text-[24px] leading-[36px] hover:underline"
          >
            +7 771 425 8484
          </Link>
          <Link
            href="tel:+7 747 227 7906"
            className="mt-2 font-[500] text-[24px] leading-[36px] hover:underline"
          >
            +7 747 227 7906
          </Link>
        </div>
      </div>
      <div className="mb-5 px-9 mt-2">
        <h4 className="text-[21px] mb-3 font-[600]">Меню сайта</h4>
        <ul className="style-none p-0 m-0 text-[21px]">
          <li>
            <Link href="/" className="mb-1">
              Главная
            </Link>
          </li>
          <li>
            <Link href="/#regards" className="mb-1">
              Преимущества
            </Link>
          </li>
          <li>
            <Link href="/catalog" className="mb-1">
              Продукция
            </Link>
          </li>
          <li>
            <Link href="/#faq" className="mb-1">
              Вопросы
            </Link>
          </li>
          <li>
            <Link href="/contacts" className="mb-1">
              Контакты
            </Link>
          </li>
        </ul>
      </div>

      <div className="mb-5 sm:px-9 text-center">
        <h4 className="mb-3 text-[19px] font-[600]">Подписка на рассылку</h4>
        <form className="flex flex-col sm:flex-row items-center sm:rounded-[25px] overflow-hidden  sm:bg-white  text-black w-auto">
          <input
            type="email"
            placeholder="Электронная почта"
            className=" border-none rounded-[10px] p-[20px] sm:p-[10px] sm:rounded-l-[25px] sm:rounded-[8px] sm:rounded-tl-[25px] sm:rounded-tr-[0] sm:rounded-bl-[25px] text-[12px] outline-none bg-white "
          />
          <button
            className="mt-2  sm:mt-0 bg-[#284F52] text-white border-none py-[10px] px-[35px] rounded-[25px] text-12px cursor-pointer outline-none"
            type="submit"
          >
            Подписаться
          </button>
        </form>
      </div>
    </div>
  );
}
