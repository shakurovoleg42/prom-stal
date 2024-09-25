import React from "react";
import { Input } from "@/src/components/ui/inputForm";
import { Label } from "@/src/components/ui/label";

export default function Hero() {
  return (
    <div className=" flex w-full h-screen bg-[url('/Banner.png')] bg-cover bg-center justify-center items-center text-white">
      <div className="flex p-[100px] justify-between items-center ">
        <div className="max-w-[1073px]">
          <h1 className="text-white text-[3.6rem] leading-normal font-bold">
            Организуем доставку металла в кратчайшие сроки в любую точку
            <br />
            <span className="text-[#FFD66C] text-[5rem] font-bold">
              Казахстана
            </span>
          </h1>
          <form className="form flex gap-[41px] mt-5">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="email">Поиск</Label>
              <Input type="email" id="email" />
            </div>
            <Input
              type="text"
              name="contacts"
              required
              placeholder="Ваши контакты"
              className="max-w-[294px] max-h-[45px]"
            />
            <button type="submit">Оставить заявку! &#8594;</button>
          </form>
        </div>
        <div className="contact-info">
          <h3>Наши контакты</h3>
          <p>
            <img src="/phone-icon.svg" alt="Телефон" /> 8(708)001-68-68
          </p>
          <p>
            <img src="/whatsapp-icon.svg" alt="WhatsApp" /> WhatsApp
          </p>
          <p>
            <img src="/email-icon.svg" alt="Email" /> APS168@yandex.kz
          </p>
        </div>
      </div>
    </div>
  );
}
