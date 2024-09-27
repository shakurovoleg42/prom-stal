import { Container } from "@/src/components/Container";
import { Button } from "@/src/components/ui/button";
import Image from "next/image";
import React from "react";
export default function About() {
  return (
    <Container className="mt-20 flex flex-row items-center">
      <div className="">
        <Image src="/guy.png" width={561} height={565} alt="guy" />
      </div>
      <div className="flex flex-col max-w-[545px] ml-[54px] text-left h-auto">
        <h2 className="text-[60px] font-[700] leading-[109px] text-[#FFBC01]">
          О нас
        </h2>
        <div className="mt-5">
          <p className="text-[#284F52] text-[22px] font-[700] leading-7">
            Компания А-ПРОМСТАЛЬ специализируется на продаже металлопроката
            различных видов и размеров
          </p>
        </div>
        <div className="mt-9">
          <p className="text-black leading-7">
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
        <Button variant="contact" className="w-[141px] mt-9">Подробнее</Button>
      </div>
    </Container>
  );
}
