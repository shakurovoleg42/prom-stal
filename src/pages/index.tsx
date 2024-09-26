import Head from "next/head";
import Hero from "../blocks/home/Hero/Hero";
import Categories from "../blocks/home/Categories/Categories";
import About from "../blocks/home/About/About";
import Regards from "../blocks/home/Regards/Regards";
import Form from "../components/Form/Form";
import Parts from "../components/Parts/Parts";
import Partners from "../blocks/home/Partners/Partners";
import Faq from "../blocks/home/FAQ/Faq";

export default function Home() {
  return (
    <>
      <Head>
        <title>А-Промсталь - лучший металл в Казахстане</title>
      </Head>
      <Hero />
      <Categories />
      <About />
      <Regards />
      <Form />
      <Parts />
      <Partners />
      <Faq />
    </>
  );
}
