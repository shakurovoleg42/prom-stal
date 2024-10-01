import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Filters() {
  const [isOpen, setIsOpen] = useState({
    thickness: false,
    type: false,
    composition: false,
    method: false,
    coating: false,
    wallType: false,
    outerDiameter: false,
    brand: false,
  });

  type FilterKey = keyof typeof isOpen;

  const toggleMenu = (key: FilterKey) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  return (
    <div className="flex w-auto flex-col border-t border-r border-b border-[#D3D6DB] rounded-[10px]">
      <div className="flex flex-col ">
        <div className="flex flex-row items-center cursor-pointer justify-between mt-4" onClick={() => toggleMenu("thickness")}>
         <span
          className="text-[1rem] text-[#262A31] font-[700] leading-[38px] cursor-pointer"
        >
          Толщина стенки, мм
        </span>
        <ChevronDown/>   
        </div>
        
        {isOpen.thickness && (
          <div className="flex flex-col pl-4">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Вариант 1
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Вариант 2
            </label>
          </div>
        )}
      </div>
      <div className="flex flex-col">
        <div className="flex flex-row items-center cursor-pointer justify-between mt-4" onClick={() => toggleMenu("type")}>
        <span
          className="text-[1rem] text-[#262A31] font-[700] leading-[38px] cursor-pointer"
          
        >
          Вид
        </span>
        <ChevronDown/> 
        </div>
          
        {isOpen.type && (
          <div className="flex flex-col pl-4">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Вариант 1
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Вариант 2
            </label>
          </div>
        )}
      </div>
      <div className="flex flex-col">
        <div className="flex flex-row items-center cursor-pointer justify-between mt-4" onClick={() => toggleMenu("composition")}>
        <span
          className="text-[1rem] text-[#262A31] font-[700] leading-[38px] cursor-pointer"
          
        >
          Состав
        </span>
        <ChevronDown/>  
        </div>
         
        {isOpen.composition && (
          <div className="flex flex-col pl-4">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Вариант 1
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Вариант 2
            </label>
          </div>
        )}
      </div>
      <div className="flex flex-col">
        <div className="flex flex-row items-center cursor-pointer justify-between mt-4" onClick={() => toggleMenu("method")}>
        <span
          className="text-[1rem] text-[#262A31] font-[700] leading-[38px] cursor-pointer"
          
        >
          Метод обработки
        </span>
        <ChevronDown/>  
        </div>
         
        {isOpen.method && (
          <div className="flex flex-col pl-4">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Вариант 1
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Вариант 2
            </label>
          </div>
        )}
      </div>
      <div className="flex flex-col">
        <div className="flex flex-row items-center cursor-pointer justify-between mt-4" onClick={() => toggleMenu("coating")}>
        <span
          className="text-[1rem] text-[#262A31] font-[700] leading-[38px] cursor-pointer"
          
        >
          Покрытие
        </span>
        <ChevronDown/>
        </div>
           
        {isOpen.coating && (
          <div className="flex flex-col pl-4">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Вариант 1
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Вариант 2
            </label>
          </div>
        )}
      </div>
      <div className="flex flex-col">
        <div className="flex flex-row items-center cursor-pointer justify-between mt-4" onClick={() => toggleMenu("wallType")}>
        <span
          className="text-[1rem] text-[#262A31] font-[700] leading-[38px] cursor-pointer"
          
        >
          Тип стенки
        </span>
        <ChevronDown/>
        </div>
           
        {isOpen.wallType && (
          <div className="flex flex-col pl-4">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Вариант 1
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Вариант 2
            </label>
          </div>
        )}
      </div>
      <div className="flex flex-col">
        <div className="flex flex-row items-center cursor-pointer justify-between mt-4" onClick={() => toggleMenu("outerDiameter")}>
        <span
          className="text-[1rem] text-[#262A31] font-[700] leading-[38px] cursor-pointer"
          
        >
          Наружный диаметр, мм
        </span>
        <ChevronDown/>
        </div>
           
        {isOpen.outerDiameter && (
          <div className="flex flex-col pl-4">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Вариант 1
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Вариант 2
            </label>
          </div>
        )}
      </div>
      <div className="flex flex-col">
        <div className="flex flex-row items-center cursor-pointer justify-between mt-4" onClick={() => toggleMenu("brand")}>
        <span
          className="text-[1rem] text-[#262A31] font-[700] leading-[38px] cursor-pointer"
          
        >
          Марка
        </span>
        <ChevronDown/>
        </div>
           
        {isOpen.brand && (
          <div className="flex flex-col pl-4">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Вариант 1
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Вариант 2
            </label>
          </div>
        )}
      </div>
    </div>
  );
}