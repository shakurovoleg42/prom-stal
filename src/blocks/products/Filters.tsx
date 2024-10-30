import React, { useState } from "react";
import { ChevronDown, Search } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import { useRouter } from "next/router";

interface Characteristic {
  name: string;
  values: string[];
}

interface FiltersProps {
  characteristics?: Characteristic[];
  category: string | string[] | undefined;
}

export default function Filters({ characteristics, category }: FiltersProps) {
  const [selectedValues, setSelectedValues] = useState<{ [key: string]: string[] }>({});
  const router = useRouter();

  const [isOpen, setIsOpen] = useState<{ [key: string]: boolean }>({});

  const toggleMenu = (key: string) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  const handleCheckboxChange = (name: string, value: string) => {
    setSelectedValues((prevState) => {
      const currentValues = prevState[name] || [];
      if (currentValues.includes(value)) {
        return {
          ...prevState,
          [name]: currentValues.filter((v) => v !== value),
        };
      } else {
        return {
          ...prevState,
          [name]: [...currentValues, value],
        };
      }
    });
  };

  const searchByFilters = () => {
    const filtersQuery = new URLSearchParams();
  
    Object.entries(selectedValues).forEach(([key, values]) => {
      values.forEach((value) => {
        filtersQuery.append(`filters[${key}][]`, value);
      });
    });
  
    const combinedQuery = `category=${category}?${filtersQuery.toString()}`;
  
    router.push({
      pathname: `/products`,
      query: combinedQuery,
    });
  };
  
  

  return (
    <div className="flex w-auto lg:max-w-[200px] flex-col border-t border-[#D3D6DB] rounded-[10px] px-14 lg:px-0 font-montserrat gap-6">
      <div className="flex flex-col mt-4 gap-6">
        {Array.isArray(characteristics) && characteristics.length > 0 ? (
          characteristics.map((item) => (
            <div key={item.name}>
              <div
                className="flex flex-row items-center cursor-pointer justify-between border-b border-[#D3D6DB] font-poppins"
                onClick={() => toggleMenu(item.name)}
              >
                <span className="text-[1rem] text-[#262A31] font-[700] leading-[1.3rem] cursor-pointer">
                  {item.name}
                </span>
                <ChevronDown />
              </div>

              {isOpen[item.name] && (
                <div className="flex flex-col pl-4 mt-3 font-poppins gap-1">
                  {item.values.map((value, index) => (
                    <label key={index} className="flex items-center">
                      <input
                        type="checkbox"
                        name={item.name}
                        value={value}
                        checked={selectedValues[item.name]?.includes(value)}
                        onChange={() => handleCheckboxChange(item.name, value)}
                        className="mr-2"
                      />
                      {value}
                    </label>
                  ))}
                </div>
              )}
            </div>
          ))
        ) : (
          <div className="text-[#262A31] text-[1rem] max-w-[190px] text-center">
            Нет фильтров для отображения
          </div>
        )}
        {Array.isArray(characteristics) && characteristics.length > 0 ? (
          <div className="w-full flex flex-row items-center justify-center">
            <Button className="gap-1" onClick={searchByFilters}>
              <Search size={15} />
              <span>Найти</span>
            </Button>
          </div>
        ) : null}
      </div>
    </div>
  );
}
