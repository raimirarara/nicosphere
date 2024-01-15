"use client"

import sendContact from "@/actions/send-contact"
import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Text,
  Textarea,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react"
import { useState } from "react"
import { BsPerson } from "react-icons/bs"
import { MdOutlineEmail } from "react-icons/md"
import { useRouter } from "next/navigation"

export default function Form() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const router = useRouter()

  const handleOnSubmit = async (e: any) => {
    e.preventDefault()
    if (!name || !email || !message) return alert("Please fill all fields")
    await sendContact({ name, email, message })
    alert(
      "メッセージを送信いたしました。ご相談ありがとうございます。相談内容については、ご入力いただいたメールアドレス宛に返信いたします。 "
    )
    setName("")
    setEmail("")
    setMessage("")
  }
  return (
    <Box id="contact">
      <Center>
        <Box w={400} borderRadius="lg" m={{ base: 5, md: 5, lg: 5 }} p={{ base: 5, lg: 5 }}>
          <Link href="https://timerex.net/s/rai.miura_8e90/7564f841" target="_blank">
            <Button
              colorScheme="red"
              bg="red.400"
              color="white"
              _hover={{
                bg: "red.500",
              }}
              width="full"
            >
              まずは日程調整
            </Button>
          </Link>
          <Text textAlign={"center"} fontSize={{ base: "xs", md: "md" }} p={4}>
            気軽にカジュアル面談をご希望の方はこちらから日程調整をお願いします。 いろいろなご相談をお待ちしております。
          </Text>
        </Box>
      </Center>
      <Flex align="center" justify="center">
        <Box w={800} borderRadius="lg" m={{ base: 5, md: 16, lg: 10 }} px={{ base: 5, lg: 16 }}>
          <Box
            bg={useColorModeValue("white", "gray.700")}
            borderRadius="lg"
            p={8}
            color={useColorModeValue("gray.700", "whiteAlpha.900")}
            shadow="base"
          >
            <VStack spacing={5}>
              <FormControl isRequired>
                <FormLabel>Name</FormLabel>
                <InputGroup>
                  <InputLeftElement>
                    <BsPerson />
                  </InputLeftElement>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </InputGroup>
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Email</FormLabel>

                <InputGroup>
                  <InputLeftElement>
                    <MdOutlineEmail />
                  </InputLeftElement>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </InputGroup>
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Message</FormLabel>

                <Textarea
                  name="message"
                  placeholder="相談内容: 例) 〇〇のサービスを作りたいです。〇〇のサービスだと費用はいくらでできますか？"
                  rows={6}
                  resize="none"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </FormControl>

              <Button
                colorScheme="red"
                bg="red.400"
                color="white"
                _hover={{
                  bg: "red.500",
                }}
                width="full"
                onClick={handleOnSubmit}
              >
                Send Message
              </Button>
            </VStack>
          </Box>
        </Box>
      </Flex>
    </Box>
  )
}
