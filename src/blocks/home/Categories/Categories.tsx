/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { Container } from "@/src/components/Container";
import fetchService from "@/src/services/fetch";
import Link from "next/link";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetchService.getAllCategories();
      setCategories(
        response.flatMap((item: { subcategories: any }) => item.subcategories)
      );
    };

    fetchCategories();
  }, []);
  return (
    <Container>
      <div className=" text-[10px] leading-[10px] text-center mt-16 font-inter">
        <h2 className="text-[#FFBC01] text-[2rem] leading-[60px] font-bold sm:text-[60px]">
          Категории
        </h2>
        <div className="flex flex-wrap items-start mt-8">
          {categories.map((item: any) => (
            <div
              key={item.id}
              className="flex p-[10px]  flex-[1_1_calc(25%-20px)] box-border items-start min-w-[250px]"
            >
              <div className="rounded-[4px] mr-[10px] bg-[#F4F6F7]">
                <img
                  className="min-w-[52px] max-w-[52px] min-h-[52px] max-h-[52px] rounded-[8px] p-1"
                  src={item.image || "/no-image.jpg"}
                  alt="parts"
                />
              </div>
              <div className="text-left text-[0.8rem] leading-[13px] font-[500]">
                <h3 className="text-[1rem] font-[900] mb-2 leading-[20px]">
                  {item.name}
                </h3>
                {item.subcategories.slice(0, 4).map((subItem: any) => (
                  <div key={subItem.id} className="flex flex-col">
                    <Link
                      href={{
                        pathname: `/catalog/${subItem.slug}`,
                        query: { category: subItem.slug, name: subItem.name },
                      }}
                      className="mb-4 font-bold"
                    >
                      {subItem.name}
                    </Link>
                  </div>
                ))}
                <Link
                  href="#"
                  className="text-[#ddc124] decoration-none font-bold"
                >
                  Показать еще
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Categories;
