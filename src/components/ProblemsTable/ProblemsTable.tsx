import React, {useEffect, useState} from "react"
import {BsCheckCircle} from "react-icons/bs"
import {AiFillGithub} from "react-icons/ai"
import Link from "next/link"
import {doc, getDoc} from "firebase/firestore";
import {auth, firestore} from "@/firebase/firebase";
import {DBProblem} from "@/utils/types/problem";
import {useAuthState} from "react-firebase-hooks/auth";

type ProblemsTableProps = {
    setLoadingProblems: React.Dispatch<React.SetStateAction<boolean>>
    loadingProblems: Boolean,
    problems: DBProblem[]
}

const ProblemsTable: React.FC<ProblemsTableProps> = ({problems, loadingProblems}) => {
    const tableHeader = ["Status", "Title", "Difficulty", "Solution"]
    const solvedProblems = useGetSolvedProblems();
    return (
        <table className="mx-auto w-full max-w-[1200px] text-left text-sm text-gray-500 dark:text-gray-400 sm:w-7/12">
            {!loadingProblems && (<thead className="border-b text-xs uppercase text-gray-700 dark:text-gray-400 ">
            <tr>
                {tableHeader.map((name: string, id: number) => (
                    <th key={id} scope="col" className="px-2 py-4 font-medium">
                        {name}
                    </th>
                ))}
            </tr>
            </thead>)}
            <tbody className="text-white">
            {problems.map((problem, idx) => {
                const difficulyColor =
                    problem.difficulty >= 7
                        ? "text-dark-green-s"
                        : problem.difficulty < 7 && problem.difficulty > 5
                            ? "text-dark-yellow"
                            : "text-dark-pink"
                return (
                    <tr
                        className={`${idx % 2 == 1 ? "bg-dark-layer-1" : ""}`}
                        key={problem.id}
                    >
                        <th className="whitespace-nowrap px-2 py-4 font-medium text-dark-green-s">
                            {solvedProblems.includes(problem.id) && <BsCheckCircle fontSize={"18"} width='18' />}
                        </th>
                        <td className="px-2 py-4">
                            <Link
                                className="hover:text-blue-600"
                                href={`problems/${problem.id}`}
                            >
                                {problem.title}
                            </Link>
                        </td>
                        <td className={`px-1 py-2 ${difficulyColor}`}>
                            {problem.difficulty} kyu
                        </td>
                        <td className={"px-1 py-2"}>
                            {problem.link ? (
                                <a
                                    target="_blank"
                                    href={problem.link}
                                >
                                    <AiFillGithub/>
                                </a>
                            ) : (
                                <p className="text-gray-400">Coming soon</p>
                            )}
                        </td>
                    </tr>
                )
            })}
            </tbody>
        </table>
    )
}

export default ProblemsTable

function useGetSolvedProblems() {
    const [solvedProblems, setSolvedProblems] = useState<string[]>([]);
    const [user] = useAuthState(auth);

    useEffect(() => {
        const getSolvedProblems = async () => {
            const userRef = doc(firestore, "users", user!.uid);
            const userDoc = await getDoc(userRef);

            if (userDoc.exists()) {
                setSolvedProblems(userDoc.data().solvedProblems);
            }
        };

        if (user) getSolvedProblems();
        if (!user) setSolvedProblems([]);
    }, [user]);

    return solvedProblems;
}
