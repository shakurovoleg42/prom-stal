import React from 'react'
import { Container } from './Container'

export default function Regards() {
  return (
    <Container>
      <div id="regards" className="mt-16 text-center px-5">
        <h2 className="text-[#FFBC01] text-[2rem] leading-[60px] font-bold sm:text-[60px]">Наши преимущества</h2>
        <div className="flex justify-around flex-wrap mt-14">
          <div className="bg-[#0A8C99] border border-1-[#ccc] rounded-[8px] w-[260px] h-auto p-5 m-[10px] text-center shadow-[0_2px_5px_rgba(0,0,0,0.1)] text-white items-center">
            <div className="flex items-center justify-center">
              <img src="i1.svg" alt="" sizes="99px" />
            </div>
            <h3 className="font-bold text-[17px] leading-[12px]  mt-[11px] mb-[11px]">Широкий ассортимент</h3>
            <h4 className="text-[9px] leading-[12px]">
              Мы предлагаем разнообразный выбор металлопроката различных видов и
              размеров, что позволяет удовлетворить потребности различных
              отраслей промышленности и частных заказчиков
            </h4>
          </div>
          <div className="bg-[#0A8C99] border border-1-[#ccc] rounded-[8px] w-[260px] h-auto p-5 m-[10px] text-center shadow-[0_2px_5px_rgba(0,0,0,0.1)] text-white items-center">
            <div className="flex items-center justify-center">
              <img src="i2.svg" alt="" className="w-[72px] h-[99px]" />
            </div>
            <h3 className="font-bold text-[17px] leading-[12px]  mt-[11px] mb-[11px]">Высокое качество</h3>
            <h4 className="text-[9px] leading-[12px]">
              Наша компания работает только с проверенными поставщиками и
              гарантирует качество всех предлагаемых материалов, соответствие
              всем стандартам и требованиям безопасности
            </h4>
          </div>
          <div className="bg-[#0A8C99] border border-1-[#ccc] rounded-[8px] w-[260px] h-auto p-5 m-[10px] text-center shadow-[0_2px_5px_rgba(0,0,0,0.1)] text-white items-center">
            <div className="flex items-center justify-center">
              <img src="i3.svg" alt="" className="w-[89px] h-[99px]" />
            </div>
            <h3 className="font-bold text-[17px] leading-[12px]  mt-[11px] mb-[11px]">Гибкий подход</h3>
            <h4 className="text-[9px] leading-[12px]">
              Мы готовы предоставить индивидуальные условия и решения для
              каждого клиента, включая услуги по доставке, резке и обработке
              металлопроката в соответствии с их потребностями
            </h4>
          </div>
          <div className="bg-[#0A8C99] border border-1-[#ccc] rounded-[8px] w-[260px] h-auto p-5 m-[10px] text-center shadow-[0_2px_5px_rgba(0,0,0,0.1)] text-white items-center">
            <div className="flex items-center justify-center">
              <img src="i4.svg" alt="" className="w-[114px] h-[92px]" />
            </div>
            <h3 className="font-bold text-[17px] leading-[12px]  mt-[11px] mb-[11px]">Профессионализм и опыт</h3>
            <h4 className="text-[9px] leading-[12px]">
              Наша команда состоит из опытных специалистов, готовых предоставить
              профессиональные консультации и помощь в выборе наиболее
              подходящих материалов для конкретного проекта
            </h4>
          </div>
        </div>
      </div>
    </Container>
  )
}
