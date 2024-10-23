/* eslint-disable @typescript-eslint/no-unused-vars */
import { Container } from "@/src/components/Container";
import { Button } from "@/src/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/src/components/ui/carousel";
import Image from "next/image";
// import Image from "next/image";
import React from "react";

export default function SimilarProducts() {

  return (
    <Container className="flex items-center flex-col mb-20 font-montserrat">
      <h3 className="text-[#FFBC01] text-center text-[2rem] leading-[60px] font-bold sm:text-[60px]">
        Рекомендуемые товары
      </h3>
      <Carousel id="similar-products" className="mt-20 w-full">
        <CarouselContent className=" flex items-center gap-4">
          <CarouselItem className="max-w-[260px] p-0 flex items-center justify-center basis-1/2 lg:basis-1/3">
          
            <div className="flex flex-col items-center justify-center px-0">
              <div className="items-center sm:flex sm:items-start">
              <Image src="/elektrosvarnye.png" width={214} height={219} alt="1" />
              </div>
              <p className="text-black text-[18px] font-[700] leading-[19.3px] text-left mt-5">
                Штрипс нержавеющий шлифованный 4N+PE 1 мм AISI 202 в Астане
              </p>
              <div className="w-full flex flex-col mt-2 break-words">
                {dataChar.map((item) => (
                  <div key={item.id} className="flex flex-row w-full">
                    <div className="flex items-center w-full">
                      <span className="text-[#999999] text-[13px] font-[400] leading-[14px]">
                        {item.name}
                      </span>
                      <span className="flex-grow border-b border-[#d2d3d3] mx-2"></span>
                      <span className="font-bold text-[13px] leading-[14px] text-[#262A31]">
                        {item.value}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <div className=" w-full flex items-left text-left mt-3">
                <span className="flex text-[15px] text-[#989898] font-[400] text-left ">
                  В наличии
                </span>
              </div>
              <div className="w-full flex justify-around flex-wrap lg:justify-between items-center">
                <b className="text-[19px] font-[700] text-[#000000]">275 625 ₸</b>
                <Button variant="contact" className="text-[#FFD66C] py-1 px-3 font-bold">Купить</Button>
              </div>
            </div>
          </CarouselItem>
          
          
          
        </CarouselContent>
        <CarouselPrevious className="hidden lg:block" />
        <CarouselNext className="hidden lg:block" />
      </Carousel>
    </Container>
  );
}

const dataChar = [
  {
    id: 1,
    img: "/elektrosvarnye.png",
    title: "Штрипс нержавеющий шлифованный 4N+PE 1 мм AISI 202 в Астане",
    name: "Толщина",
    value: "1 мм",
  },
  {
    id: 2,
    name: "Вид поверхности",
    value: "4N+PE",
  },
  {
    id: 3,
    name: "Марка",
    value: "AISI 202",
  },
  {
    id: 4,
    name: "Тип",
    value: "шлифованный",
  },
];
