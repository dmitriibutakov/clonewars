import ProblemsTable from "@/components/ProblemsTable/ProblemsTable"
import Topbar from "@/components/Topbar/Topbar"
import React, {useState} from "react"
import {problems} from "@/mockProblems/problems";

export default function Home() {
    const [loadingProblems, setLoadingProblems] = useState(true)
    setTimeout(() => {
        setLoadingProblems(false)
    }, 1000)
    return (
        <main className="min-h-screen bg-dark-layer-2">
            <Topbar/>
            <h1 className="mb-16 mt-10 text-center text-2xl font-medium uppercase text-gray-700 dark:text-gray-400">
                test your knowledge in javascript
            </h1>

            <div className="relative px-6 pb-10 flex-col min-h-[70vh] items-center justify-center">
                {loadingProblems && problems.map((problem, idx) => (
                    <div key={problem.id} className="animate-pulse">
                        <LoadingSkeleton/>
                    </div>
                ))}
                <ProblemsTable loadingProblems={loadingProblems} setLoadingProblems={setLoadingProblems} />
            </div>
        </main>
    )
}
const LoadingSkeleton = () => {
    return (
        <div className="flex items-center justify-center space-x-12 mt-4 px-6">
            <div className="w-6 h-6 shrink-0 rounded-full bg-dark-layer-1"></div>
            <div className="h-4 sm:w-52  w-32  rounded-full bg-dark-layer-1"></div>
            <div className="h-4 sm:w-52  w-32 rounded-full bg-dark-layer-1"></div>
            <div className="h-4 sm:w-52 w-32 rounded-full bg-dark-layer-1"></div>
            <span className="sr-only">Loading...</span>
        </div>
    );
};

