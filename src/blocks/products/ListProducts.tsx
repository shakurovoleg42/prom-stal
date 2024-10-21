/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/src/components/ui/button";
import React from "react";
import { Phone, Mail } from "lucide-react";
import Link from "next/link";

interface Product {
  id: number;
  name: string;
  slug: string;
  image: string;
}

interface ListProductsProps {
  products?: Product[];
}

const ListProducts: React.FC<ListProductsProps> = ({ products = [] }) => {
  if (!Array.isArray(products) || products.length === 0) {
    return <div>Загрузка...</div>;
  }

  return (
    <div className="w-full flex flex-col border border-[#D3D6DB] rounded-[10px] ml-1 font-montserrat">
      {products.map((item: Product) => (
        <div
          key={item.id}
          className="flex justify-around flex-wrap border-b border-[#D3D6DB] pl-2 py-4"
        >
          <div className="w-auto lg:min-w-[612px] flex flex-col items-center sm:flex-row sm:items-start ">
            <img
              src={item.image || "/elektrosvarnye.png"}
              alt={item.name}
              className="hidden sm:block sm:w-[50px] sm:h-[50px]"
            />
            <img
              src={item.image || "/elektrosvarnye.png"}
              alt={item.name}
              className="block w-[150px] h-[150px] sm:hidden"
            />
            <Link
              href={{
                pathname: `/products/${item.slug}`,
                query: { category: item.slug },
              }}
              className="max-w-[550px] mt-6 sm:mt-0 ml-2 md:ml-3 text-[12px] text-[#6F727B] font-[700] leading-[14px] hover:underline hover:underline-offset-2 hover:text-[#0A8C99]"
            >
              {item.name}
            </Link>
          </div>
          <Button variant="seePrice" className="mt-2 sm:mt-0">
            узнать цену
          </Button>
          <Link href="tel:8(708)001-68-68">
            <Button variant="contact" className="text-[#FFD66C] mt-2 sm:mt-0">
              <Phone size={20} />
            </Button>
          </Link>
          <Link href="mailto:aps168@yandex.kz">
            <Button variant="contact" className="text-[#FFD66C] mt-2 sm:mt-0">
              <Mail size={20} />
            </Button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ListProducts;
