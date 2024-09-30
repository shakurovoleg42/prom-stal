"use client";
import { usePathname } from "next/navigation";
import { Container } from "./Container";
import React from "react";

export default function Banner() {
  const pathname = usePathname();

  const whatPageBanner = () => {
    if (pathname === "/contacts") {
      return "Контакты";
    } else if (pathname === "/delivery") {
      return "Доставка";
    } else if (pathname === "/payment") {
      return "Оплата";
    } else if (pathname === "/about") {
      return "О компании";
    } else if (pathname === "/products") {
      return "Каталог";
    }
  };

  return (
    <div className="flex w-full max-h-[589px] bg-[url('/Banner.png')] bg-cover bg-center text-white mt-5">
      <Container className="text-left items-left py-[100px] justify-left">
        <h1 className="text-white text-[2rem] text-left leading-normal font-[700] lg:text-[85px]">
          {whatPageBanner()}
        </h1>
      </Container>
    </div>
  );
}
