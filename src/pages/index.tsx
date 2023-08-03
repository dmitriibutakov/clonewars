import ProblemsTable from "@/components/ProblemsTable/ProblemsTable"
import Topbar from "@/components/Topbar/Topbar"
import React from "react"

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-layer-2">
      <Topbar />
      <h1 className="mb-5 mt-10 text-center text-2xl font-medium uppercase text-gray-700 dark:text-gray-400">
        test your knowledge in javascript
      </h1>

      <div className="relative px-6 pb-10 flex min-h-[70vh] items-center justify-center">
        <ProblemsTable />
      </div>
    </main>
  )
}
const LoadingSkeleton = () => {
    return (
        <div className="flex items-center space-x-12 mt-4 px-6">
            <div className="w-6 h-6 shrink-0 rounded-full bg-dark-layer-1"></div>
            <div className="h-4 sm:w-52  w-32  rounded-full bg-dark-layer-1"></div>
            <div className="h-4 sm:w-52  w-32 rounded-full bg-dark-layer-1"></div>
            <div className="h-4 sm:w-52 w-32 rounded-full bg-dark-layer-1"></div>
            <span className="sr-only">Loading...</span>
        </div>
    );
};

