/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
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
import fetchService from "@/src/services/fetch";
import { useSearchParams } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/src/components/ui/button";

interface Characteristic {
  name: string;
  values: string[];
}

interface Category {
  characteristics: Characteristic[];
}

export default function Products() {
  const router = useRouter();
  const { category } = router.query;
const {filters} = router.query

  const [products, setProducts] = useState<any>(null);
  const [pagination, setPagination] = useState<any>(null);
  const [characteristics, setCharacteristics] = useState<Category | any>(null);

  const searchParams = useSearchParams();
  // const page = +(searchParams.get("page") || 1);
  const hasFilters = () => {
    if (filters) {
      console.log("Filters:", filters);
      return filters;
    }
    return category;
  }
  useEffect(() => {
    const fetchCategory = async () => {
      try {
        // Убедимся, что `category` определен
        if (category) {
          const response = await fetchService.getCategoryBySlug(hasFilters());
  
          console.log("Category response:", response);
          if (response.subcategories.length < 0) {
            console.log("Category slug:", response.subcategories[0].slug);
            router.push({
              pathname: `/catalog/${response.subcategories[0].slug}`,
            });
          }
          setProducts(response.category.products);
          setPagination(response.pagination);
          setCharacteristics(response.characteristics);
        }
      } catch (error) {
        console.error("Ошибка при загрузке:", error);
      }
    };
  
    fetchCategory();
  }, [category, searchParams]); // Обновляем только при наличии category
  
  const BackButton = () => {
    const router = useRouter();
    const { filters, category } = router.query;
  
    console.log("Filters:", filters);
    console.log("Category:", category);
  
    if (filters || category) {
      return (
        <div className="flex w-full items-center ml-5 text-black my-6 " >
          <Button variant="default" onClick={() => router.back()}>
          <ChevronLeft />
          <span>Вернуться назад</span>
          </Button>
          
        </div>
      );
    }
  
    return null;
  };
  

  return (
    <>
      <Head>
        <title>А-Промсталь - Каталог</title>
      </Head>
      <Banner />
      <Container className="flex flex-col mt-6 font-montserrat">
        <p className="text-[#0A8C99] font-[700] leading-[20px] ml-5">
          <Link href="/" className="hover:border-b hover:border-[#0A8C99]">
            Главная
          </Link>
          <span> / </span>
          Каталог
        </p>
        <div className="flex justify-around flex-wrap mt-7">
          {catalogHeader.map((item) => (
            <div
              key={item.id}
              className="flex items-center mt-3 py-4 pl-4 pr-2 bg-[#E2E6ED] rounded-[10px]"
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
      <Container className="flex flex-col justify-between">
      <BackButton/>
        <div className="flex flex-col gap-4 lg:flex-row">
          
          <Filters characteristics={characteristics} category={category} />
          <ListProducts products={products} pagination={pagination} />
        </div>
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
