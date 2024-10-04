/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Container } from "../components/Container";
import Image from "next/image";
import Regards from "../components/Regards";
import Parts from "../blocks/about/Parts/Parts";
import Partners from "../components/Partners";
import ContactForm from "../components/ContactForm";
import Banner from "../components/Banner";
import Head from "next/head";

export default function about() {
  return (
    <>
    <Head>
      <title>А-Промсталь - Щ компании</title>
    </Head>
      <Banner />
      <Container className="mt-20 flex px-4 font-montserrat">
        <div className="flex flex-col text-left h-auto w-full">
          <div className="mt-5 max-w-[987px]">
            <p className="text-[#FFBC01] break-words text-[1.7rem] font-[700]  md:text-[35px]">
              Компания  <span className="text-[#284F52]">А-ПРОМСТАЛЬ</span>
               специализируется на продаже металлопроката различных видов и
              размеров
            </p>
          </div>
          <div className="mt-9 flex flex-col lg:flex-row">
            <p className="text-black text-[14px] leading-7 font-[600] md:text-[23px]">
              Мы предлагаем широкий ассортимент металлических изделий, в форме
              листов, прутков, труб и профилей. Наша продукция отличается
              высоким качеством и соответствием всем стандартам безопасности и
              нормам качества. Мы работаем как с крупными производственными
              предприятиями, так и с частными клиентами, обеспечивая каждого
              заказчика надежными и качественными материалами.
              Компания А-ПРОМСТАЛЬ также готова предложить услуги по доставке и
              резке металлопроката по индивидуальным потребностям клиента.
            </p>
            <Image
              src="/metal-lathe-operator.png"
              width={496}
              height={355}
              alt="paleth"
              className="hidden lg:block ml-5 rounded-[20px]"
            />
          </div>
        </div>
      </Container>
      <Regards />
      <Parts />
      <Partners />
      <Container className="flex flex-col items-center mb-12 mt-12">
        <h2 className="text-[#FFBC01] text-[1.7rem] font-[700]">
          Сертификаты соответствия
        </h2>
        <div className="flex flex-[1_1_calc(25%-20px)] items-center flex-wrap justify-around mt-8 gap-2 px-4">
          <Image src="/cer1.png" width={160} height={160} alt="" />
          <Image src="/cer2.png" width={160} height={160} alt="" />
          <Image src="/cer3.png" width={160} height={160} alt="" />
          <Image src="/cer4.png" width={160} height={160} alt="" />
          <Image src="/cer5.png" width={160} height={160} alt="" />
          <Image src="/cer6.png" width={160} height={160} alt="" />
          <Image src="/cer7.png" width={160} height={160} alt="" />
          <Image src="/cer8.png" width={160} height={160} alt="" />
          <Image src="/cer9.png" width={160} height={160} alt="" />
          <Image src="/cer10.png" width={160} height={160} alt="" />
        </div>
      </Container>
      <ContactForm />
    </>
  );
}
