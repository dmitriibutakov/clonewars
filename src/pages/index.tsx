import ProblemsTable from "@/components/ProblemsTable/ProblemsTable"
import Topbar from "@/components/Topbar/Topbar"
import React, {useEffect, useState} from "react"
import {DBProblem} from "@/utils/types/problem";
import {collection, getDocs, orderBy, query} from "firebase/firestore";
import {firestore} from "@/firebase/firebase";
import {problems} from "@/utils/problems";

export default function Home() {
    const [loadingProblems, setLoadingProblems] = useState(true)
    const DBproblems = useGetProblems(setLoadingProblems)
    return (
        <main className="min-h-screen bg-dark-layer-2">
            <Topbar/>
            <h1 className="mb-16 mt-10 text-center text-2xl font-medium uppercase text-gray-700 dark:text-gray-400">
                test your knowledge in javascript
            </h1>

            <div className="relative px-6 pb-10 flex-col min-h-[70vh] items-center justify-center">
                {loadingProblems && Object.keys(problems).map((_, idx) => (
                    <div key={idx} className="animate-pulse">
                        <LoadingSkeleton/>
                    </div>
                ))}
                <ProblemsTable loadingProblems={loadingProblems} problems={DBproblems}/>
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

function useGetProblems(setLoadingProblems: React.Dispatch<React.SetStateAction<boolean>>) {
    const [problems, setProblems] = useState<DBProblem[]>([]);

    useEffect(() => {
        const getProblems = async () => {
            // fetching data logic
            setLoadingProblems(true);
            const q = query(collection(firestore, "problems"), orderBy("order", "asc"));
            const querySnapshot = await getDocs(q);
            const tmp: DBProblem[] = [];
            querySnapshot.forEach((doc) => {
                tmp.push({id: doc.id, ...doc.data()} as DBProblem);
            });
            setProblems(tmp);
            setLoadingProblems(false);
        };

        getProblems();
    }, [setLoadingProblems]);
    return problems;
}

