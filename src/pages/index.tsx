import Hero from "../blocks/home/Hero/Hero";
import Categories from "../blocks/home/Categories/Categories";
import About from "../blocks/home/About/About";
import Regards from "../components/Regards";
import Form from "../components/Form/Form";
import Parts from "../components/Parts/Parts";
import Partners from "../blocks/home/Partners/Partners";
import Faq from "../blocks/home/FAQ/Faq";

export default function Home() {
  return (
    <>
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
