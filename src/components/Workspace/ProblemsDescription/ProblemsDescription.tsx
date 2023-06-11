import { AiFillLike, AiFillDislike } from "react-icons/ai"
import { BsCheck2Circle } from "react-icons/bs"
import { TiStarOutline } from "react-icons/ti"

type ProblemDescriptionProps = {}

const ProblemDescription: React.FC<ProblemDescriptionProps> = () => {
  return (
    <div className="bg-dark-layer-1">
      {/* TAB */}
      <div className="flex h-11 w-full items-center overflow-x-hidden bg-dark-layer-2 pt-2 text-white">
        <div
          className={
            "cursor-pointer rounded-t-[5px] bg-dark-layer-1 px-5 py-[10px] text-xs"
          }
        >
          Description
        </div>
      </div>

      <div className="flex h-[calc(100vh-94px)] overflow-y-auto px-0 py-4">
        <div className="px-5">
          {/* Problem heading */}
          <div className="w-full">
            <div className="flex space-x-4">
              <div className="mr-2 flex-1 text-lg font-medium text-white">
                1. Two Sum
              </div>
            </div>
            <div className="mt-3 flex items-center">
              <div
                className={`inline-block rounded-[21px] bg-olive bg-opacity-[.15] px-2.5 py-1 text-xs font-medium capitalize text-olive `}
              >
                Easy
              </div>
              <div className="text-green-s ml-4 rounded p-[3px] text-lg text-dark-green-s transition-colors duration-200">
                <BsCheck2Circle />
              </div>
              <div className="ml-4 flex cursor-pointer items-center space-x-1 rounded p-[3px]  text-lg text-dark-gray-6 transition-colors duration-200 hover:bg-dark-fill-3">
                <AiFillLike />
                <span className="text-xs">120</span>
              </div>
              <div className="text-green-s ml-4 flex cursor-pointer items-center space-x-1 rounded  p-[3px] text-lg text-dark-gray-6 transition-colors duration-200 hover:bg-dark-fill-3">
                <AiFillDislike />
                <span className="text-xs">2</span>
              </div>
              <div className="text-green-s ml-4  cursor-pointer rounded  p-[3px] text-xl text-dark-gray-6 transition-colors duration-200 hover:bg-dark-fill-3 ">
                <TiStarOutline />
              </div>
            </div>

            {/* Problem Statement(paragraphs) */}
            <div className="text-sm text-white">
              <p className="mt-3">
                Given an array of integers <code>nums</code> and an integer{" "}
                <code>target</code>, return
                <em>
                  indices of the two numbers such that they add up to
                </em>{" "}
                <code>target</code>.
              </p>
              <p className="mt-3">
                You may assume that each input would have{" "}
                <strong>exactly one solution</strong>, and you may not use
                thesame element twice.
              </p>
              <p className="mt-3">You can return the answer in any order.</p>
            </div>

            {/* Examples */}
            <div className="mt-4">
              {/* Example 1 */}
              <div>
                <p className="font-medium text-white ">Example 1: </p>
                <div className="example-card">
                  <pre>
                    <strong className="text-white">Input: </strong> nums =
                    [2,7,11,15], target = 9 <br />
                    <strong>Output:</strong> [0,1] <br />
                    <strong>Explanation:</strong>Because nums[0] + nums[1] == 9,
                    we return [0, 1].
                  </pre>
                </div>
              </div>

              {/* Example 2 */}
              <div>
                <p className="font-medium text-white ">Example 2: </p>
                <div className="example-card">
                  <pre>
                    <strong className="text-white">Input: </strong> nums =
                    [3,2,4], target = 6 <br />
                    <strong>Output:</strong> [1,2] <br />
                    <strong>Explanation:</strong>Because nums[1] + nums[2] == 6,
                    we return [1, 2].
                  </pre>
                </div>
              </div>
              {/* Example 3 */}
              <div>
                <p className="font-medium text-white ">Example 3: </p>
                <div className="example-card">
                  <pre>
                    <strong className="text-white">Input: </strong> nums =
                    [3,3], target = 6
                    <br />
                    <strong>Output:</strong> [0,1] <br />
                  </pre>
                </div>
              </div>
            </div>

            {/* Constraints */}
            <div className="my-5">
              <div className="text-sm font-medium text-white">Constraints:</div>
              <ul className="ml-5 list-disc text-white">
                <li className="mt-2">
                  <code>2 ≤ nums.length ≤ 10</code>
                </li>

                <li className="mt-2">
                  <code>-10 ≤ nums[i] ≤ 10</code>
                </li>
                <li className="mt-2">
                  <code>-10 ≤ target ≤ 10</code>
                </li>
                <li className="mt-2 text-sm">
                  <strong>Only one valid answer exists.</strong>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ProblemDescription
