import Faq from "@/src/blocks/products/Faq";
import Payment from "@/src/blocks/products/Payment";
import SimilarProducts from "@/src/blocks/products/SimilarProducts";
import { Container } from "@/src/components/Container";
import Form from "@/src/components/Form/Form";
import { Button } from "@/src/components/ui/button";
import { Phone, Mail } from "lucide-react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function product() {
  return (
    <>
    <Head>
      <title>А-Промсталь - Продукт</title>
    </Head>
      <Container className="flex flex-col mt-6">
        <p className="text-[#999999] font-[700] leading-[20px] ">
          <Link href="/" className="hover:border-b hover:border-[#999999]">
            Главная
          </Link>
          <span className=""> / </span>
          Продукт
        </p>
      </Container>
      <Container className="w-full h-full flex flex-col items-center mt-5  mb-11">
        <div className="w-full flex flex-col pl-6 justify-center lg:flex-row justify-left">
          <Image
            src="/elektrosvarnye.png"
            width={250}
            height={250}
            alt="Фото товара"
          />
          <div className="flex flex-col ml-4">
            <div className="flex flex-col ">
              <h1 className="text-black text-[1.8rem] font-[700] leading-[30px] ">
                Штрипс нержавеющий шлифованный 4N+PE 1 мм AISI 202 в Астане
              </h1>
              <span className="text-[12px] font-bold text-center uppercase">
                Сроки доставки: от 1 дня
              </span>
            </div>
            {/* Характеристики */}
            <div className="max-w-[280px] flex flex-col  mt-8 ml-7">
              <div>
                <span className="font-bold text-[20px] text-[#262A31] leading-[17px] uppercase">
                  Характеристики
                </span>
              </div>
              <div className="flex flex-col">
                {dataChar.map((item) => (
                  <div key={item.id} className="flex flex-row">
                    <div className="flex items-center w-full">
                      <span className="text-[#999999] text-[15px] font-[400] leading-[12px]">
                        {item.name}
                      </span>
                      <span className="flex-grow border-b border-[#d2d3d3] mx-2"></span>
                      <span className="font-bold">{item.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Описание */}
        <div className="h-auto w-full mt-6 flex flex-col lg:flex-row">
          {/* Левая сторона */}
          <div className="h-auto flex flex-col">
            <div className="h-[200px] flex flex-col border border-1-[#d2d3d3] rounded-[10px] p-5">
              <div className="flex flex-row gap-5 items-center justify-between mb-2 uppercase ">
                <span className="font-bold">Цена по запросу</span>
                <Image src="/question.svg" width={12} height={12} alt="" />
              </div>
              <span className="max-h-1 flex-grow border-b border-[#d2d3d3] mx-2"></span>
              <div className="flex justify-around flex-wrap gap-2 mt-2">
                <Button
                  variant="contact"
                  className="text-[#FFD66C] uppercase text-[12px] font-bold"
                >
                  Узнать цену
                </Button>
                <Button className="bg-[#F5F7F8] text-[#FFD66C]">
                  <Phone size={16} style={{ fill: "#FFD66C" }} />
                </Button>
                <Button className="bg-[#F5F7F8] ">
                  <Mail size={17} style={{ fill: "#FFD66C" }} />
                </Button>
              </div>
            </div>

            <div className="flex flex-col gap-4 mt-16">
              <Button variant="tabs" className="w-full bg-transparent text-[#000]">Описание</Button>
              <Link href="/delivery">
                <Button variant="tabs" className="w-full bg-transparent text-[#000]">Доставка</Button>
              </Link>
              <Link href="#payment">
                <Button variant="tabs" className="w-full bg-transparent text-[#000]">Оплата</Button>
              </Link>
              <Link href="/#faq">
                <Button variant="tabs" className="w-full bg-transparent text-[#000]">Вопрос-ответ</Button>
              </Link>
              <Button variant="tabs" className="w-full bg-transparent text-[#000]">Аналоги</Button>
            </div>
          </div>
          {/* Правая сторона */}
          <div className="w-full h-full bg-[#0A8C99] text-white rounded-[10px] ml-0 z-50 lg:ml-[11px]">
            <div className="max-w-[768px] py-3 pl-4">
              <p className="text-[14px] leading-[16px] font-[400] h-full">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore aliquam corporis dolores aspernatur maxime perspiciatis eos nemo praesentium! Quisquam saepe dolores omnis? Quidem dolore maiores architecto fugit deserunt quos aspernatur?
                Minima ut adipisci, consequuntur autem voluptatum enim illum odit labore consequatur totam atque laborum sequi dolorum aperiam velit minus exercitationem provident nobis cumque. Asperiores accusantium libero sint ut sunt ipsam!
                Soluta quos dignissimos omnis, dolorem dicta labore corrupti eum minima ducimus quaerat et accusantium animi impedit deserunt praesentium, fugiat consectetur ad possimus beatae laboriosam ullam rem aliquid perspiciatis magni? Facere!
                Dolorem quibusdam eaque repellendus, delectus facilis consequatur libero velit iure veniam totam. Illo quasi commodi in? Distinctio corporis atque obcaecati alias in, minus quae repellendus, enim voluptas ea modi assumenda!
                Similique iusto corporis ipsam. Odit assumenda aliquam tempora magni? Aliquam, numquam! Quod excepturi consequuntur accusantium sequi incidunt, ex omnis blanditiis voluptas molestiae nemo libero, tempore quaerat harum iusto sit. Officiis.
                Ipsam quisquam ipsum magni eum, laudantium architecto ut minus repellendus neque magnam. Provident, quaerat, debitis voluptate neque qui a tempora quas commodi, sint quidem quam amet error consequatur fugiat voluptatem.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ea at asperiores labore repudiandae ratione voluptates ut adipisci aliquid, temporibus voluptatibus aut quaerat qui distinctio inventore magnam ullam earum. Inventore?
                Debitis, doloribus iste aliquam cupiditate officiis odio voluptatum laudantium impedit soluta nesciunt nostrum neque dolor illo, delectus error? Maxime ipsa nulla numquam aliquam dolores. Molestias blanditiis excepturi voluptate doloremque corrupti.
                Reiciendis dicta minima sed laudantium tenetur amet nemo assumenda, mollitia in cum tempore dolorem magnam cupiditate sapiente ad neque officia inventore natus suscipit. Sunt nulla placeat vero culpa nihil dolorum!
                Recusandae velit distinctio harum earum amet ducimus asperiores fugit sit nesciunt labore odio omnis, quo aspernatur hic quos eos, similique est illo aut nulla. Laudantium ut tenetur quo quibusdam deserunt.
                Voluptate ad pariatur illum culpa aspernatur ducimus animi, quidem deserunt. Quas, animi libero aut est a quos dolorem dolore doloremque. Natus aperiam amet assumenda provident tenetur velit omnis et adipisci.
                Cupiditate cum nulla quo iste aut deserunt sequi quos vero ex? Atque consequatur perferendis dolor velit deleniti consectetur hic, incidunt amet sapiente quo optio ratione ducimus. Neque qui atque unde?
                Quas, aliquam ipsum! Minima doloremque porro quis. Ad praesentium odit, illum aut totam aperiam, laboriosam facilis cumque, libero nesciunt soluta id architecto eligendi quidem harum ducimus assumenda eius magni consectetur.
                In impedit assumenda iste voluptas ipsam eos perspiciatis, fuga corporis minus non ad corrupti? Molestias qui autem facilis architecto reprehenderit nostrum fugit est eligendi, obcaecati quae animi, ratione nihil sed!
                Placeat nihil qui temporibus veniam commodi sequi. Molestias temporibus adipisci esse deserunt quod eos minus placeat omnis numquam, id nobis atque cum, necessitatibus ab ullam reprehenderit odit eveniet distinctio illo!
                Nisi, nesciunt porro. Ex libero odio, dignissimos non, modi officia, ipsa illum quos asperiores quasi est provident hic sit sint? Fuga debitis natus, corrupti nemo eveniet sequi qui tempora pariatur?
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae, placeat blanditiis voluptatibus dolorum nostrum facilis mollitia soluta enim quis, rem veniam ipsum commodi repudiandae incidunt aliquid, vel praesentium nobis harum.
                Non numquam deleniti asperiores veritatis iure minus qui nostrum, labore nihil optio aliquid iste? Maiores id minus accusamus facere voluptates error autem ratione impedit voluptate, doloremque corrupti aspernatur, repellat commodi?
                Expedita temporibus veniam quia velit vero aspernatur. Sit consectetur dolor, obcaecati omnis consequuntur, repudiandae aliquid, porro ipsam rem natus expedita nulla ducimus reprehenderit ipsum sapiente ex. Qui amet corporis distinctio?
              </p>
            </div>
          </div>
        </div>
      </Container>
      <Form />
      <Payment />
      <Faq/>
      <SimilarProducts/>
    </>
  );
}

const dataChar = [
  {
    id: 1,
    name: "Толщина",
    value: "1 мм",
  },
  {
    id: 2,
    name: "Вид поверхности",
    value: "4N+PE",
  },
  {
    id: 3,
    name: "Марка",
    value: "AISI 202",
  },
  {
    id: 4,
    name: "Тип",
    value: "шлифованный",
  },
];
