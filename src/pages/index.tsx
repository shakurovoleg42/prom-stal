import Head from "next/head"
import Hero from "../blocks/home/Hero/Hero"
import Categories from "../blocks/home/Categories/Categories"

export default function Home() {
    return (
      <>
        <Head>
          <title>А-Промсталь - лучший металл в Казахстане</title>
        </Head>
        <Hero/>
        <Categories />
      </>
    )
  }