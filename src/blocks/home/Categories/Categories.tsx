/* eslint-disable @next/next/no-img-element */
import { Container } from "@/src/components/Container";
import React from "react";

export default function Categories() {
  return (
    <Container>
      <div className=" text-[10px] leading-[10px] text-center mt-16">
        <h2 className="text-[#FFD700] text-[60px] leading-[60px] font-bold">Категории</h2>
        <div className="flex flex-wrap justify-between mt-8">
          <div className="flex items-center justify-center m-[10px] p-[10px] border border-1-[#eee] flex-[1_1_calc(25%-20px)] box-border">
            <div className="w-[50px] h-[50px] bg-[#e0e0e0] rounded-[50%] mr-[10px] mb-[50px]">
              <img src="1.svg" alt="" />
            </div>
            <div className="text-left text-[10px] leading-[10px]">
              <h3 className="text-[14px] font-bold mb-2 leading-[15px]">Черный металлопрокат</h3>
              <p className="mb-2">Трубный прокат</p>
              <p className="mb-2">Плоский прокат</p>
              <p className="mb-2">Фасонный прокат</p>
              <p className="mb-2">Сортовой прокат</p>
              <a href="#" className="text-[#ddc124] decoration-none font-bold">
                Показать еще
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center m-[10px] p-[10px] border border-1-[#eee] flex-[1_1_calc(25%-20px)] box-border">
            <div className="w-[50px] h-[50px] bg-[#e0e0e0] rounded-[50%] mr-[10px] mb-[50px]">
              <img src="2.svg" alt="" />
            </div>
            <div className="text-left text-[10px] leading-[10px]">
               <h3 className="text-[14px] font-bold mb-2 leading-[15px]">Специальные стали</h3>
              <p className="mb-2">Листы Hardox</p>
              <p className="mb-2">Кислотостойкие стали</p>
              <p className="mb-2">Пищевые стали</p>
              <p className="mb-2">Конструкционные стали</p>
              <a href="#" className="text-[#ddc124] decoration-none font-bold">
                Показать еще
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center m-[10px] p-[10px] border border-1-[#eee] flex-[1_1_calc(25%-20px)] box-border">
            <div className="w-[50px] h-[50px] bg-[#e0e0e0] rounded-[50%] mr-[10px] mb-[50px]">
              <img src="3.svg" alt="" />
            </div>
            <div className="text-left text-[10px] leading-[10px]">
               <h3 className="text-[14px] font-bold mb-2 leading-[15px]">Нержавеющий прокат</h3>
              <p className="mb-2">Нержавеющий трубопрокат</p>
              <p className="mb-2">Плоский нержавеющий прокат</p>
              <p className="mb-2">Фасонный нержавеющий прокат</p>
              <p className="mb-2">Сортовой нержавеющий прокат</p>
              <a href="#" className="text-[#ddc124] decoration-none font-bold">
                Показать еще
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center m-[10px] p-[10px] border border-1-[#eee] flex-[1_1_calc(25%-20px)] box-border">
            <div className="w-[50px] h-[50px] bg-[#e0e0e0] rounded-[50%] mr-[10px] mb-[50px]">
              <img src="4.svg" alt="" />
            </div>
            <div className="text-left text-[10px] leading-[10px]">
               <h3 className="text-[14px] font-bold mb-2 leading-[15px]">Цветной металлопрокат</h3>
              <p className="mb-2">Алюминиевый прокат</p>
              <p className="mb-2">Бериллиевый прокат</p>
              <p className="mb-2">Бронзовый прокат</p>
              <p className="mb-2">Ванадиевый прокат</p>
              <a href="#" className="text-[#ddc124] decoration-none font-bold">
                Показать еще
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center m-[10px] p-[10px] border border-1-[#eee] flex-[1_1_calc(25%-20px)] box-border">
            <div className="w-[50px] h-[50px] bg-[#e0e0e0] rounded-[50%] mr-[10px] mb-[50px]">
              <img src="5.svg" alt="" />
            </div>
            <div className="text-left text-[10px] leading-[10px]">
               <h3 className="text-[14px] font-bold mb-2 leading-[15px]">Благородные металлы</h3>
              <p className="mb-2">Золото</p>
              <p className="mb-2">Серебро</p>
              <p className="mb-2">Платина</p>
              <p className="mb-2">Палладий</p>
              <a href="#" className="text-[#ddc124] decoration-none font-bold">
                Показать еще
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center m-[10px] p-[10px] border border-1-[#eee] flex-[1_1_calc(25%-20px)] box-border">
            <div className="w-[50px] h-[50px] bg-[#e0e0e0] rounded-[50%] mr-[10px] mb-[50px]">
              <img src="6.svg" alt="" />
            </div>
            <div className="text-left text-[10px] leading-[10px]">
               <h3 className="text-[14px] font-bold mb-2 leading-[15px]">Редкоземельные металлы</h3>
              <p className="mb-2">Цирконий</p>
              <p className="mb-2">Скандий</p>
              <p className="mb-2">Лантан</p>
              <p className="mb-2">Церий</p>
              <a href="#" className="text-[#ddc124] decoration-none font-bold">
                Показать еще
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center m-[10px] p-[10px] border border-1-[#eee] flex-[1_1_calc(25%-20px)] box-border">
            <div className="w-[50px] h-[50px] bg-[#e0e0e0] rounded-[50%] mr-[10px] mb-[50px]">
              <img src="7.svg" alt="" />
            </div>
            <div className="text-left text-[10px] leading-[10px]">
               <h3 className="text-[14px] font-bold mb-2 leading-[15px]">Кабельная продукция</h3>
              <p className="mb-2">Связь</p>
              <p className="mb-2">Провода</p>
              <p className="mb-2">СИП</p>
              <p className="mb-2">Витая пара</p>
              <a href="#" className="text-[#ddc124] decoration-none font-bold">
                Показать еще
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center m-[10px] p-[10px] border border-1-[#eee] flex-[1_1_calc(25%-20px)] box-border">
            <div className="w-[50px] h-[50px] bg-[#e0e0e0] rounded-[50%] mr-[10px] mb-[50px]">
              <img src="8.svg" alt="" />
            </div>
            <div className="text-left text-[10px] leading-[10px]">
               <h3 className="text-[14px] font-bold mb-2 leading-[15px]">Сварочные материалы</h3>
              <p className="mb-2">Проволоки сварочные</p>
              <p className="mb-2">Электроды сварочные</p>
              <p className="mb-2">Флюс сварочный</p>
              <p className="mb-2">Присадочные прутки</p>
              <a href="#" className="text-[#ddc124] decoration-none font-bold">
                Показать еще
              </a>
            </div>
          </div>
          <div className="flex w-auto items-center justify-center m-[10px] p-[10px] border border-1-[#eee] flex-[1_1_calc(25%-20px)] box-border">
            <div className="w-[50px] h-[50px] bg-[#e0e0e0] rounded-[50%] mr-[10px] mb-[50px]">
              <img src="9.svg" alt="" />
            </div>
            <div className="text-left text-[10px] leading-[10px]">
               <h3 className="text-[14px] font-bold mb-2 leading-[15px]">Металл Китайский</h3>
              <p className="mb-2"></p>
              <a href="#" className="text-[#ddc124] decoration-none font-bold">
                Показать еще
              </a>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
