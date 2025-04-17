import React from "react";
// import { FaTelegramPlane } from "react-icons/fa";
// import { FaLocationPin } from "react-icons/fa6";
import { FaPhone, FaLinkedin, FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsTwitterX } from "react-icons/bs";
// import Link from "next/link";
import { Container } from "../components/Container";
import Form from "../components/Form/Form";
import Banner from "../components/Banner";
import Link from "next/link";
export default function contacts() {
  return (
    <div>
      <Banner />
      <Container className="bg-white shadow-custom p-4 rounded-[10px] mt-24 mb-24 font-montserrat">
        <div className="flex flex-[1_1_calc(25%-20px)] items-center flex-wrap justify-between mt-8 gap-2">
          {/* <div     className="flex flex-col bg-white flex-wrap  items-center pt-8 
                                2xl:max-w-[250px] xl:max-w-[200px] lg:max-w-[180px] md:max-w-[160px]
                                sm:max-w-[150px] max-w-[150px] w-full 
                                2xl:h-52 xl:h-48 lg:h-44 md:h-40 sm:h-36 h-36 p-3 rounded-l-[15px]"
        >
          <FaTelegramPlane className=" hidden sm:block 2xl:text-4xl xl:text-3xl lg:text-3xl md:text-2xl sm:text-xl  text-xl mb-2 text-yellow-400" />
          <h2 className="text-black text-xl mb-4 font-semibold font-body">
            Телеграм
          </h2>
          <Link href="#!" className="leading-7">
            @Focarkz_bot
          </Link>
        </div> */}
          {/* <div
          className="contact__item flex bg-white flex-col items-center pt-8  
                                2xl:max-w-[250px] xl:max-w-[200px] lg:max-w-[180px] md:max-w-[160px]
                                sm:max-w-[150px] max-w-[150px] w-full 
                                2xl:h-52 xl:h-48 lg:h-44 md:h-40 sm:h-36 h-36"
        >
          <FaLocationPin className="hidden sm:block 2xl:text-4xl xl:text-3xl lg:text-3xl md:text-2xl sm:text-xl text-xl mb-2 text-yellow-400" />
          <h2 className="text-darkMain text-xl mb-4 font-semibold font-body">
            Адрес
          </h2>
          <a
            href="https://yandex.uz/maps/162/almaty/house/Y08YfwZkS0YGQFppfX9xdXVqYw==/?from=mapframe&ll=76.914231%2C43.304997&z=17"
            className="leading-7"
          >
            г. Алматы ул. Казыбаева, 270а
          </a>
        </div> */}

          <div
            className="contact__item flex bg-white flex-col items-center pt-8 
                                2xl:max-w-[250px] xl:max-w-[200px] lg:max-w-[180px] md:max-w-[160px]
                                sm:max-w-[150px] max-w-[150px] w-full 
                                2xl:h-52 xl:h-48 lg:h-44 md:h-40 sm:h-36 h-36"
          >
            <FaPhone className="hidden sm:block 2xl:text-4xl xl:text-3xl lg:text-3xl md:text-2xl sm:text-xl text-xl mb-2 text-[#0A8C99]" />
            <h2 className="text-darkMain text-xl mb-4 font-semibold font-body">
              Телефоны
            </h2>
            <Link href="tel:+7 771 425 8484" className=" leading-7">
              +7 771 425 8484
            </Link>
            <Link href="tel:+7 747 227 7906" className=" leading-7">
              +7 747 227 7906
            </Link>
          </div>
          <div
            className="contact__item flex bg-white flex-col items-center pt-8 
                                2xl:max-w-[250px] xl:max-w-[200px] lg:max-w-[180px] md:max-w-[160px]
                                sm:max-w-[150px] max-w-[150px] w-full 
                                2xl:h-52 xl:h-48 lg:h-44 md:h-40 sm:h-36 h-36 rounded-r-[15px]"
          >
            <MdEmail className="hidden sm:block 2xl:text-4xl xl:text-3xl lg:text-3xl md:text-2xl sm:text-xl text-xl mb-2 text-[#0A8C99]" />
            <h2 className="text-darkMain text-xl mb-4 font-semibold font-body">
              E-Mail
            </h2>
            <Link href="mailto:APS168@yandex.kz" className="leading-7">
              APS168@yandex.kz
            </Link>
          </div>
          <div
            className="contact__item flex bg-white flex-col items-center pt-8 
                                2xl:max-w-[250px] xl:max-w-[200px] lg:max-w-[180px] md:max-w-[160px]
                                sm:max-w-[150px] max-w-[150px] w-full 
                                2xl:h-52 xl:h-48 lg:h-44 md:h-40 sm:h-36 h-36 rounded-r-[15px]"
          >
            <FaFacebook className="hidden sm:block 2xl:text-4xl xl:text-3xl lg:text-3xl md:text-2xl sm:text-xl text-xl mb-2 text-blue-400" />
            <h2 className="text-darkMain text-xl mb-4 font-semibold font-body">
              Facebook
            </h2>
            <Link
              href="https://www.facebook.com/people/Too-Apromstall/pfbid02Y7usfniRUK8KWbx971VZEogtTbgRXNK2hZgUPuX8TBusiCZav7WrADgip4NGQKNdl/"
              className="border-b-2 hover:border-blue-500 leading-7"
            >
              Перейти
            </Link>
          </div>
          <div
            className="contact__item flex bg-white flex-col items-center pt-8 
                                2xl:max-w-[250px] xl:max-w-[200px] lg:max-w-[180px] md:max-w-[160px]
                                sm:max-w-[150px] max-w-[150px] w-full 
                                2xl:h-52 xl:h-48 lg:h-44 md:h-40 sm:h-36 h-36"
          >
            <BsTwitterX className="hidden sm:block 2xl:text-4xl xl:text-3xl lg:text-3xl md:text-2xl sm:text-xl text-xl mb-2 text-black" />
            <h2 className="text-darkMain text-xl mb-4 font-semibold font-body">
              X.com
            </h2>
            <Link
              href="https://x.com/APromStal"
              className="border-b-2 hover:border-blue-500 leading-7"
            >
              Перейти
            </Link>
          </div>
          <div
            className="contact__item flex bg-white flex-col items-center pt-8 
                                2xl:max-w-[250px] xl:max-w-[200px] lg:max-w-[180px] md:max-w-[160px]
                                sm:max-w-[150px] max-w-[150px] w-full 
                                2xl:h-52 xl:h-48 lg:h-44 md:h-40 sm:h-36 h-36"
          >
            <FaLinkedin className="hidden sm:block 2xl:text-4xl xl:text-3xl lg:text-3xl md:text-2xl sm:text-xl text-xl mb-2 text-blue-400" />
            <h2 className="text-darkMain text-xl mb-4 font-semibold font-body">
              LinkedIn
            </h2>
            <Link
              href="https://ru.linkedin.com/in/%D0%BF%D0%BA-%D0%BF%D1%80%D0%BE%D0%BC%D1%81%D1%82%D0%B0%D0%BB%D1%8C-ooo-552889136"
              className="border-b-2 hover:border-blue-500 leading-7"
            >
              Перейти
            </Link>
          </div>
        </div>
      </Container>
      <Form />
    </div>
  );
}
