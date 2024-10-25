/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import Faq from "@/src/blocks/products/Faq";
import Payment from "@/src/blocks/products/Payment";
import SimilarProducts from "@/src/blocks/products/SimilarProducts";
import { Container } from "@/src/components/Container";
import Form from "@/src/components/Form/Form";
import { Button } from "@/src/components/ui/button";
import fetchService from "@/src/services/fetch";

import { Phone, Mail } from "lucide-react";

interface Product {
  characteristics: any[];
  id: number;
  name: string;
  slug: string;
  image: string;
  description: string;
}

const Product = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const [similarProducts, setSimilarProducts] = useState<Product | null>(null);
  console.log(similarProducts)

  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    const fetchCategory = async () => {
      if (slug) {
        try {
          const response = await fetchService.getSingleProduct(slug);
          setProduct(response.product);
          setSimilarProducts(response.similar_products);

        } catch (error) {
          console.error("Ошибка при загрузке продукта:", error);
        }
      } else {
        return <div>Нет продукта по такому названию</div>;
      }
    };

    fetchCategory();
  }, [slug]);

  return (
    <>
      <Head>
        <title>А-Промсталь - Продукт</title>
      </Head>
      <Container className="flex flex-col mt-6  font-montserrat">
        <p className="text-[#999999] font-[700] leading-[20px] ml-5">
          <Link href="/" className="hover:border-b hover:border-[#999999]">
            Главная
          </Link>
          <span className=""> / </span>
          Продукт
        </p>
      </Container>
      <Container className="w-full h-full flex flex-col items-center mt-5  mb-11 font-montserrat">
        {product && (
          <div>
            <div className="w-full flex gap-5 flex-col items-center  lg:flex-row lg:justify-left lg:items-start">
              <div className="flex sm:items-start">
                <img
                  src={product.image || "/no-image.jpg"}
                  className="w-[250px] h-[250px]"
                  alt="Фото товара"
                />
              </div>

              <div className="flex flex-col ml-4">
                <div className="flex flex-col mt-5 lg:mt-0">
                  <h1 className="text-black text-[1.8rem] font-[700] leading-[30px] ">
                    {product.name}
                  </h1>
                  <span className="text-[12px] font-bold text-center uppercase mt-5">
                    Сроки доставки: от 1 дня
                  </span>
                </div>
                {/* Характеристики */}
                <div className="max-w-[480px] flex flex-col  mt-8 ml-2 px-5">
                  <div>
                    <span className="font-bold text-[20px] text-[#262A31] leading-[17px] uppercase">
                      Характеристики
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex flex-row">
                      <div className="flex flex-col w-full justify-between">
                        {product.characteristics.map(
                          (characteristic, index) => (
                            <div
                              key={index}
                              className="flex flex-row items-center text-start"
                            >
                              <span className="text-[#999999] text-[15px] font-[400] leading-[12px] text-start">
                                {characteristic.name}
                              </span>
                              <span className="flex-grow border-b border-[#d2d3d3] mx-2 text-end"></span>
                              <span className="font-bold text-end">
                                {characteristic.pivot.value}
                              </span>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Описание */}
            <div className="h-auto w-full mt-6 flex flex-col lg:flex-row gap-0 lg:gap-10">
              {/* Левая сторона */}
              <div className="h-auto flex flex-col">
                <div className="h-[200px] flex flex-col border border-1-[#d2d3d3] rounded-[10px] p-5">
                  <div className="flex flex-row gap-5 items-center justify-between mb-2 uppercase ">
                    <span className="font-bold">Цена по запросу</span>
                    <Image
                      src="/question.svg"
                      width={12}
                      height={12}
                      alt="information"
                    />
                  </div>
                  <span className="max-h-1 flex-grow border-b border-[#d2d3d3] mx-2"></span>
                  <div className="flex justify-around flex-wrap gap-2 mt-2">
                    <Button
                      variant="contact"
                      className="text-[#FFD66C] uppercase text-[12px] font-bold"
                    >
                      Узнать цену
                    </Button>
                    <Link href="tel:8(708)001-68-68">
                      <Button className="bg-[#F5F7F8] hover:bg-black  text-[#FFD66C]">
                        <Phone size={16} />
                      </Button>
                    </Link>
                    <Link href="mailto:aps168@yandex.kz">
                      <Button className="bg-[#F5F7F8] hover:bg-black text-[#FFD66C]">
                        <Mail size={17} />
                      </Button>
                    </Link>
                  </div>
                </div>
                <div className="flex flex-col gap-4 mt-16">
                  <Button
                    variant="tabs"
                    className="w-full bg-transparent text-[#000]"
                  >
                    Описание
                  </Button>
                  <Link href="/delivery">
                    <Button
                      variant="tabs"
                      className="w-full bg-transparent text-[#000]"
                    >
                      Доставка
                    </Button>
                  </Link>
                  <Link href="#payment">
                    <Button
                      variant="tabs"
                      className="w-full bg-transparent text-[#000]"
                    >
                      Оплата
                    </Button>
                  </Link>
                  <Link href="#faq">
                    <Button
                      variant="tabs"
                      className="w-full bg-transparent text-[#000]"
                    >
                      Вопрос-ответ
                    </Button>
                  </Link>
                  <Link href="#similar-products">
                    <Button
                      variant="tabs"
                      className="w-full bg-transparent text-[#000]"
                    >
                      Аналоги
                    </Button>
                  </Link>
                </div>
              </div>
              {/* Правая сторона */}
              <div className="w-full h-full bg-[#0A8C99] text-white rounded-[10px] ml-0 z-50 lg:ml-[11px] pl-4 ">
                <div className="max-w-[768px] py-3 ">
                  <p className="text-[14px] leading-[16px] font-[400] h-full pr-4 md:pr-0">
                    <div
                      dangerouslySetInnerHTML={{ __html: product.description }}
                    ></div>
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </Container>
      <Form />
      <Payment />
      <Faq />
      {/* similarProduct={similarProducts} */}
      <SimilarProducts />
    </>
  );
};

export default Product;