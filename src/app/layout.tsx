import "./globals.css"

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
      <body>{children}</body>
    </html>
  )
}
