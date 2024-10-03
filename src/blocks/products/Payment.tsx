import { Container } from "@/src/components/Container";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Payment() {
  return (
    <Container  className="flex flex-col my-20 font-montserrat">
      <h3 id="payment" className="text-center font-bold text-[2rem] text-black">Оплата</h3>
      <div className="w-full flex items-center justify-around flex-wrap mt-16 gap-4">
        <div className="max-w-[360px] flex flex-col items-center text-center bg-[#0A8C99] rounded-[10px] p-4">
          <Image src="/fCard.svg" width={160} height={160} alt="" />
          <p className="text-[#F8F8F8] text-[22px] leading-[27px] font-[700] my-6">
            На расчетный счет
          </p>
          <p className="text-[10px] text-[#FFD66C] font-[700] max-w-[360px] break-words leading-[13px]  ">
            Оплата товара производится по выставленному на ИП или ООО счету - через офис Вашего банка или личный онлайн-кабинет. Для получения товара необходимо выслать платежное поручение с отметкой банка.
          </p>
        </div>
        <div className="max-w-[360px] flex flex-col items-center text-center bg-[#0A8C99] rounded-[10px] p-4">
          <Image src="/sCard.svg" width={160} height={160} alt="" />
          <p className="text-[#F8F8F8] text-[22px] leading-[27px] font-[700] my-6">
          Отсрочка платежа
          </p>
          <p className="text-[10px] text-[#FFD66C] font-[700] max-w-[360px] break-words leading-[13px]  ">
          Мы всегда готовы идти навстречу нашим клиентам. При заказе большого объема продукции оплата может быть осуществлена по факту получения груза.
          </p>
        </div>
        <div className="max-w-[360px] flex flex-col items-center text-center bg-[#0A8C99] rounded-[10px] p-4">
          <Image src="/tCard.svg" width={160} height={160} alt="" />
          <p className="text-[#F8F8F8] text-[22px] leading-[27px] font-[700] my-6">
          Способ оплаты
          </p>
          <p className="text-[10px] text-[#FFD66C] font-[700] max-w-[360px] break-words leading-[13px]  ">
          Уточнить характеристики товара, рассчитать стоимость доставки и договориться об ином способе оплаты Вы можете с экспертами наших коммерческих отделов.
          </p>
        </div>
      </div>
      <div className="mt-5 flex items-center justify-center">
      <Link href="/payment" className="underline hover:underline-offset-2">Узнать подробнее</Link>
      </div>
    </Container>
  );
}
