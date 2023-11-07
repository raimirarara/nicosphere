"use client"

import { myFont } from "@/fonts/const"
import { Flex, Container, Heading, Stack, Text, Button, Icon, IconProps } from "@chakra-ui/react"

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
          ひとりひとりに本当に欲しかったものを
        </Text>
        <Stack spacing={6} direction={"row"}></Stack>
        <Flex w={"full"}></Flex>
      </Stack>
    </Container>
  )
}
