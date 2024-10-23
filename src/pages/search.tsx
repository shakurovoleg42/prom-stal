/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { Container } from "../components/Container";
import { useRouter } from "next/router";
import fetchService from "../services/fetch";
import { Phone, Mail } from "lucide-react";
import { Button } from "../components/ui/button";
import Link from "next/link";
import ContactForm from "../components/ContactForm";
import toast from "react-hot-toast";


interface Product {
  id: number;
  name: string;
  slug: string;
  image: string;
}

const Search = () => {
  const [products, setProducts] = useState<any>(null);
  const router = useRouter();
  const { query } = router.query;

  useEffect(() => {
    const fetchCategory = async () => {
      if (query) {
        const toastId = toast.loading("Это может занять немного времени...");
        try {
          const response = await fetchService.getProductsBySearch(query);
          setProducts(response.data);
          
          toast.dismiss(toastId); 
          toast.success("Продукты по Вашему запросу найдены!");
        } catch (error) {
          console.error("Ошибка при загрузке категории:", error);
          
          toast.dismiss(toastId);
          toast.error("Ошибка при поиске продуктов!");
        }
      } else {
        return <div>Нет продуктов по такому названию</div>;
      }
    };
  
    fetchCategory();
  }, [query]);
  

  return (
    <Container>
      <div className="ml-5">
        <h1>
          Результаты по запросу: <span className="font-bold">{query}</span>
        </h1>
      </div>
      {products && products.length === 0 ? (
        <div className="text-black">
          Поиск продуктов по запросу <span>{query}</span>
        </div>
      ) : (
        <div className="w-full flex flex-col border border-[#D3D6DB] rounded-[10px] ml-1 font-montserrat my-16">
          {products &&
            products.map((item: Product) => (
              <div
                key={item.id}
                className="flex justify-around flex-wrap border-b border-[#D3D6DB] pl-2 py-4"
              >
                <div className="lg:w-[612px] flex flex-col items-center sm:flex-row sm:items-start ">
                  <img
                    src={item.image || "/no-image.jpg"}
                    alt={item.name}
                    className="hidden sm:block sm:w-[50px] sm:h-[50px]"
                  />
                  <img
                    src={item.image || "/no-image.jpg"}
                    alt={item.name}
                    className="block w-[150px] h-[150px] sm:hidden"
                  />
                  <Link
                     href={{
                      pathname: `/products/${item.slug}`,
                      query: { category: item.slug },
                    }}
                    className="max-w-[550px] mt-6 sm:mt-0 ml-2 md:ml-3 text-[12px] text-[#6F727B] font-[700] leading-[14px] hover:underline hover:underline-offset-2 hover:text-[#0A8C99]"
                  >
                    {item.name}
                  </Link>
                </div>
                <Button variant="seePrice" className="mt-2 sm:mt-0">
                  узнать цену
                </Button>
                <Link href="tel:8(708)001-68-68">
                  <Button
                    variant="contact"
                    className="text-[#FFD66C] mt-2 sm:mt-0"
                  >
                    <Phone size={20} />
                  </Button>
                </Link>
                <Link href="mailto:aps168@yandex.kz">
                  <Button
                    variant="contact"
                    className="text-[#FFD66C] mt-2 sm:mt-0"
                  >
                    <Mail size={20} />
                  </Button>
                </Link>
              </div>
            ))}
        </div>
      )}
      <ContactForm />
    </Container>
  );
};
export default Search;
