/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import React from 'react'

export default function Footer() {
  return (
    <div className="w-full flex flex-row bg-[#0A8C99] py-14 px-5 items-center justify-center text-white">
        <div className="mb-5 px-9 footer-logo">
          <Image src="footer-logo.svg" alt="Логотип" width={260} height={144}/>
        </div>

        <div className="mb-5 px-9">
          <p className="text-[14px] my-1 font-[500]">Черный металлопрокат</p>
          <p className="text-[14px] my-1 font-[500]">Специальные стали и сплавы</p>
          <p className="text-[14px] my-1 font-[500]">Нержавеющий металлопрокат</p>
          <p className="text-[14px] my-1 font-[500]">Цветной металлопрокат</p>
          <p className="text-[14px] my-1 font-[500]">Запорно-регулирующая арматура</p>
          <p className="mt-2 font-[500] text-[21px] leading-[31.5px]">APS168@yandex.kz</p>
          <p className="mt-2 font-[500] text-[24px] leading-[36px]">8(708)001-68-68</p>
        </div>

        <div className="mb-5 px-9 mt-2">
          <h4 className='text-[19px] mb-3 font-[600]'>Меню сайта</h4>
          <ul className='style-none p-0 m-0'>
            <li><a href="#" className="mb-1 underline">Главная</a></li>
            <li><a href="#" className="mb-1 underline">Преимущества</a></li>
            <li><a href="#" className="mb-1 underline">Продукция</a></li>
            <li><a href="#" className="mb-1 underline">Вопросы</a></li>
            <li><a href="#" className="mb-1 underline">Контакты</a></li>
          </ul>
        </div>

        <div className="mb-5 px-9 footer-subscribe">
          <h4 className="mb-3 text-[19px] font-[600]">Подписка на рассылку</h4>
          <form className="flex flex-row items-center rounded-[25px] overflow-hidden bg-white p-[5px] text-black">
            <input type="email" placeholder="Электронная почта" className='w-[70%] border-none p-[10px] rounded-l-[25px] rounded-tl-[25px] rounded-tr-[0] rounded-bl-[25px] text-[12px] outline-none'/>
            <button className='bg-[#284F52] text-white border-none py-[10px] px-[35px] rounded-[25px] text-12px cursor-pointer outline-none' type="submit">Подписаться</button>
          </form>
        </div>
      </div>
  )
}