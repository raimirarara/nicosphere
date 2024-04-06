import { myFont } from "@/fonts/const"
import { Heading, SlideFade } from "@chakra-ui/react"
import { useEffect, useState } from "react"

export default function TypeWriter({ content }: { content: string }) {
  const [message, setMessage] = useState(content) // streamからくるメッセージ
  const [displayText, setDisplayText] = useState<string>("") // 表示するテキスト
  const [visibleChars, setVisibleChars] = useState<string[]>(message.split(""))

  //   useEffect(() => {
  //     if (message) {
  //       let index = displayText.length
  //       const intervalId = setInterval(() => {
  //         if (index < message.length) {
  //           const currentChar = message[index] // indexとmessageをここでキャプチャ
  //           setVisibleChars((prevChars) => [...prevChars, currentChar])
  //           index += 1
  //         } else {
  //           clearInterval(intervalId)
  //         }
  //       }, 200)

  //       return () => clearInterval(intervalId) // コンポーネントのアンマウント時にintervalをクリア
  //     }
  //   }, [message])

  return (
    <>
      {visibleChars.map((char, index) => {
        return (
          <SlideFade
            in={true}
            key={index}
            transition={{
              enter: { duration: index * 0.25, ease: "backOut" },
            }}
          >
            <Heading
              className={myFont.className}
              fontWeight={600}
              fontSize={{ base: "5xl", sm: "8xl", md: "8xl" }}
              lineHeight={"110%"}
              color={"white"}
            >
              {char}
            </Heading>
          </SlideFade>
        )
      })}
    </>
  )
}
