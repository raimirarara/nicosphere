"use client"

import { Box, Center, Container, Flex, Image, Stack, Text } from "@chakra-ui/react"
import TypeWriter from "./TypeWriter"

export default function Hero() {
  return (
    <Box>
      <Center w={"full"} bgColor={"#3e3e3e"} height={{ base: 200, md: 300 }}>
        <TypeWriter content="nicosphere" />
      </Center>
      <Container maxW={"5xl"}>
        <Stack textAlign={"center"} align={"center"} spacing={{ base: 8, md: 10 }} py={{ base: 20, md: 28 }}>
          <Flex w={"full"}>
            <Stack mx={8} w={{ base: "full", md: "50%" }}>
              <Text fontWeight={600} fontSize={{ base: "xl", sm: "xl", md: "2xl" }} textAlign={"start"}>
                生成AIを使ったWebサービス開発,モバイルアプリ開発を最短2週間で実現
              </Text>
              <Center flexDir={"column"}>
                <Text my={4} fontWeight={200} fontSize={{ base: "xl", sm: "xl", md: "xl" }}>
                  システム開発に関するお悩み等、お気軽にご相談ください。
                </Text>
                {/* <Stack spacing={6} direction={"row"}>
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
                </Stack> */}
              </Center>
            </Stack>
            <Flex
              flex={1}
              justify={"center"}
              align={"center"}
              position={"relative"}
              w={"50%"}
              display={{ base: "none", md: "block" }}
            >
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
    </Box>
  )
}
