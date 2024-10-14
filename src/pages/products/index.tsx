import React from "react";
import Banner from "../../components/Banner";
import { Container } from "../../components/Container";
import Filters from "@/src/blocks/products/Filters";
import ListProducts from "@/src/blocks/products/ListProducts";
import Partners from "@/src/components/Partners";
import Link from "next/link";
import ContactForm from "@/src/components/ContactForm";
import Image from "next/image";
import Head from "next/head";
import { useRouter } from "next/router";

export default function Products() {
  const router = useRouter();
  const { category } = router.query;
  console.log(category)

  return (
    <>
    <Head>
      <title>А-Промсталь - Каталог</title>
    </Head>
      <Banner />
      <Container className="flex flex-col mt-6 font-montserrat">
        <p className="text-[#0A8C99] font-[700] leading-[20px] ">
          <Link href="/" className="hover:border-b hover:border-[#0A8C99]">
            Главная
          </Link>
          <span className=""> / </span>
          Каталог
        </p>
        <div className="flex justify-around flex-wrap mt-7">
          {catalogHeader.map((item) => (
            <div
              key={item.id}
              className="flex items-center mt-3 py-4 pl-4 pr-1 bg-[#E2E6ED] rounded-[10px]"
            >
              <Image src={item.img} width={46} height={46} alt="certificate" />
              <span className="ml-3 max-w-[142px] text-[15px] leading-[19px] font-[700]">
                {item.title}
              </span>
            </div>
          ))}
        </div>
        <div className="relative w-full h-[3px] bg-transparent my-7">
          <div className="absolute top-[-1px] left-0 right-0 h-[8px] bg-gradient-to-r from-transparent via-[#0A8C99] to-transparent"></div>
        </div>
      </Container>
      <Container className="flex flex-col justify-between lg:flex-row ">
        <Filters />
        <ListProducts />
      </Container>
      <Container className="flex flex-col items-center justify-center mb-24 font-montserrat">
        <Partners />
        <h2 className="text-[#FFBC01] text-center text-[1.7rem] font-[700]">
          Сертификаты соответствия
        </h2>
        <div className="flex flex-[1_1_calc(25%-20px)] items-center flex-wrap justify-between mt-8 gap-2">
         <Image width={160} height={280} src="/cer1.png" alt="certificate" />
         <Image width={160} height={280} src="/cer2.png" alt="certificate" />
         <Image width={160} height={280} src="/cer3.png" alt="certificate" />
         <Image width={160} height={280} src="/cer4.png" alt="certificate" />
         <Image width={160} height={280} src="/cer5.png" alt="certificate" />
         <Image width={160} height={280} src="/cer6.png" alt="certificate" />
         <Image width={160} height={280} src="/cer7.png" alt="certificate" />
         <Image width={160} height={280} src="/cer8.png" alt="certificate" />
         <Image width={160} height={280} src="/cer9.png" alt="certificate" />
         <Image width={160} height={280} src="/cer10.png" alt="certificate" />
        </div>
      </Container>
      <ContactForm />
    </>
  );
}

const catalogHeader = [
  {
    id: 0,
    img: "/elektrosvarnye.png",
    title: "Электросварная стальная труба",
  },
  {
    id: 1,
    img: "/besshovnye.png",
    title: "Бесшовная стальная труба",
  },
  {
    id: 2,
    img: "/tonkostennye.png",
    title: "Тонкостенные стальные трубы",
  },
  {
    id: 3,
    img: "/tolstostennye.png",
    title: "Толстостенные стальные трубы",
  },
  {
    id: 4,
    img: "/truby-bolshogo-diametra.png",
    title: "Трубы большого диаметра",
  },
];
