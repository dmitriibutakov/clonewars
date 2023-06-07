import RecoilRootWrapper from "@/wrappers/RecoilRootWrapper"
import "./globals.css"
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil"

export const metadata = {
  title: "Cleet Code",
  description: "Clone of leetcode",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <RecoilRootWrapper>{children}</RecoilRootWrapper>
      </body>
    </html>
  )
}
