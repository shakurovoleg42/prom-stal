/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Button } from "@/src/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="flex w-full h-auto bg-[url('/Banner.png')] bg-cover bg-center justify-center items-center text-white mt-5 font-roboto">
      <div className="flex py-[100px] justify-between items-center ">
        <div className="max-w-[1073px]">
          <h1 className="text-white text-left text-[1rem] px-5 leading-normal font-bold xl:text-[3.6rem] lg:text-[2.3rem] md:text-[2rem] sm:text-[1.6rem]">
            Организуем доставку металла в кратчайшие сроки в любую точку
            <br />
            <span className="text-[#FFD66C] text-[2rem] font-bold sm:text-[3.8rem]">
              Казахстана
            </span>
          </h1>
          <div className="max-w-40">
            <Link href="#form">
              <Button
                variant="contact"
                className="items-center flex flex-row text-[14px] sm:mt-5 ml-5 "
              >
                <b>Оставить заявку!</b>
                <ArrowRight size={20} className="ml-[10px]" />
              </Button>
            </Link>
          </div>
        </div>

        <div className="hidden xl:block bg-white p-5 rounded-[10px] text-left text-black">
          <h3 className="font-bold text-[1.6rem] mb-[10px]">Наши контакты</h3>
          <div className="flex items-center mb-[13px] flex-row">
            <img src="/phone-icon.svg" alt="Телефон" className="mr-[10px]" />
            <a href="tel:+77714258484">
              <b>+7 (771) 425-84-84</b>
            </a>
          </div>
          <div className="flex items-center mb-[13px]">
            <a
              href="https://api.whatsapp.com/send?phone=77714258484"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center mb-[13px] flex-row"
            >
              <img
                src="/whatsapp-icon.svg"
                alt="WhatsApp"
                className="mr-[10px]"
              />
              <b>WhatsApp</b>
            </a>
          </div>
          <div className="flex items-center mb-[13px]">
            <a
              href="mailto:APS168@yandex.kz"
              className="flex items-center mb-[13px] flex-row"
            >
              <img src="/email-icon.svg" alt="Email" className="mr-[10px]" />
              <b>APS168@yandex.kz</b>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
