/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/src/components/ui/button";
import React from "react";
import { Phone, Mail } from "lucide-react";
import Link from "next/link";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import QuickOrderSheet from "@/src/components/QuickOrderSheet";

interface Product {
  id: number;
  name: string;
  slug: string;
  image: string;
}

interface Pagination {
  total: number;
  per_page: number;
  current_page: number;
  last_page: number;
  next_page_url: string;
  prev_page_url?: string;
}

interface ListProductsProps {
  products?: Product[];
  pagination?: Pagination;
}

const ListProducts: React.FC<ListProductsProps> = ({
  products = [],
  pagination = {},
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);

  if (!Array.isArray(products) || products.length === 0) {
    return (
      <div className="">
        <div className="">
          Загрузка
          <span className="dot-1">.</span>
          <span className="dot-2">.</span>
          <span className="dot-3">.</span>
        </div>
        <style jsx>{`
          @keyframes dotAnimation {
            0%,
            100% {
              opacity: 0;
            }
            25% {
              opacity: 1;
            }
          }

          .dot-1 {
            animation: dotAnimation 1.5s infinite;
          }

          .dot-2 {
            animation: dotAnimation 1.5s infinite 0.5s;
          }

          .dot-3 {
            animation: dotAnimation 1.5s infinite 1s;
          }
        `}</style>
      </div>
    );
  }

  const totalProducts = pagination?.total || 0;
  const itemsPerPage = pagination.per_page || 1;

  const page = +(searchParams.get("page") ?? 1);

  const handlePageChange = (event: any, value: number) => {
    params.set("page", value.toString());
    router.replace(pathname + "?" + params.toString());

    window.scrollTo(0, 0);
    event.preventDefault();
  };

  const totalPages = Math.ceil(totalProducts / itemsPerPage);

  return (
    <div>
      <div className="w-full flex flex-col border border-[#D3D6DB] rounded-[10px] sm:ml-1 font-montserrat">
        {products.map((item: Product) => (
          <div
            key={item.id}
            className="flex justify-around flex-wrap border-b border-[#D3D6DB] sm:px-4 py-4 hover:bg-[#F7F7F7] sm:gap-4"
          >
            <Link href={`/products/${item.slug}`}>
              <div className="w-auto lg:min-w-[612px] flex flex-col items-center sm:flex-row sm:items-start ">
                <img
                  src={item.image || "/no-image.jpg"}
                  alt={item.name}
                  className="hidden sm:block sm:w-[50px] sm:h-[50px] rounded-[5px]"
                />
                <img
                  src={item.image || "/no-image.jpg"}
                  alt={item.name}
                  className="block w-[150px] h-[150px] sm:hidden rounded-[5px]"
                />
                <Link
                  href={`/products/${item.slug}`}
                  className="max-w-[550px] mt-6 sm:mt-0 ml-2 md:ml-3 text-[12px] text-[#6F727B] font-[700] leading-[14px] hover:underline hover:underline-offset-2 hover:text-[#0A8C99]"
                >
                  {item.name}
                </Link>
              </div>
            </Link>
            <div className="flex flex-row gap-3">
              <QuickOrderSheet type="productList" productTitle={item.name} />
              {/* tel:8(708)001-68-68 */}
              <Link href="tel:+7 771 425 8484">
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
          </div>
        ))}
      </div>
      {/* Пагинация */}
      <div className="text-center">
        <div className="flex items-center justify-center mt-8 px-2">
          <Stack spacing={2}>
            <Pagination
              count={totalPages}
              variant="outlined"
              shape="rounded"
              page={page}
              onChange={handlePageChange}
            />
          </Stack>
        </div>
      </div>
    </div>
  );
};

export default ListProducts;
