import Image from "next/image"
import styles from "./page.module.css"
import Hero from "@/components/Hero"
import Footer from "@/components/Footer"
import { Box, Divider, Heading, Spacer, Text } from "@chakra-ui/react"
import Product from "@/components/Product"
import { myFont } from "@/fonts/const"
import Link from "next/link"

export default function Company() {
  return (
    <div>
      <title>Company | 株式会社nicosphere</title>
      <Box w={"full"} h={"full"} background={"#F4F4F4"}>
        <Link href={"/"}>
          <Heading
            className={myFont.className}
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "6xl", md: "6xl" }}
            lineHeight={"110%"}
            boxShadow={"md"}
            p={4}
          >
            nicosphere
          </Heading>
        </Link>
        <Heading
          p={8}
          className={myFont.className}
          fontWeight={600}
          fontSize={{ base: "5xl", sm: "8xl", md: "8xl" }}
          lineHeight={"110%"}
          textAlign={"center"}
        >
          Company
        </Heading>

        <Heading
          p={8}
          className={myFont.className}
          fontWeight={300}
          fontSize={{ base: "xl", sm: "4xl", md: "4xl" }}
          lineHeight={"110%"}
          textAlign={"center"}
        >
          Profile
        </Heading>

        <Box w={"full"} py={{ base: 4, sm: 8 }} display={"flex"} alignItems={"center"} justifyContent={"center"}>
          <Text
            w={{ base: "100px", sm: "360px" }}
            textAlign={"left"}
            fontWeight={"bold"}
            fontSize={{ base: "xl", sm: "2xl" }}
          >
            会社名
          </Text>
          <Box w={30} />
          <Text w={{ base: "220px" }} textAlign={"center"} fontWeight={"medium"} fontSize={{ base: "md", sm: "xl" }}>
            株式会社nicosphere
          </Text>
        </Box>
        <Box w={"full"} pb={{ base: 4, sm: 8 }} display={"flex"} alignItems={"center"} justifyContent={"center"}>
          <Text
            w={{ base: "100px", sm: "360px" }}
            textAlign={"left"}
            fontWeight={"bold"}
            fontSize={{ base: "xl", sm: "2xl" }}
          >
            設立日
          </Text>
          <Box w={30} />
          <Text w={{ base: "220px" }} textAlign={"center"} fontWeight={"medium"} fontSize={{ base: "md", sm: "xl" }}>
            2023年12月
          </Text>
        </Box>
        <Box w={"full"} pb={{ base: 4, sm: 8 }} display={"flex"} alignItems={"center"} justifyContent={"center"}>
          <Text
            w={{ base: "100px", sm: "360px" }}
            textAlign={"left"}
            fontWeight={"bold"}
            fontSize={{ base: "xl", sm: "2xl" }}
          >
            代表者
          </Text>
          <Box w={30} />
          <Text w={{ base: "220px" }} textAlign={"center"} fontWeight={"medium"} fontSize={{ base: "md", sm: "xl" }}>
            代表取締役 三浦 莉
          </Text>
        </Box>
        <Box w={"full"} pb={{ base: 4, sm: 8 }} display={"flex"} alignItems={"center"} justifyContent={"center"}>
          <Text
            w={{ base: "100px", sm: "360px" }}
            textAlign={"left"}
            fontWeight={"bold"}
            fontSize={{ base: "xl", sm: "2xl" }}
          >
            所在地
          </Text>
          <Box w={30} />
          <Text w={{ base: "220px" }} textAlign={"center"} fontWeight={"medium"} fontSize={{ base: "sm", sm: "sm" }}>
            〒158-0094 東京都世田谷区玉川3-36-6
          </Text>
        </Box>

        <Footer />
      </Box>
    </div>
  )
}
