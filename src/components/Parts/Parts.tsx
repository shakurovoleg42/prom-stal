/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Container } from "../Container";

export default function Parts() {
  return (
    <Container className="mt-20 text-center items-center">
      <div className=" flex flex-col items-center">
        <h1 className="font-bold text-[60px] text-[#FFBC01]">Этапы работы</h1>
        <div className="flex flex-row mt-24 max-w-[857px]" >
          <img src="step01.png" alt="" />
          <div className="ml-12 text-left">
            <h2 className="font-bold text-[32px]">Заявка</h2>
            <p>
              Клиент отправляет запрос на приобретение металлопроката через наш
              веб-сайт, по электронной почте или по телефону. В заявке клиент
              указывает необходимый тип и количество товара, а также
              предпочтительные условия доставки и оплаты
            </p>
          </div>
        </div>
        <div className="flex flex-row mt-[90px] max-w-[857px]">
          <div className="mr-5 text-right">
            <h2 className="font-bold text-[32px] ">
              Консультация и уточнение деталей
            </h2>
            <p>
              Наш менеджер связывается с клиентом для уточнения деталей заказа,
              предоставляет консультацию по нашему ассортименту и помогает
              определить наиболее подходящие варианты товаров и услуг в
              соответствии с требованиями клиента
            </p>
          </div>
          <img src="step02.png" alt="" />
        </div>
        <div className="flex flex-row mt-[90px] max-w-[857px]">
          <img src="step03.png" alt="" />

          <div className="ml-5 text-left">
            <h2 className="font-bold text-[32px] ">
              Подготовка и согласование коммерческого предложения
            </h2>
            <p>
              На основе полученных данных мы подготавливаем коммерческое
              предложение, в котором указываем цены, условия доставки и оплаты.
              Предложение отправляется клиенту для согласования
            </p>
          </div>
        </div>
        <div className="flex flex-row mt-[90px] max-w-[857px]">
          <div className="mr-5 text-right">
            <h2 className="font-bold text-[32px] ">
              Оформление заказа и доставка
            </h2>
            <p>
              После согласования условий заказа клиент оформляет его,
              предоставляя необходимую информацию для выставления счета. После
              оплаты мы организуем доставку товара клиенту по указанному адресу,
              обеспечивая сохранность и своевременную поставку
            </p>
          </div>
          <img src="step04.png" alt="" />
        </div>
        <div className="flex flex-row mt-[90px] max-w-[857px]">
          <img src="step05.png" alt="" />

          <div className="ml-5 text-left">
            <h2 className="font-bold text-[32px] ">
              Получение товара клиентом и завершение сделки
            </h2>
            <p>
              Клиент получает заказанный металлопрокат, проверяет его на
              соответствие и качество. По завершении получения товара, мы
              предоставляем необходимые документы (накладную, счет-фактуру и т.
              д.) подтверждающие совершение сделки
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}