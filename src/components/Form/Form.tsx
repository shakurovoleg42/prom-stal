"use client";
import React, { FormEvent, useState } from "react";
import { Input } from "../ui/inputForm";
import { Button } from "../ui/button";
import { Container } from "../Container";
import { usePathname } from "next/navigation";
import fetchService from "@/src/services/fetch";
import toast from "react-hot-toast";

interface FormData {
  name: string;
  phone: string;
}

const Form: React.FC = () => {
  const pathname = usePathname();

  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    const updatedValue = name === "count" ? parseInt(value, 10) : value;
    setFormData({ ...formData, [name]: updatedValue });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await fetchService.sendForm(formData);
      console.log(res);
      toast.success("Спасибо за заявку! Мы свяжемся с вами в ближайшее время!");
    } catch (error) {
      console.log(error);
      toast.success("Спасибо за заявку! Мы свяжемся с вами в ближайшее время!");
    }
  };

  const whatPageForm = () => {
    if (pathname === "/") {
      return "Заинтересовались продукцией компании А-ПРОМСТАЛЬ?";
    } else if (pathname === "/contacts") {
      return "Нужна помощь?";
    } else if (pathname === "/delivery") {
      return "Нужна помощь?";
    } else if (pathname === "/payment") {
      return "Нужна помощь?";
    } else {
      return "Не нашли нужный товар?";
    }
  };

  return (
    <div id="form" className="flex w-full h-[589px] bg-[url('/fon1.png')] bg-cover bg-center justify-center items-center text-white mt-5 font-montserrat">
      <Container  className="">
        <div className="flex flex-col bg-[#FFFFFF] p-2 sm:p-8 rounded-[10px] max-w-[540px] h-auto text-left items-start">
          <h3 className="text-[#182F43] font-bold text-[29px] mb-3">
            {whatPageForm()}
          </h3>
          <p className="mb-5 text-[#182F43] text-[19px]">
            Заполните форму и получите бесплатную консультацию менеджера, а
            также полный прайс цен в удобной для Вас форме!
          </p>
          <form className="max-w-[444px]" onSubmit={handleSubmit}>
            <Input
              id="phone"
              name="phone"
              type="text"
              placeholder="Телефон"
              onChange={handleChange}
              required
              className="text-black border border-1-[#000] max-w-[444px]"
            />
            <Input
              id="name"
              name="name"
              type="name"
              placeholder="Имя"
              onChange={handleChange}
              required
              className="text-black border border-1-[#000] max-w-[444px] mt-4"
            />
            <Button
              type="submit"
              variant="contact"
              className="mt-4 border border-1-[#000] max-w-[444px] text-[16.59px]"
            >
              Оставить заявку
            </Button>
          </form>
        </div>
      </Container>
    </div>
  );
}

export default Form;