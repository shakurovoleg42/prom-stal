"use client";
import { usePathname } from "next/navigation";
import { Container } from "./Container";
import React, { useEffect, useState } from "react";

// Функция для перевода текста с помощью API Deepl
const translateText = async (text: string, targetLang: string): Promise<string> => {
  const apiKey = "632c8bf6-6edd-4221-82fe-bd6ff618cbb3:fx"; // Ваш API ключ
  const url = "https://api-free.deepl.com/v2/translate";
  
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      auth_key: apiKey,
      text: text,
      target_lang: targetLang, // Язык, на который переводим
    }),
  });

  const data = await response.json();
  return data.translations[0].text; // Возвращаем переведённый текст
};

const Banner: React.FC = () => {
  const pathname = usePathname();
  const [translatedText, setTranslatedText] = useState<string>("");

  // Определение текста для заголовка в зависимости от пути
  const whatPageBanner = (): string => {
    if (pathname === "/contacts") {
      return "Контакты";
    } else if (pathname === "/delivery") {
      return "Доставка";
    } else if (pathname === "/payment") {
      return "Оплата";
    } else if (pathname === "/about") {
      return "О компании";
    } else if (pathname === "/products") {
      return "Каталог";
    }
    return ""; // Если не найдено, возвращаем пустую строку
  };

  useEffect(() => {
    const translate = async () => {
      const textToTranslate = whatPageBanner();
      if (textToTranslate) {
        try {
          // Переводим на английский язык (можно изменить на другой язык)
          const translated = await translateText(textToTranslate, "RU");
          setTranslatedText(translated);
        } catch (error) {
          console.error("Ошибка при переводе:", error);
        }
      }
    };

    translate();
  }, [pathname]); // Переводим каждый раз, когда изменяется путь

  return (
    <div className="flex w-full max-h-[589px] bg-[url('/Banner.png')] bg-cover bg-center text-white mt-5 font-montserrat">
      <Container className="text-left items-left py-[100px] justify-left">
        <h1 className="text-white text-[2rem] text-left leading-normal font-[700] lg:text-[85px]">
          {translatedText || whatPageBanner()} {/* Если текст переведен, показываем переведённый текст, иначе исходный */}
        </h1>
      </Container>
    </div>
  );
};

export default Banner;
