import React from "react"
import ProblemsDescription from "./ProblemsDescription/ProblemsDescription"
import Split from "react-split"

type WorkspaceProps = {}

const Workspace: React.FC<WorkspaceProps> = () => {
  return (
    <div>
      <Split className='split' minSize={0}>
        <ProblemsDescription />
        <div> some code workspace</div>
      </Split>
    </div>
  )
}
export default Workspace
