import { problems } from "@/mockProblems/problems"
import React from "react"
import { BsCheckCircle } from "react-icons/bs"
import { AiFillGithub } from "react-icons/ai"
import Link from "next/link"

type ProblemsTableProps = {}

const ProblemsTable: React.FC<ProblemsTableProps> = ({}) => {
  const tableHeader = ["Status", "Title", "Difficulty", "Category", "Solution"]
  return (
    <table className="mx-auto w-full max-w-[1200px] text-left text-sm text-gray-500 dark:text-gray-400 sm:w-7/12">
      <thead className="border-b text-xs uppercase text-gray-700 dark:text-gray-400 ">
        <tr>
          {tableHeader.map((name: string, id: number) => (
            <th key={id} scope="col" className="px-1 py-2 font-medium">
              {name}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="text-white">
        {problems.map((problem, idx) => {
          const difficulyColor =
            problem.difficulty === "Easy"
              ? "text-dark-green-s"
              : problem.difficulty === "Medium"
              ? "text-dark-yellow"
              : "text-dark-pink"
          return (
            <tr
              className={`${idx % 2 == 1 ? "bg-dark-layer-1" : ""}`}
              key={problem.id}
            >
              <th className="whitespace-nowrap px-1 py-2 font-medium text-dark-green-s">
                <BsCheckCircle fontSize={18} width="18" />
              </th>
              <td className="px-1 py-2">
                <Link
                  className="hover:text-blue-600"
                  href={`problems/${problem.id}`}
                >
                  {problem.title}
                </Link>
              </td>
              <td className={`px-1 py-2 ${difficulyColor}`}>
                {problem.difficulty}
              </td>
              <td className={"px-1 py-2"}>{problem.category}</td>
              <td className={"px-1 py-2"}>
                {problem.link ? (
                  <a
                    target="_blank"
                    href={
                      "https://github.com/dmitrybutakov/codewars/blob/main/" +
                      problem.link
                    }
                  >
                    <AiFillGithub />
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
