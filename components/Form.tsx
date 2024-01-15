"use client"

import sendContact from "@/actions/send-contact"
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react"
import { useState } from "react"
import { BsPerson } from "react-icons/bs"
import { MdOutlineEmail } from "react-icons/md"

export default function Form() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleOnSubmit = async (e: any) => {
    e.preventDefault()
    if (!name || !email || !message) return alert("Please fill all fields")
    await sendContact({ name, email, message })
  }

  return (
    <Flex align="center" justify="center" id="contact">
      <Box w={800} borderRadius="lg" m={{ base: 5, md: 16, lg: 10 }} p={{ base: 5, lg: 16 }}>
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
                <Input type="text" name="name" placeholder="Your Name" onChange={(e) => setName(e.target.value)} />
              </InputGroup>
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Email</FormLabel>

              <InputGroup>
                <InputLeftElement>
                  <MdOutlineEmail />
                </InputLeftElement>
                <Input type="email" name="email" placeholder="Your Email" onChange={(e) => setEmail(e.target.value)} />
              </InputGroup>
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Message</FormLabel>

              <Textarea
                name="message"
                placeholder="相談内容: 例) 〇〇のサービスを作りたいです。〇〇のサービスだと費用はいくらでできますか？"
                rows={6}
                resize="none"
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
  )
}
