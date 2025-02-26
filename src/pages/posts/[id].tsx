import { GetServerSideProps } from "next";
import { Container } from "@/src/components/Container";
import React from "react";

interface SingleNewsProps {
  id: number;
  title: string;
  shortDescription: string;
  description: string;
  image: string;
}

const SingleNews = ({
  title,
  shortDescription,
  description,
  image,
}: SingleNewsProps) => {
  return (
    <>
      <div
        className="flex w-full h-auto min-h-[35vh] lg:min-h-[589px] bg-cover bg-center text-white mt-5 font-montserrat rounded-b-sm"
        style={{ backgroundImage: `url(${image})`, backgroundSize: "cover" }}
      >
        <Container className="items-left py-[100px] flex flex-col gap-8 text-center px-6">
          <h1
            className="text-[2rem] leading-normal font-[700] lg:text-[56px] text-white stroke-black"
            style={{ WebkitTextStroke: "1px black" }}
          >
            {title}
          </h1>
          <span
            className="text-[1.5rem] leading-normal font-[800] lg:text-[22px] text-white stroke-black "
            style={{ WebkitTextStroke: "0.65px black" }}
          >
            {shortDescription}
          </span>
        </Container>
      </div>
      <Container className="py-10 px-4">
        <div
          className="flex flex-col gap-8"
          dangerouslySetInnerHTML={{ __html: description }}
        />

        {/* <p className="text-[1rem] leading-normal font-[700] lg:text-[22px] text-center">
            {description}
          </p> */}
      </Container>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id } = params as { id: string };

  const response = await fetch(`${process.env.NEXT_PUBLIC_API}/article/${id}`);
  if (!response.ok) {
    return { notFound: true };
  }

  const jsonResponse = await response.json();
  const news = jsonResponse.data;

  return {
    props: {
      id: news.id ?? null,
      title: news.title ?? "",
      shortDescription: news.short_description ?? "",
      description: news.description ?? "",
      image: news.image ?? "/no-image.jpg",
    },
  };
};

export default SingleNews;
