import React from "react"
import Split from "react-split"
import ProblemDescription from "./ProblemsDescription/ProblemsDescription"
import Playground from "../Playground/Playground"

type WorkspaceProps = {}

const Workspace: React.FC<WorkspaceProps> = () => {
  return (
    <div>
      <Split className="split" minSize={0}>
        <ProblemDescription />
        <Playground />
      </Split>
    </div>
  )
}
export default Workspace
