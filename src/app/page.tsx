import Table from "@/components/Table/Table"
import Topbar from "@/components/Topbar/Topbar"
import React, { useEffect } from "react"

type indexProps = {}

const index: React.FC<indexProps> = () => {
  return (
    <main className="min-h-screen bg-dark-layer-2">
      <Topbar />
      <h1 className="mb-5 mt-10 text-center text-2xl font-medium uppercase text-gray-700 dark:text-gray-400">
        test your knowledge in javascript
      </h1>

      <div className="relative mx-auto overflow-x-auto px-6 pb-10">
        <Table />
      </div>
    </main>
  )
}
export default index
