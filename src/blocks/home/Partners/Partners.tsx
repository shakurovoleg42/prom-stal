import { Container } from "@/src/components/Container";
import Image from "next/image";
import React from "react";

export default function Partners() {
  return (
    <Container>
      <div className="text-center m-0 px-5 mt-20">
        <h2 className="text-[#FFBC01] text-[2rem] leading-[60px] font-bold sm:text-[60px] font-montserrat">Наши партнёры</h2>
        <div className="flex justify-around flex-wrap  my-16">
            <Image width={260} height={228} src="image 2.svg" alt="partner" />
            <Image width={260} height={228} src="image 3.svg" alt="partner" />
            <Image width={260} height={228} src="image 4.svg" alt="partner" />
            <Image width={260} height={228} src="image 5.svg" alt="partner" />
        </div>
        <div className="flex justify-around flex-wrap  my-5">
            <Image width={260} height={228} src="image 7.svg" alt="partner" />
            <Image width={260} height={228} src="image 6.svg" alt="partner" />
            <Image width={260} height={228} src="image 8.svg" alt="partner" />
        </div>
      </div>
    </Container>
  );
}