import React from "react";
import { Input } from "../ui/inputForm";
import { Button } from "../ui/button";
import { Container } from "../Container";

export default function Form() {
  return (
    <div className="flex w-full h-[589px] bg-[url('/fon1.png')] bg-cover bg-center justify-center items-center text-white mt-5">
      <Container className="">
        <div className="flex flex-col bg-[#FFFFFF] p-8 rounded-[10px] max-w-[540px] h-auto text-left items-start">
          <h1 className="text-[#182F43] font-bold text-[29px] mb-3">
            Заинтересовались продукцией компании А-ПРОМСТАЛЬ?
          </h1>
          <p className="mb-5 text-[#182F43] text-[19px]">
            Заполните форму и получите бесплатную консультацию менеджера, а
            также полный прайс цен в удобной для Вас форме!
          </p>
          <form className="max-w-[444px]">
            <Input
              type="text"
              placeholder="Телефон"
              required
              className="text-black border border-1-[#000] w-[444px]"
            />
            <Input
              type="text"
              placeholder="Имя"
              required
              className="text-black border border-1-[#000] w-[444px] mt-4"
            />
            <Button
              type="submit"
              variant="contact"
              className="mt-4 border border-1-[#000] w-[444px] text-[16.59px]"
            >
              Оставить заявку
            </Button>
          </form>
        </div>
      </Container>
    </div>
  );
}