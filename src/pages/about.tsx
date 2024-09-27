/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Container } from "../components/Container";
import Image from "next/image";
import Regards from "../components/Regards";
import Parts from "../blocks/about/Parts/Parts";
import Partners from "../components/Partners";
import ContactForm from "../components/ContactForm";

export default function about() {
  return (
    <>
    <div className="flex w-full max-h-[589px] bg-[url('/Banner.png')] bg-cover bg-center text-white mt-5">
      <Container className="text-left items-left py-[100px] justify-left">
        <h1 className="text-white text-[85px] text-left leading-normal font-[700]">
          О компании
        </h1>
      </Container>
    </div>
    <Container className="mt-20 flex">
      <div className="flex flex-col text-left h-auto">
        <div className="mt-5 w-[987px]">
          <p className="text-[#FFBC01] text-[35px] font-[700] leading-[40.95px]">
            Компания  <span className="text-[#284F52]">А-ПРОМСТАЛЬ</span>  специализируется на продаже металлопроката
            различных видов и размеров
          </p>
        </div>
        <div className="mt-9 flex flex-row">
          <p className="text-black text-[23px] leading-7 font-[600]">
            Мы предлагаем широкий ассортимент металлических изделий, в форме
            листов, прутков, труб и профилей. Наша продукция отличается высоким
            качеством и соответствием всем стандартам безопасности и нормам
            качества. Мы работаем как с крупными производственными
            предприятиями, так и с частными клиентами, обеспечивая каждого
            заказчика надежными и качественными материалами.
            Компания А-ПРОМСТАЛЬ также готова предложить услуги по доставке и
            резке металлопроката по индивидуальным потребностям клиента.
          </p>
          <Image src="/metal-lathe-operator.png" width={496} height={355} alt="paleth" className="ml-5 rounded-[20px]"/>
        </div>
      </div>
    </Container>
    <Regards/>
    <Parts/>
    <Partners />
    <ContactForm />
    </>
    
    
  );
}
