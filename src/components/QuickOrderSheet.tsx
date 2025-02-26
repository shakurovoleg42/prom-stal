import React, { useState, FormEvent } from "react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
  SheetClose,
} from "@/src/components/ui/sheet";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";
import Image from "next/image";
import MaskedInput from "react-text-mask";
import fetchService from "@/src/services/fetch";
import toast from "react-hot-toast";

const QuickOrderSheet: React.FC<{ type: string }> = ({ type }) => {
  const [formData, setFormData] = useState({
    product: "",
    count: 0,
    phone: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await fetchService.sendRightSideMessage(formData);
      toast.success("Спасибо за заявку! Мы свяжемся с вами в ближайшее время!");
    } catch (error) {
      console.error(error);
      toast.error("Ошибка при отправке заявки. Попробуйте снова.");
    }
  };

  const buttonType = () => {
    if (type === "header") {
      return (
        <button className="mr-[50px] text-[12px] flex items-center font-bold py-1 px-5 bg-[#F5F7F8] rounded-[6px] text-black">
          <Image
            src="/request.svg"
            alt="Request"
            width={20}
            height={20}
            className="mr-2"
          />
          Оставить заявку
        </button>
      );
    } else if (type === "product") {
      return (
        <Button
          variant="contact"
          className="text-[#FFD66C] uppercase text-[12px] font-bold"
        >
          Узнать цену
        </Button>
      );
    }
  };

  return (
    <Sheet>
      <SheetTrigger asChild>{buttonType()}</SheetTrigger>
      <SheetContent className="flex flex-col items-center text-left sm:items-center">
        <SheetHeader>
          <SheetTitle className="text-[2rem]">Заказ в 1 клик</SheetTitle>
        </SheetHeader>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col items-left gap-8 py-4 px-2 text-black">
            <div className="flex flex-col items-center gap-4 sm:grid sm:grid-cols-4">
              <Label htmlFor="product" className="text-left font-bold">
                Товар
              </Label>
              <Input
                id="product"
                name="product"
                placeholder="Кабель силовой медный"
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex flex-col items-center gap-4 sm:grid sm:grid-cols-4">
              <Label htmlFor="count" className="text-left font-bold">
                Количество
              </Label>
              <Input
                id="count"
                name="count"
                placeholder="20"
                type="number"
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex flex-col items-center gap-4 sm:grid sm:grid-cols-4">
              <Label htmlFor="phonenumber" className="text-left font-bold">
                Номер телефона
              </Label>
              <MaskedInput
                mask={[
                  "+",
                  "7",
                  " ",
                  "(",
                  /[1-9]/,
                  /\d/,
                  /\d/,
                  ")",
                  " ",
                  /\d/,
                  /\d/,
                  /\d/,
                  "-",
                  /\d/,
                  /\d/,
                  "-",
                  /\d/,
                  /\d/,
                ]}
                className="flex h-10 w-full rounded-md bg-background text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 border border-1-[#000] focus:border-none col-span-3 py-7 px-2"
                placeholder="+7 (___) ___-__-__"
                guide={false}
                type="text"
                id="phonenumber"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col items-center gap-4 sm:grid sm:grid-cols-4">
              <Label htmlFor="email" className="text-left font-bold">
                Email
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="example@gmail.com"
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <SheetFooter className="w-full flex items-center justify-center">
            <SheetClose asChild>
              <Button
                className="w-full flex items-center justify-center rounded-[25px]"
                type="submit"
              >
                Отправить
              </Button>
            </SheetClose>
          </SheetFooter>
        </form>
      </SheetContent>
    </Sheet>
  );
};

export default QuickOrderSheet;
