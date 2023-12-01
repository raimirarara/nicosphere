import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Providers } from "./providers"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "株式会社nicosphere",
  description:
    "株式会社nicosphereは、「ひとりひとりに本当に欲しかったものを」をモットーに、Webサービスの企画・開発・運用を行う会社です。",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        {" "}
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
