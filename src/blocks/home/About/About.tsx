import { Container } from "@/src/components/Container";
import { Button } from "@/src/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
export default function About() {
  return (
    <Container className="mt-20 flex flex-row items-center font-montserrat">
      <div className="">
        <Image src="/guy.png" width={561} height={565} alt="guy" className="hidden xl:block"/>
      </div>
      <div className="flex flex-col max-w-[545px] text-left h-auto md:ml-[54px] px-2 sm:px-0">
        <h2 className="text-[2rem] font-[700] leading-[60px] text-[#FFBC01] sm:text-[60px]">
          О нас
        </h2>
        <div className="mt-5">
          <p className="text-[#284F52] text-[16px] font-[700] leading-7 sm:text-[22px]">
            Компания А-ПРОМСТАЛЬ специализируется на продаже металлопроката
            различных видов и размеров
          </p>
        </div>
        <div className="mt-9">
          <p className="text-black text-[12px] leading-7 sm:text-[18px]">
            Мы предлагаем широкий ассортимент металлических изделий, в форме
            листов, прутков, труб и профилей. Наша продукция отличается высоким
            качеством и соответствием всем стандартам безопасности и нормам
            качества. Мы работаем как с крупными производственными
            предприятиями, так и с частными клиентами, обеспечивая каждого
            заказчика надежными и качественными материалами.
            Компания А-ПРОМСТАЛЬ также готова предложить услуги по доставке и
            резке металлопроката по индивидуальным потребностям клиента.
          </p>
        </div>
        <div className="w-full flex items-center justify-center sm:items-start">
        <Button variant="contact" className="w-[141px] mt-9"><Link href="/about">Подробнее</Link></Button>
        </div>
      </div>
    </Container>
  );
}
