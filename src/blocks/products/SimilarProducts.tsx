/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Container } from "@/src/components/Container";
import { Button } from "@/src/components/ui/button";
import React from "react";
import type { Product } from "../../pages/products/[slug]";
import Link from "next/link";
import { ChevronsRightIcon } from "lucide-react";

interface SimilarProductsProps {
  similarProduct: Product[] | null; // Define the type for similar products
}

const SimilarProducts: React.FC<SimilarProductsProps> = ({ similarProduct }) => {
  // Placeholder text when there are no products
  const placeholderText = "К сожалению, нет рекомендуемых товаров.";

  return (
    <Container className="flex items-center flex-col mb-20 font-montserrat">
      <h3 className="text-[#FFBC01] text-center text-[2rem] leading-[60px] font-bold sm:text-[60px]">
        Рекомендуемые товары
      </h3>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 mt-20 w-full">
        {similarProduct && similarProduct.length > 0 ? (
          similarProduct.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center justify-center p-4 bg-white rounded-md shadow-md w-full max-w-full"
            >
              <div className="flex flex-col items-center">
                <img
                  src={item.image || "/no-image.jpg"}
                  className="w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] object-cover rounded-md"
                  alt={item.name} // Provide descriptive alt text
                />
                <p className="text-black text-[18px] font-[700] leading-[19.3px] text-center mt-3">
                  {item.name.length > 35
                    ? `${item.name.slice(0, 35)}...`
                    : item.name}
                </p>
                <div className="text-[#999999] text-center text-[13px] font-[400] leading-[14px] mt-2">
                  <div
                    dangerouslySetInnerHTML={{
                      __html:
                        item.description.length > 69
                          ? `${item.description.slice(0, 69)}...`
                          : item.description,
                    }}
                  ></div>
                </div>
              </div>

              <Link href={`/products/${item.slug}`}>
                <Button
                  variant="contact"
                  className="group relative mt-4 text-[#FFD66C] font-bold flex items-center justify-center overflow-hidden py-1 px-4 transition-all duration-300 ease-in-out w-auto hover:w-auto"
                >
                  <span className="transition-transform duration-300 ease-in-out">
                    Перейти
                  </span>
                  <ChevronsRightIcon
                    className="ml-2 transition-transform duration-300 ease-in-out group-hover:translate-x-1" // Move the icon slightly to the right
                  />
                </Button>
              </Link>
            </div>
          ))
        ) : (
          <p className="text-center mt-4 text-gray-600">{placeholderText}</p> // Consistent rendering
        )}
      </div>
    </Container>
  );
};

export default SimilarProducts;
