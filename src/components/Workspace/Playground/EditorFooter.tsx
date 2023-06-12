import React from "react"
import { BsChevronUp } from "react-icons/bs"

type EditorFooterProps = {
  handleSubmit?: () => void
}

const EditorFooter: React.FC<EditorFooterProps> = ({ handleSubmit }) => {
  return (
    <div className="absolute bottom-0 z-10 flex w-full bg-dark-layer-1">
      <div className="mx-5 my-[10px] flex w-full justify-between">
        <div className="mr-2 flex flex-1 flex-nowrap items-center space-x-4">
          <button className="inline-flex items-center rounded-lg bg-dark-fill-3 px-3 py-1.5 pl-3 pr-2 text-sm font-medium text-dark-label-2 transition-all hover:bg-dark-fill-2">
            Console
            <div className="ml-1 flex transform items-center transition">
              <BsChevronUp className="fill-gray-6 mx-1 fill-dark-gray-6" />
            </div>
          </button>
        </div>
        <div className="ml-auto flex items-center space-x-4">
          <button
            className="inline-flex items-center whitespace-nowrap rounded-lg bg-dark-fill-3 px-3 py-1.5 text-sm font-medium text-dark-label-2  transition-all hover:bg-dark-fill-2 focus:outline-none"
            onClick={handleSubmit}
          >
            Run
          </button>
          <button
            className="hover:bg-green-3 inline-flex items-center rounded-lg bg-dark-green-s px-3 py-1.5 text-sm font-medium text-white transition-all focus:outline-none"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  )
}
export default EditorFooter
