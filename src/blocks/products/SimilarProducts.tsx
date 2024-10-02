import { Container } from "@/src/components/Container";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/src/components/ui/carousel";
import Image from "next/image";
import React from "react";

export default function SimilarProducts() {
  return (
    <Container className="flex items-center flex-col mb-20">
        <h3 className="text-[#FFBC01] text-[2rem] leading-[60px] font-bold sm:text-[60px]">Рекомендуемые товары</h3>
      <Carousel className="mt-20">
        
        <CarouselContent className=" flex items-center">
          <CarouselItem className="p-0 flex items-center justify-center basic-1/1 md:basis-1/2 lg:basis-1/3">
            <Image src="/cer1.png" width={213} height={219} alt="1"/>
          </CarouselItem>
          <CarouselItem className="p-0 flex items-center justify-center basic-1/1 md:basis-1/2 lg:basis-1/3">
            <Image src="/cer1.png" width={213} height={219} alt="1"/>
          </CarouselItem>
          <CarouselItem className="p-0 flex items-center justify-center basic-1/1 md:basis-1/2 lg:basis-1/3">
            <Image src="/cer1.png" width={213} height={219} alt="1"/>
          </CarouselItem>
          <CarouselItem className="p-0 flex items-center justify-center basic-1/1 md:basis-1/2 lg:basis-1/3">
            <Image src="/cer1.png" width={213} height={219} alt="1"/>
          </CarouselItem>
          <CarouselItem className="p-0 flex items-center justify-center basic-1/1 md:basis-1/2 lg:basis-1/3">
            <Image src="/cer1.png" width={213} height={219} alt="1"/>
          </CarouselItem>
          <CarouselItem className="p-0 flex items-center justify-center basic-1/1 md:basis-1/2 lg:basis-1/3">
            <Image src="/cer1.png" width={213} height={219} alt="1"/>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="hidden lg:block"/>
        <CarouselNext className="hidden lg:block"/>
      </Carousel>
    </Container>
  );
}
