import { Button } from "@/src/components/ui/button";
import Image from "next/image";
import React from "react";
import { Phone, Mail } from "lucide-react";
import Link from "next/link";

export default function ListProducts() {
  const slug = "product";

  return (
    <div className="w-full flex flex-col border border-[#D3D6DB] rounded-[10px] ml-1 font-montserrat">
      {data.map((item) => (
        <div
          key={item.id}
          className="flex justify-around flex-wrap  border-b border-[#D3D6DB] pl-2 py-4"
        >
          <div className="flex flex-col items-center sm:flex-row sm:items-start ">
            <Image
              src="/elektrosvarnye.png"
              alt=""
              width={50}
              height={50}
              className="hidden sm:block"
            />
            <Image
              src="/elektrosvarnye.png"
              alt=""
              width={150}
              height={150}
              className="block sm:hidden"
            />
            <Link
              href={`/products/${slug}`}
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
}

const data = [
  {
    id: 1,
    name: "Стальная труба горячедеформированная неоцинкованная 165х5.5 мм Ст6сп ГОСТ Р",
  },
  {
    id: 2,
    name: "Цельнотянутая стальная труба горячедеформированная 121х19 мм 30ХМА ГОСТ 8731-74",
  },
  {
    id: 3,
    name: "Цельнотянутая стальная труба горячедеформированная 121х19 мм 30ХМА ГОСТ 8731-74",
  },
  {
    id: 4,
    name: "Цельнотянутая стальная труба горячедеформированная 121х19 мм 30ХМА ГОСТ 8731-74",
  },
  {
    id: 5,
    name: "Цельнотянутая стальная труба горячедеформированная 121х19 мм 30ХМА ГОСТ 8731-74",
  },
  {
    id: 6,
    name: "Цельнотянутая стальная труба горячедеформированная 121х19 мм 30ХМА ГОСТ 8731-74",
  },
  {
    id: 7,
    name: "Цельнотянутая стальная труба горячедеформированная 121х19 мм 30ХМА ГОСТ 8731-74",
  },
  {
    id: 8,
    name: "Цельнотянутая стальная труба горячедеформированная 121х19 мм 30ХМА ГОСТ 8731-74",
  },
  {
    id: 9,
    name: "Цельнотянутая стальная труба горячедеформированная 121х19 мм 30ХМА ГОСТ 8731-74",
  },
  {
    id: 10,
    name: "Цельнотянутая стальная труба горячедеформированная 121х19 мм 30ХМА ГОСТ 8731-74",
  },
  {
    id: 11,
    name: "Цельнотянутая стальная труба горячедеформированная 121х19 мм 30ХМА ГОСТ 8731-74",
  },
  {
    id: 12,
    name: "Цельнотянутая стальная труба горячедеформированная 121х19 мм 30ХМА ГОСТ 8731-74",
  },
  {
    id: 13,
    name: "Цельнотянутая стальная труба горячедеформированная 121х19 мм 30ХМА ГОСТ 8731-74",
  },
  {
    id: 14,
    name: "Цельнотянутая стальная труба горячедеформированная 121х19 мм 30ХМА ГОСТ 8731-74",
  },
  {
    id: 15,
    name: "Цельнотянутая стальная труба горячедеформированная 121х19 мм 30ХМА ГОСТ 8731-74",
  },
  {
    id: 16,
    name: "Цельнотянутая стальная труба горячедеформированная 121х19 мм 30ХМА ГОСТ 8731-74",
  },
  {
    id: 17,
    name: "Цельнотянутая стальная труба горячедеформированная 121х19 мм 30ХМА ГОСТ 8731-74",
  },
  {
    id: 18,
    name: "Цельнотянутая стальная труба горячедеформированная 121х19 мм 30ХМА ГОСТ 8731-74",
  },
  {
    id: 19,
    name: "Цельнотянутая стальная труба горячедеформированная 121х19 мм 30ХМА ГОСТ 8731-74",
  },
];
