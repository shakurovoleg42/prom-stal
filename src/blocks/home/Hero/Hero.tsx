import React, { useEffect, useState } from "react";
import { Button } from "@/src/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const translateText = async (
  text: string,
  targetLang: string
): Promise<string> => {
  const apiKey = "632c8bf6-6edd-4221-82fe-bd6ff618cbb3:fx";
  const url = "https://api-free.deepl.com/v2/translate";

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        auth_key: apiKey,
        text: text,
        target_lang: targetLang,
      }),
    });

    if (!response.ok) {
      throw new Error(`Ошибка при запросе: ${response.statusText}`);
    }

    const data = await response.json();
    return data.translations[0].text;
  } catch (error) {
    console.error("Ошибка при переводе текста:", error);
    return text;
  }
};

const getLanguageFromCookie = (): string => {
  const match = document.cookie.match(new RegExp("(^| )language=([^;]+)"));
  const lang = match ? match[2] : "RU";
  console.log("Полученный язык из куки:", lang);
  return lang;
};

export default function Hero() {
  const [translatedTitle, setTranslatedTitle] = useState<string>("");
  const [translatedSubtitle, setTranslatedSubtitle] = useState<string>("");
  const [translatedButtonText, setTranslatedButtonText] = useState<string>("");
  const [translatedContactsTitle, setTranslatedContactsTitle] =
    useState<string>("");

  useEffect(() => {
    const translate = async () => {
      try {
        const targetLang = getLanguageFromCookie();
        console.log("Используемый язык для перевода:", targetLang);

        const translatedTitle = await translateText(
          "Организуем доставку металла в кратчайшие сроки в любую точку",
          targetLang
        );
        const translatedSubtitle = await translateText(
          "Казахстана",
          targetLang
        );
        const translatedButtonText = await translateText(
          "Оставить заявку!",
          targetLang
        );
        const translatedContactsTitle = await translateText(
          "Наши контакты",
          targetLang
        );

        setTranslatedTitle(translatedTitle);
        setTranslatedSubtitle(translatedSubtitle);
        setTranslatedButtonText(translatedButtonText);
        setTranslatedContactsTitle(translatedContactsTitle);
      } catch (error) {
        console.error("Ошибка при переводе:", error);
      }
    };

    translate();
  }, []);

  return (
    <div className="flex w-full h-auto bg-[url('/Banner.png')] bg-cover bg-center justify-center items-center text-white mt-5 font-montserrat">
      <div className="flex py-[100px] justify-between items-center ">
        <div className="max-w-[1073px]">
          <h1 className="text-white text-left text-[1rem] px-5 leading-normal font-bold xl:text-[3.6rem] lg:text-[2.3rem] md:text-[2rem] sm:text-[1.6rem]">
            {translatedTitle ||
              "Организуем доставку металла в кратчайшие сроки в любую точку"}{" "}
            <br />
            <span className="text-[#FFD66C] text-[2rem] font-bold sm:text-[3.8rem]">
              {translatedSubtitle || "Казахстана"}
            </span>
          </h1>
          <div className="max-w-40">
            <Link href="#form">
              <Button
                variant="contact"
                className="items-center flex flex-row text-[14px] sm:mt-5 ml-5 "
              >
                <b>{translatedButtonText || "Оставить заявку!"}</b>
                <ArrowRight size={20} className="ml-[10px]" />
              </Button>
            </Link>
          </div>
        </div>

        <div className="hidden xl:block bg-white p-5 rounded-[10px] text-left text-black">
          <h3 className="font-bold text-[1.6rem] mb-[10px]">
            {translatedContactsTitle || "Наши контакты"}
          </h3>
          <div className="flex items-center mb-[13px] flex-row">
            <img src="/phone-icon.svg" alt="Телефон" className="mr-[10px]" />
            <b>8(708)001-68-68</b>
          </div>
          <div className="flex items-center mb-[13px] flex-row">
            <img
              src="/whatsapp-icon.svg"
              alt="WhatsApp"
              className="mr-[10px]"
            />
            <b>WhatsApp</b>
          </div>
          <div className="flex items-center mb-[13px] flex-row">
            <img src="/email-icon.svg" alt="Email" className="mr-[10px]" />
            <b>APS168@yandex.kz</b>
          </div>
        </div>
      </div>
    </div>
  );
}
