import Topbar from "@/components/Topbar/Topbar"
import Workspace from "@/components/Workspace/Workspace"
import React from "react"

type pageProps = {}

const page: React.FC<pageProps> = () => {
  return (
    <div>
      <Topbar problemsPage />
      <Workspace />
    </div>
  )
}
export default page
