import React from "react"
import Split from "react-split"
import ProblemDescription from "./ProblemsDescription/ProblemsDescription"
import Playground from "./Playground/Playground"
import { Problem } from "@/utils/types/problem"

type WorkspaceProps = {
  problem: Problem
}

const Workspace: React.FC<WorkspaceProps> = ({problem}) => {
  return (
    <div>
      <Split className="split" minSize={0}>
        <ProblemDescription problem={problem} />
        <Playground problem={problem} />
      </Split>
    </div>
  )
}
export default Workspace
