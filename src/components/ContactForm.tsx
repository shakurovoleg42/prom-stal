import React, { FormEvent, useState } from "react";
import { Container } from "./Container";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";
import fetchService from "../services/fetch";
import toast from "react-hot-toast";

interface FormData {
  name: string;
  phone: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
  
    const updatedValue = name === "count" ? parseInt(value, 10) : value;
    console.log(formData);
    setFormData({ ...formData, [name]: updatedValue });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await fetchService.sendContactForm(formData);
      console.log(res);
      toast.success("Спасибо за заявку! Мы свяжемся с вами в ближайшее время!");
    } catch (error) {
      console.log(error);
      toast.success("Спасибо за заявку! Мы свяжемся с вами в ближайшее время!");
    }
  };

  return (
    <Container className="items-center mb-24 font-poppins">
      <div className="p-0 flex flex-col items-center font-poppins">
        <div className="text-center max-w-[560px] items-center">
          <h1 className="text-[60px] font-[700] text-[#FFBC01]">Контакты</h1>
          <p className="text-[19px] font-[600]">
            Пожалуйста, оставьте свои контактные данные, чтобы мы могли
            связаться с вами.
          </p>
        </div>
        <div className="flex flex-col items-center justify-between mt-16 lg:flex-row">
          <div className="mt-[10px] flex flex-col w-[50%] text-[26px] text-center font-[600] text-black">
            <p>Телефон:</p>

            <p className="text-[1rem] md:text-[1.4rem]">8(708)001-68-68</p>

            <p>Email:</p>

            <p className="text-[1rem] md:text-[1.4rem]">APS168@yandex.kz </p>

            <div className="flex flex-row mt-5 gap-5">
              <Link href="https://www.facebook.com/people/Too-Apromstall/pfbid02Y7usfniRUK8KWbx971VZEogtTbgRXNK2hZgUPuX8TBusiCZav7WrADgip4NGQKNdl/">
                <Image
                  className=""
                  src="Button Icon.svg"
                  width={62.25}
                  height={62.25}
                  alt="Meta"
                />
              </Link>
              <Link href="https://x.com/APromStal">
                <Image
                  className=""
                  src="Button Icon (1).svg"
                  width={62.25}
                  height={62.25}
                  alt="X"
                />
              </Link>
              <Link href="https://ru.linkedin.com/in/%D0%BF%D0%BA-%D0%BF%D1%80%D0%BE%D0%BC%D1%81%D1%82%D0%B0%D0%BB%D1%8C-ooo-552889136">
                <Image
                  className=""
                  src="Button Icon (2).svg"
                  width={62.25}
                  height={62.25}
                  alt="LinkedIn"
                />
              </Link>
            </div>
          </div>
          <div className="flex py-6 flex-col w-auto border border-1-black shadow-custom ml-0 lg-ml-20  pl-[15px] pr-[2px] sm:pr-[15px] md:pl-[51px] lg:pr-[82px] mt-6 lg:py-[52px] xl:ml-32">
            <form className="flex flex-col" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-10 lg:flex-row">
                <input
                  className="border border-1-gray p-1"
                  type="text"
                  id="name"
                  name="name"
                  onChange={handleChange}
                  placeholder="Ваше имя"
                  required
                />
                <input
                  className="border border-1-gray p-1"
                  type="text"
                  id="phone"
                  name="phone"
                  onChange={handleChange}
                  placeholder="Нормер телефона"
                  required
                />
              </div>

              <textarea
                className="mt-9 border border-1-gray p-1"
                id="message"
                name="message"
                onChange={handleChange}
                placeholder="Комментарий"
                required
              />

              <Button type="submit" variant="contact" className="mt-8 w-44">
                Отправить заявку
              </Button>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default ContactForm;
