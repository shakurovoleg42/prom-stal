import Head from "next/head";
import Hero from "../blocks/home/Hero/Hero";
import Categories from "../blocks/home/Categories/Categories";
import About from "../blocks/home/About/About";
import Regards from "../components/Regards";
import Form from "../components/Form/Form";
import Parts from "../components/Parts/Parts";
import Partners from "../components/Partners";
import Faq from "../blocks/home/FAQ/Faq";

export default function Home() {
  return (
    <>
      <Head>
        <title>А-Промсталь - лучший металл в Казахстане</title>
        <meta
          name="description"
          content="Черный металлопрокат в Казахстане. Купить специальные стали и сплавы от производителя APS в Казахстане. Предлагаем возможность доставки нержавеющего металла в любую точку Казахстана по низким ценам"
        />
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
