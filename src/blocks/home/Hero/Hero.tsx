/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Input } from "@/src/components/ui/inputForm";
import { Label } from "@/src/components/ui/label";
import { Button } from "@/src/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <div className=" flex w-full max-h-[589px] bg-[url('/Banner.png')] bg-cover bg-center justify-center items-center text-white mt-5">
      <div className="flex p-[100px] justify-between items-center ">
        <div className="max-w-[1073px]">
          <h1 className="text-white text-[3.6rem] leading-normal font-bold">
            Организуем доставку металла в кратчайшие сроки в любую точку
            <br />
            <span className="text-[#FFD66C] text-[5rem] font-bold">
              Казахстана
            </span>
          </h1>
          <form className="form flex gap-[41px] mt-5 items-center">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="email">Поиск</Label>
              <Input type="text" defaultValue="" />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="email">Контакты</Label>
              <Input type="text" defaultValue="" />
            </div>
            <Button type="submit" variant="contact" className="items-center flex flex-row text-[14px]">
              <b>Оставить заявку!</b>
              <ArrowRight size={20} className="ml-[10px]"/>
            </Button>
          </form>
        </div>
        <div className="bg-white p-5 rounded-[10px] text-left text-black">
          <h3 className="font-bold text-[1.6rem] mb-[10px]">Наши контакты</h3>
          <div className="flex items-center mb-[13px] flex-row">
            <img src="/phone-icon.svg" alt="Телефон"  className="mr-[10px]"/> <b>8(708)001-68-68</b>
          </div>
          <div className="flex items-center mb-[13px] flex-row">
            <img src="/whatsapp-icon.svg" alt="WhatsApp"  className="mr-[10px]"/> <b>WhatsApp</b>
          </div>
          <div className="flex items-center mb-[13px] flex-row">
            <img src="/email-icon.svg" alt="Email"  className="mr-[10px]"/> <b>APS168@yandex.kz</b>
          </div>
        </div>
      </div>
    </div>
  );
}
