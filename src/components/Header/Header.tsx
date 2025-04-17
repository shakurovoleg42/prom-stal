/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import Link from "next/link";

import { ChevronDown } from "lucide-react";
import { Container } from "../Container";
import { Toaster } from "react-hot-toast";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/src/components/ui/dropdown-menu";
import SecondHeader from "./SecondHeader";
import QuickOrderSheet from "../QuickOrderSheet";

const Header: React.FC = () => {
  const [region, setRegion] = useState("Астана");
  // const [lang, setLang] = useState("RU");
  // const [flag, setFlag] = useState("/russia-flag.png");

  useEffect(() => {
    // const savedLang = Cookies.get("language");
    // if (!savedLang) {
    //   Cookies.set("language", "RU", { expires: 365 });
    // } else {
    //   setLang(savedLang);
    //   const selectedLang = langs.find((lang) => lang.code === savedLang);
    //   if (selectedLang) {
    //     setFlag(selectedLang.icons);
    //   }
    // }
  }, []);

  // const langs = [
  // {
  //   name: "Русский",
  //   code: "RU",
  //   icons: "/russia-flag.png",
  // },
  // {
  //   name: "English",
  //   code: "EN",
  //   icons: "/england-flag.png",
  // },
  // {
  //   name: "Қазақ",
  //   code: "KK",
  //   icons: "/kazakhstan-flag.png",
  // },
  // ];

  const cities = [
    {
      name: "Алматы",
      code: "almaty",
    },
    {
      name: "Астана",
      code: "astana",
    },
    {
      name: "Актау",
      code: "aktau",
    },
  ];

  return (
    <Container className="font-inter">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex flex-col justify-between items-center py-5 lg:flex-row">
        <div className="flex items-center gap-10">
          <Link href="/">
            <img src="/logo.svg" alt="Логотип" className="w-[100px] mr-2" />
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex border-none cursor-pointer bg-transparent justify-center items-center font-inter-bold font-bold mr-12 text-[13px]">
              <img
                src="/location.svg"
                alt="location"
                className="mr-2 w-[20px]"
              />
              {region}
              <ChevronDown />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuSeparator />
              {cities.map((city) => (
                <DropdownMenuItem key={city.code}>
                  <b
                    className="hover:bg-[#f7f7f7] cursor-pointer p-2 rounded-[8px]"
                    onClick={() => setRegion(city.name)}
                  >
                    {city.name}
                  </b>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          {/* <DropdownMenu>
            <DropdownMenuTrigger className="flex border-none cursor-pointer bg-transparent justify-center items-center uppercase font-inter-bold font-bold mr-12 text-[13px]">
              <img src={flag} alt="flag" className="mr-2 w-[23px]" /> {lang}
              <ChevronDown />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuSeparator />
              {langs.map((lang) => (
                <DropdownMenuItem key={lang.code}>
                  <b
                    className="hover:bg-[#f7f7f7] cursor-pointer p-2 rounded-[8px]"
                    onClick={() => handleLanguageChange(lang.code)}
                  >
                    {lang.name}
                  </b>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu> */}
        </div>
        <div className="hidden sm:flex items-center sm:mt-5 lg:mt-0">
          <div>
            <Link
              href="tel:+7 771 425 8484"
              className="mr-[50px] text-[12px] flex items-center"
            >
              <img src="/phone.svg" alt="phone" className="w-[20px] mr-2" />
              <b>+7 771 425 8484</b>
            </Link>
            <Link
              href="tel:+7 747 227 7906"
              className="mr-[50px] text-[12px] flex items-center"
            >
              <img src="/phone.svg" alt="phone" className="w-[20px] mr-2" />
              <b>+7 747 227 7906</b>
            </Link>
          </div>
          <div>
            <Link
              href="mailto:APS168@yandex.kz"
              className="mr-[50px] text-[12px] flex items-center"
            >
              <img src="/email.svg" alt="email" className="w-[20px] mr-2" />
              <b>APS168@yandex.kz</b>
            </Link>
          </div>
        </div>
        <div className="mt-6 sm:mt-4 lg:mt-0">
          <QuickOrderSheet type="header" />
        </div>
      </div>

      <div className="relative w-full h-[3px] bg-transparent">
        <div className="absolute top-[-1px] left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#FFD66C] to-transparent"></div>
      </div>

      <SecondHeader />
    </Container>
  );
};

export default Header;
