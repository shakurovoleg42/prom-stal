/* eslint-disable @next/next/no-img-element */
import { Container } from "@/src/components/Container";
import React from "react";

export default function Partners() {
  return (
    <Container>
      <div className="text-center m-0 px-5 mt-20 justify-center">
        <h2 className="text-[#FFBC01] text-[2rem] leading-[60px] font-bold sm:text-[60px] font-montserrat">
          Наши партнёры
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-16">
          <a href="#">
            <img src="image 2.svg" alt="" />
          </a>
          <a href="#">
            <img src="image 3.svg" alt="" />
          </a>
          <a href="#">
            <img src="image 4.svg" alt="" />
          </a>
          <a href="#">
            <img src="image 5.svg" alt="" />
          </a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 justify-between gap-4 my-5">
          <a href="#" className="flex items-center justify-center">
            <img src="image 7.svg" alt="" />
          </a>
          <a href="#" className="flex items-center justify-center">
            <img src="image 6.svg" alt="" />
          </a>
          <a href="#" className="flex items-center justify-center">
            <img src="image 8.svg" alt="" />
          </a>
        </div>
      </div>
    </Container>
  );
}
