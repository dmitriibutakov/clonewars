import React, {useEffect, useState} from "react"
import {BsCheckCircle} from "react-icons/bs"
import {AiFillGithub} from "react-icons/ai"
import Link from "next/link"
import {collection, query, getDocs, orderBy} from "firebase/firestore";
import {firestore} from "@/firebase/firebase";
import {DBProblem} from "@/utils/types/problem";

type ProblemsTableProps = {
    loadingProblems: Boolean
    problems: DBProblem[]
}

const ProblemsTable: React.FC<ProblemsTableProps> = ({loadingProblems, problems}) => {
    const tableHeader = ["Status", "Title", "Difficulty", "Solution"]
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
                            <BsCheckCircle fontSize={18} width="18"/>
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
