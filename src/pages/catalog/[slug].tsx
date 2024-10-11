/* eslint-disable @typescript-eslint/no-explicit-any */
import { Container } from "@/src/components/Container";
import fetchService from "@/src/services/fetch";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Catalog = () => {
  const router = useRouter();
  const { slug } = router.query;

  // Создаем состояние для хранения данных категории
  const [category, setCategory] = useState<any>(null);

  useEffect(() => {
    const fetchCategory = async () => {
      if (slug) {
        try {
          const response = await fetchService.getCategoryBySlug(slug);
          console.log(response.category);
          setCategory(response.category);
        } catch (error) {
          console.error("Ошибка при загрузке категории:", error);
        }
      }
    };

    fetchCategory();
  }, [slug]);

  if (!category) {
    return <div>Загрузка...</div>;
  }
console.log(category.products);
  return (
    <Container className="flex flex-col justify-between items-center text-center font-montserrat">
      <p className="w-full text-[#999999] font-[700] leading-[20px] flex flex-row text-start">
        <Link href="/" className="hover:border-b hover:border-[#999999]">
          Главная
        </Link>
        <span className="mx-2"> / </span>
        <span>Категория {category.name}</span>
      </p>

      <div className="w-full flex flex-col mt-9">
        <div className="w-full">
          <h1 className="text-[2rem] font-[800] text-center">{category.name}</h1>
        </div>
        <div className="w-full flex flex-wrap items-center justify-center gap-5 mt-5">
          {category.products.map((product: any) => (
            <div key={product.id} className="w-[200px]">
              <Link href={`/products/${product.slug}`}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-[200px] h-[200px] object-cover"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Catalog;
