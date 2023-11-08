import { Box, Divider, Heading, Spacer, Text } from "@chakra-ui/react"
import { myFont } from "@/fonts/const"
import Form from "@/components/Form"
import Footer from "@/components/Footer"

export default function Company() {
  return (
    <div>
      <title>Company | 株式会社nicosphere</title>
      <Box w={"full"} h={"full"} background={"#F4F4F4"}>
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
        <Heading
          p={8}
          className={myFont.className}
          fontWeight={600}
          fontSize={{ base: "5xl", sm: "8xl", md: "8xl" }}
          lineHeight={"110%"}
          textAlign={"center"}
        >
          Contact
        </Heading>

        <Form />

        <Footer />
      </Box>
    </div>
  )
}
