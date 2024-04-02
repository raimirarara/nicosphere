"use client"

import { myFont } from "@/fonts/const"
import { Flex, Container, Heading, Stack, Text, Button, Icon, IconProps, Center, Box, Image } from "@chakra-ui/react"
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
        <Flex w={"full"}>
          <Stack mx={8} w={"50%"}>
            <Text fontWeight={600} fontSize={{ base: "xl", sm: "xl", md: "2xl" }} textAlign={"start"}>
              生成AIを使ったWebサービス開発,モバイルアプリ開発を最短2週間で実現
            </Text>
            <Center flexDir={"column"}>
              <Text my={4} fontWeight={200} fontSize={{ base: "xl", sm: "xl", md: "xl" }}>
                システム開発に関するお悩み等、お気軽にご相談ください。
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
            </Center>
          </Stack>
          <Flex flex={1} justify={"center"} align={"center"} position={"relative"} w={"50%"}>
            <Box
              position={"relative"}
              height={{ sm: "300px" }}
              rounded={"2xl"}
              boxShadow={"2xl"}
              width={"full"}
              overflow={"hidden"}
            >
              <Image alt={"Hero Image"} fit={"cover"} align={"center"} w={"100%"} h={"100%"} src={"/hero.webp"} />
            </Box>
          </Flex>
        </Flex>

        <Text fontWeight={200} fontSize={{ base: "sm", sm: "sm", md: "md" }}>
          株式会社nicosphereは、「ひとりひとりに本当に欲しかったものを」をモットーに、Webサービスの企画・開発・運用を行う会社です。
        </Text>
      </Stack>
    </Container>
  )
}
