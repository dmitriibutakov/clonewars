import React, {useState} from "react"
import PreferenceNav from "./PreferenceNav/PreferenceNav"
import Split from "react-split"
import CodeMirror from "@uiw/react-codemirror"
import { vscodeDark } from "@uiw/codemirror-theme-vscode"
import { javascript } from "@codemirror/lang-javascript"
import EditorFooter from "./EditorFooter"
import {Problem} from "@/utils/types/problem";

type PlaygroundProps = {
  problem: Problem
}

const Playground: React.FC<PlaygroundProps> = ({problem}) => {
 const [activeCaseId, setActiveCaseId] = useState<number>(0)
  return (
    <div className="relative flex flex-col overflow-x-hidden bg-dark-layer-1">
      <PreferenceNav />
      <Split
        className="h-[calc(100vh-144px)]"
        direction="vertical"
        sizes={[60, 40]}
        minSize={60}
      >
        <div className="w-full overflow-auto">
          <CodeMirror
            value={problem.starterCode}
            theme={vscodeDark}
            extensions={[javascript()]}
            style={{ fontSize: 16 }}
          />
        </div>
        <div className="w-full overflow-auto px-5">
          {/* testcase heading */}
          <div className="flex h-10 items-center space-x-6">
            <div className="relative flex h-full cursor-pointer flex-col justify-center">
              <div className="text-sm font-medium leading-5 text-white">
                Testcases
              </div>
              <hr className="absolute bottom-0 h-0.5 w-full rounded-full border-none bg-white" />
            </div>
          </div>

          <div className="flex">
            {problem.examples.map((example, index) => (
              <div onClick={() => setActiveCaseId(index)} className="mr-2 mt-2 items-start " key={example.id}>
                <div className="flex flex-wrap items-center gap-y-4">
                  <div
                      className={`relative inline-flex cursor-pointer items-center whitespace-nowrap rounded-lg bg-dark-fill-3 px-4 py-1 font-medium transition-all hover:bg-dark-fill-2 focus:outline-none ${activeCaseId === index ? " text-white" : "text-gray-400"}`}
                  >
                    Case {index + 1}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="my-4 font-semibold">
            <p className="mt-4 text-sm font-medium text-white">Input:</p>
            <div className="mt-2 w-full cursor-text rounded-lg border border-transparent bg-dark-fill-3 px-3 py-[10px] text-white">
              {problem.examples[activeCaseId].inputText}
            </div>
            <p className="mt-4 text-sm font-medium text-white">Output:</p>
            <div className="mt-2 w-full cursor-text rounded-lg border border-transparent bg-dark-fill-3 px-3 py-[10px] text-white">
              {problem.examples[activeCaseId].outputText}
            </div>
          </div>
        </div>
      </Split>
      <EditorFooter />
    </div>
  )
}
export default Playground
