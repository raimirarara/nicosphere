import Image from "next/image"
import styles from "./page.module.css"
import Hero from "@/components/Hero"
import Footer from "@/components/Footer"
import { Box } from "@chakra-ui/react"
import Product from "@/components/Product"

export default function Home() {
  return (
    <div>
      <title>株式会社nicosphere</title>
      <meta
        name="description"
        content="株式会社nicosphereは、「ひとりひとりに本当に欲しかったものを」をモットーに、Webサービスの企画・開発・運用を行う会社です。"
      />
      <Box background={"#F4F4F4"}>
        <Hero />
        <Product />
        <Footer />
      </Box>
    </div>
  )
}
