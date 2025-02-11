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
    <div className="flex w-full h-auto min-h-[589px] bg-[url('/Banner.png')] bg-cover bg-center text-white mt-5 font-montserrat">
      <Container className="items-left py-[100px] flex items-center text-center">
        <span className="text-white text-[2rem] leading-normal font-[700] lg:text-[56px] flex text-center">
          {whatPageBanner()}
        </span>
      </Container>
    </div>
  );
};

export default Banner;
