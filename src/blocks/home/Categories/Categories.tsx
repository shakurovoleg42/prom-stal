import { Container } from "@/src/components/Container";
import Image from "next/image";
import Link from "next/link";
import React from "react";
export default function Categories() {
  return (
    <Container>
      <div className=" text-[10px] leading-[10px] text-center mt-16 font-inter">
        <h2 className="text-[#FFBC01] text-[2rem] leading-[60px] font-bold sm:text-[60px]">Категории</h2>
        <div className="flex flex-wrap items-start mt-8">
          <div className="flex p-[10px]  flex-[1_1_calc(25%-20px)] box-border items-start min-w-[250px]">
            <div className="w-[50px] h-[50px]  rounded-[50%] mr-[10px] mb-[50px]">
              <Image width={52} height={52} src="/1.svg" alt="parts" />
            </div>
            <div className="text-left text-[0.8rem] leading-[13px] font-[500]">
              <h3 className="text-[1rem] font-bold mb-2 leading-[20px]">Черный металлопрокат</h3>
              <p className="mb-2">Трубный прокат</p>
              <p className="mb-2">Плоский прокат</p>
              <p className="mb-2">Фасонный прокат</p>
              <p className="mb-2">Сортовой прокат</p>
              <Link href="#" className="text-[#ddc124] decoration-none font-bold">
                Показать еще
              </Link>
            </div>
          </div>
          <div className="flex p-[10px]  flex-[1_1_calc(25%-20px)] box-border items-start min-w-[250px] ">
            <div className="w-[50px] h-[50px]  rounded-[50%] mr-[10px] mb-[50px]">
              <Image width={52} height={52} src="/2.svg" alt="parts" />
            </div>
            <div className="text-left text-[0.8rem] leading-[13px] font-[500]">
               <h3 className="text-[1rem] font-bold mb-2 leading-[20px]">Специальные стали</h3>
              <p className="mb-2">Листы Hardox</p>
              <p className="mb-2">Кислотостойкие стали</p>
              <p className="mb-2">Пищевые стали</p>
              <p className="mb-2">Конструкционные стали</p>
              <Link href="#" className="text-[#ddc124] decoration-none font-bold">
                Показать еще
              </Link>
            </div>
          </div>
          <div className="flex p-[10px]  flex-[1_1_calc(25%-20px)] box-border items-start min-w-[250px]">
            <div className="w-[50px] h-[50px]  rounded-[50%] mr-[10px] mb-[50px]">
              <Image width={52} height={52} src="/3.svg" alt="parts" />
            </div>
            <div className="text-left text-[0.8rem] leading-[13px] font-[500]">
               <h3 className="text-[1rem] font-bold mb-2 leading-[20px]">Нержавеющий прокат</h3>
              <p className="mb-2">Нержавеющий трубопрокат</p>
              <p className="mb-2">Плоский нержавеющий прокат</p>
              <p className="mb-2">Фасонный нержавеющий прокат</p>
              <p className="mb-2">Сортовой нержавеющий прокат</p>
              <Link href="#" className="text-[#ddc124] decoration-none font-bold">
                Показать еще
              </Link>
            </div>
          </div>
          <div className="flex p-[10px]  flex-[1_1_calc(25%-20px)] box-border items-start min-w-[250px]">
            <div className="w-[50px] h-[50px]  rounded-[50%] mr-[10px] mb-[50px]">
              <Image width={52} height={52} src="/4.svg" alt="parts" />
            </div>
            <div className="text-left text-[0.8rem] leading-[13px] font-[500]">
               <h3 className="text-[1rem] font-bold mb-2 leading-[20px]">Цветной металлопрокат</h3>
              <p className="mb-2">Алюминиевый прокат</p>
              <p className="mb-2">Бериллиевый прокат</p>
              <p className="mb-2">Бронзовый прокат</p>
              <p className="mb-2">Ванадиевый прокат</p>
              <Link href="#" className="text-[#ddc124] decoration-none font-bold">
                Показать еще
              </Link>
            </div>
          </div>
          <div className="flex p-[10px]  flex-[1_1_calc(25%-20px)] box-border items-start min-w-[250px]">
            <div className="w-[50px] h-[50px]  rounded-[50%] mr-[10px] mb-[50px]">
              <Image width={52} height={52} src="/5.svg" alt="parts" />
            </div>
            <div className="text-left text-[0.8rem] leading-[13px] font-[500]">
               <h3 className="text-[1rem] font-bold mb-2 leading-[20px]">Благородные металлы</h3>
              <p className="mb-2">Золото</p>
              <p className="mb-2">Серебро</p>
              <p className="mb-2">Платина</p>
              <p className="mb-2">Палладий</p>
              <Link href="#" className="text-[#ddc124] decoration-none font-bold">
                Показать еще
              </Link>
            </div>
          </div>
          <div className="flex p-[10px]  flex-[1_1_calc(25%-20px)] box-border items-start min-w-[250px]">
            <div className="w-[50px] h-[50px]  rounded-[50%] mr-[10px] mb-[50px]">
              <Image width={52} height={52} src="/6.svg" alt="parts" />
            </div>
            <div className="text-left text-[0.8rem] leading-[13px] font-[500]">
               <h3 className="text-[1rem] font-bold mb-2 leading-[20px]">Редкоземельные металлы</h3>
              <p className="mb-2">Цирконий</p>
              <p className="mb-2">Скандий</p>
              <p className="mb-2">Лантан</p>
              <p className="mb-2">Церий</p>
              <Link href="#" className="text-[#ddc124] decoration-none font-bold">
                Показать еще
              </Link>
            </div>
          </div>
          <div className="flex p-[10px]  flex-[1_1_calc(25%-20px)] box-border items-start min-w-[250px]">
            <div className="w-[50px] h-[50px]  rounded-[50%] mr-[10px] mb-[50px]">
              <Image width={52} height={52} src="/7.svg" alt="parts" />
            </div>
            <div className="text-left text-[0.8rem] leading-[13px] font-[500]">
               <h3 className="text-[1rem] font-bold mb-2 leading-[20px]">Кабельная продукция</h3>
              <p className="mb-2">Связь</p>
              <p className="mb-2">Провода</p>
              <p className="mb-2">СИП</p>
              <p className="mb-2">Витая пара</p>
              <Link href="#" className="text-[#ddc124] decoration-none font-bold">
                Показать еще
              </Link>
            </div>
          </div>
          <div className="flex p-[10px]  flex-[1_1_calc(25%-20px)] box-border items-start min-w-[250px]">
            <div className="w-[50px] h-[50px]  rounded-[50%] mr-[10px] mb-[50px]">
              <Image width={52} height={52} src="/8.svg" alt="parts" />
            </div>
            <div className="text-left text-[0.8rem] leading-[13px] font-[500]">
               <h3 className="text-[1rem] font-bold mb-2 leading-[20px]">Сварочные материалы</h3>
              <p className="mb-2">Проволоки сварочные</p>
              <p className="mb-2">Электроды сварочные</p>
              <p className="mb-2">Флюс сварочный</p>
              <p className="mb-2">Присадочные прутки</p>
              <Link href="#" className="text-[#ddc124] decoration-none font-bold">
                Показать еще
              </Link>
            </div>
          </div>
          <div className="flex p-[10px]  flex-[1_1_calc(25%-20px)] box-border items-start min-w-[250px]">
            <div className="w-[50px] h-[50px]  rounded-[50%] mr-[10px] mb-[50px]">
              <Image width={52} height={52} src="/9.svg" alt="parts" />
            </div>
            <div className="text-left text-[0.8rem] leading-[13px] font-[500]">
               <h3 className="text-[1rem] font-bold mb-2 leading-[20px]">Металл Китайский</h3>
              <p className="mb-2">Цирконий</p>
              <Link href="#" className="text-[#ddc124] decoration-none font-bold">
                Показать еще
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
