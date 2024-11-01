import { Container } from "@/src/components/Container";
import { Button } from "@/src/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/src/components/ui/productAccordion";
import { ArrowRight } from "lucide-react";
import React from "react";

export default function Faq() {
  return (
    <Container className="mb-5 w-full flex items-center justify-center flex-wrap lg:justify-between font-montserrat">
      <div id="payment" className="max-w-[416px] text-[#182F43] flex flex-col items-center justify-center text-left lg:text-left lg:items-start">
        <div>
          <h3 className="text-[29px] font-[700] leading-[46px]">Вопрос ответ</h3>
        </div>
        <div>
          <p className="text-[17px] font-[300] leading-[27px] mt-[4]">
            Не нашли ответа на свой вопрос? Мы здесь, чтобы помочь! Напишите
            нам, и мы с радостью предоставим всю необходимую информацию.
          </p>
        </div>
        <div className="mt-2">
          <Button
            type="submit"
            variant="contact"
            className="items-center flex flex-row text-[14px] text-[#FFD66C]"
          >
            <span>Свяжитесь с нами!</span>
            <ArrowRight size={20} className="ml-[10px]" />
          </Button>
        </div>
      </div>

      <Accordion id="faq" type="single" collapsible className="my-16 w-auto">
        {accordionItems.map((item, index) => (
          <AccordionItem
            key={index}
            value={`item-${item.id}`}
            className="bg-transparent p-2 rounded-2xl my-2"
          >
            <AccordionTrigger className="text-xl font-[600] text-black text-[19px]">
              {item.title}
            </AccordionTrigger>
            <AccordionContent className="max-w-[600px] text-black text-[17px] font-[500] mt-6">{item.text}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Container>
  );
}

const accordionItems = [
  {
    id: 1,
    title: "Как я могу оформить заказ?",
    text: "Мы предлагаем широкий выбор металлических изделий, включая уголки, балки, швеллеры, листы, трубы, арматуру и многое другое. Наш ассортимент охватывает различные типы и размеры металлопроката, чтобы удовлетворить потребности наших клиентов.",
  },
  {
    id: 2,
    title: "Каковы сроки поставки?",
    text: "Мы также предоставляем услуги по доставке металлопроката на объект клиента. Наши специалисты готовы помочь в выборе наиболее подходящих материалов и консультировать по любым вопросам.",
  },
  {
    id: 3,
    title: "Каковы условия доставки и оплаты?",
    text: "Условия доставки и оплаты могут варьироваться в зависимости от объема заказа, места доставки и других факторов. Мы предлагаем гибкие условия и стараемся адаптировать их под потребности каждого клиента. Обычно мы принимаем оплату по безналичному расчету, а доставка осуществляется согласно договоренностям.",
  },
];