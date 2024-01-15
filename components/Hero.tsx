"use client"

import { myFont } from "@/fonts/const"
import { Flex, Container, Heading, Stack, Text, Button, Icon, IconProps } from "@chakra-ui/react"
import Link from "next/link"

export default function Hero() {
  return (
    <Container maxW={"5xl"}>
      <Stack textAlign={"center"} align={"center"} spacing={{ base: 8, md: 10 }} py={{ base: 20, md: 28 }}>
        <Heading
          className={myFont.className}
          fontWeight={600}
          fontSize={{ base: "5xl", sm: "8xl", md: "8xl" }}
          lineHeight={"110%"}
        >
          nicosphere
        </Heading>
        <Text fontWeight={600} fontSize={{ base: "3xl", sm: "3xl", md: "3xl" }}>
          開発に困ったら、ニコスフィア。
        </Text>
        <Text fontWeight={200} fontSize={{ base: "xl", sm: "xl", md: "xl" }}>
          株式会社nicosphereは、「ひとりひとりに本当に欲しかったものを」をモットーに、Webサービスの企画・開発・運用を行う会社です。
        </Text>
        <Text fontWeight={200} fontSize={{ base: "xl", sm: "xl", md: "xl" }}>
          もう高額な開発費用に悩まされることはありません。<br></br>ニコスフィアは、
          <Text fontWeight={600}>「業界最安値 + 最速の開発スピード」</Text>あなたのアイデアやサービスを実現します。
        </Text>
        <Stack spacing={6} direction={"row"}>
          <Link href={"/contact"} target="_blank">
            <Button
              rounded={"full"}
              size={"lg"}
              fontWeight={"normal"}
              px={6}
              colorScheme={"red"}
              bg={"red.400"}
              _hover={{ bg: "red.500" }}
            >
              まずは相談
            </Button>
          </Link>
        </Stack>
        <Flex w={"full"}></Flex>
      </Stack>
    </Container>
  )
}
