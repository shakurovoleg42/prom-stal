"use client";
import { usePathname } from "next/navigation";
import { Container } from "./Container";
import React from "react";

// Функция для перевода текста с помощью API Deepl

const Banner: React.FC = () => {
  const pathname = usePathname();

  // Определение текста для заголовка в зависимости от пути
  const whatPageBanner = (): string => {
    if (pathname === "/contacts") {
      return "Контакты";
    } else if (pathname === "/delivery") {
      return "Доставка";
    } else if (pathname === "/payment") {
      return "Оплата";
    } else if (pathname === "/about") {
      return "О компании";
    } else if (pathname === "/catalog") {
      return "Каталог";
    } else if (pathname === "/posts") {
      return "Полезные статьи";
    }
    return ""; // Если не найдено, возвращаем пустую строку
  };

  return (
    <div className="flex w-full max-h-[589px] h-full bg-[url('/Banner.png')] bg-cover bg-center text-white mt-5 font-montserrat">
      <Container className="text-left items-left py-[100px] justify-left">
        <span className="text-white text-[2rem] text-left leading-normal font-[700] lg:text-[85px]">
          {whatPageBanner()}
        </span>
      </Container>
    </div>
  );
};

export default Banner;
