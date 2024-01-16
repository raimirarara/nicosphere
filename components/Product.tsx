"use client"

import { myFont } from "@/fonts/const"
import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Icon,
  IconButton,
  createIcon,
  IconProps,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react"
import Link from "next/link"
import { FaInstagram } from "react-icons/fa"

export default function Product() {
  return (
    <Container maxW={"7xl"}>
      <Heading textAlign={"center"}>開発実績</Heading>
      <Stack
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: "column", md: "row" }}
      >
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading lineHeight={1.1} fontWeight={600} fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}>
            <Text
              className={myFont.className}
              as={"span"}
              position={"relative"}
              _after={{
                content: "''",
                width: "full",
                height: "30%",
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "red.400",
                zIndex: -1,
              }}
            >
              生成AI関連 4件
            </Text>
          </Heading>
          <Text fontSize={{ base: "md", sm: "xl" }} color={"gray.800"}>
            生成AIを用いたサービスを4件開発しました。
            <br></br>
            生成AI + 音声クローン + 決済機能 + LINE botの開発 2件, 生成AI + 飲食店のモバイルオーダー, 生成AI +
            音声クローン技術を使用したwebサービス
            <br></br>
            全て本番運用されています。
          </Text>
        </Stack>
      </Stack>
      <Stack
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: "column", md: "row" }}
      >
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading lineHeight={1.1} fontWeight={600} fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}>
            <Text
              className={myFont.className}
              as={"span"}
              position={"relative"}
              _after={{
                content: "''",
                width: "full",
                height: "30%",
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "red.400",
                zIndex: -1,
              }}
            >
              otakuframe
            </Text>
          </Heading>
          <Text fontSize={{ base: "md", sm: "xl" }} color={"gray.800"}>
            ひとりひとりが自分の本当に好きなポスターを作れるサービスです。スマホからポスターにしたい写真を選んで購入。あとは待つだけで、おうちに世界に一つだけのあなたが作ったポスターが届きます。
          </Text>
          <Stack spacing={{ base: 4, sm: 6 }} direction={{ base: "row", sm: "row" }} alignItems={"center"}>
            <Link href={"https://otakuframe.net/"} target="_blank">
              <Button
                rounded={"full"}
                size={"lg"}
                fontWeight={"normal"}
                px={6}
                colorScheme={"red"}
                bg={"red.400"}
                _hover={{ bg: "red.500" }}
              >
                Get started
              </Button>
            </Link>
            <Button
              bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
              rounded={"full"}
              w={14}
              h={14}
              cursor={"pointer"}
              as={"a"}
              href={"https://www.instagram.com/otaku.frame/"}
              target="_blank"
              display={"inline-flex"}
              alignItems={"center"}
              justifyContent={"center"}
              transition={"background 0.3s ease"}
              _hover={{
                bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
              }}
            >
              <VisuallyHidden>{"Instagram"}</VisuallyHidden>
              <FaInstagram size={100} />
            </Button>
          </Stack>
        </Stack>
        <Flex flex={1} justify={"center"} align={"center"} position={"relative"} w={"full"}>
          <Box
            position={"relative"}
            height={{ sm: "500px" }}
            rounded={"2xl"}
            boxShadow={"2xl"}
            width={"full"}
            overflow={"hidden"}
          >
            <Image
              alt={"Hero Image"}
              fit={"cover"}
              align={"center"}
              w={"100%"}
              h={"100%"}
              src={"/otakuframe_logo.png"}
            />
          </Box>
        </Flex>
      </Stack>
    </Container>
  )
}
