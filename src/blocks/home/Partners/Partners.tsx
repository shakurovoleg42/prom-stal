/* eslint-disable @next/next/no-img-element */
import { Container } from "@/src/components/Container";
import React from "react";

export default function Partners() {
  return (
    <Container>
      <div className="text-center m-0 px-5 mt-20">
        <h1 className="text-[#FFBC01] text-[60px] leading-[60px] font-bold">Наши партнёры</h1>
        <div className="flex justify-around my-16">
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
        <div className="flex justify-around my-5">
          <a href="#">
            <img src="image 7.svg" alt="" />
          </a>
          <a href="#">
            <img src="image 6.svg" alt="" />
          </a>

          <a href="#">
            <img src="image 8.svg" alt="" />
          </a>
        </div>
      </div>
    </Container>
  );
}