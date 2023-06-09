import { tasks } from "@/mockTasks/tasks"
import React from "react"
import { BsCheckCircle } from "react-icons/bs"
import { AiFillGithub } from "react-icons/ai"

type ProblemsTableProps = {}

const Table: React.FC<ProblemsTableProps> = ({}) => {
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
        {tasks.map((task, idx) => {
          const difficulyColor =
            task.difficulty === "Easy"
              ? "text-dark-green-s"
              : task.difficulty === "Medium"
              ? "text-dark-yellow"
              : "text-dark-pink"
          return (
            <tr
              className={`${idx % 2 == 1 ? "bg-dark-layer-1" : ""}`}
              key={task.id}
            >
              <th className="whitespace-nowrap px-1 py-2 font-medium text-dark-green-s">
                <BsCheckCircle fontSize={18} width="18" />
              </th>
              <td className="px-1 py-2">{task.title}</td>
              <td className={`px-1 py-2 ${difficulyColor}`}>
                {task.difficulty}
              </td>
              <td className={"px-1 py-2"}>{task.category}</td>
              <td className={"px-1 py-2"}>
                {task.link ? (
                  <a
                    target="_blank"
                    href={
                      "https://github.com/dmitrybutakov/codewars/blob/main/" +
                      task.link
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
export default Table
