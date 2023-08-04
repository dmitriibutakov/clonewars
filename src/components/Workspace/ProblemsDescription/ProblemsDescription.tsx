import {AiFillLike, AiFillDislike} from "react-icons/ai"
import {BsCheck2Circle} from "react-icons/bs"
import {TiStarOutline} from "react-icons/ti"
import {Problem} from "@/utils/types/problem";
import React from "react";

type ProblemDescriptionProps = {
    problem: Problem
}

const ProblemDescription: React.FC<ProblemDescriptionProps> = ({problem}) => {
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
                                {problem.title}
                            </div>
                        </div>
                        <div className="mt-3 flex items-center">
                            <div
                                className={`inline-block rounded-[21px] bg-olive bg-opacity-[.15] px-2.5 py-1 text-xs font-medium capitalize text-olive `}
                            >
                                Easy
                            </div>
                            <div
                                className="text-green-s ml-4 rounded p-[3px] text-lg text-dark-green-s transition-colors duration-200">
                                <BsCheck2Circle/>
                            </div>
                            <div
                                className="ml-4 flex cursor-pointer items-center space-x-1 rounded p-[3px]  text-lg text-dark-gray-6 transition-colors duration-200 hover:bg-dark-fill-3">
                                <AiFillLike/>
                                <span className="text-xs">120</span>
                            </div>
                            <div
                                className="text-green-s ml-4 flex cursor-pointer items-center space-x-1 rounded  p-[3px] text-lg text-dark-gray-6 transition-colors duration-200 hover:bg-dark-fill-3">
                                <AiFillDislike/>
                                <span className="text-xs">2</span>
                            </div>
                            <div
                                className="text-green-s ml-4  cursor-pointer rounded  p-[3px] text-xl text-dark-gray-6 transition-colors duration-200 hover:bg-dark-fill-3 ">
                                <TiStarOutline/>
                            </div>
                        </div>

                        {/* Problem Statement(paragraphs) */}
                        <div className="text-white" dangerouslySetInnerHTML={
                            {__html: problem.problemStatement}
                        }/>

                        {/* Examples */}
                        <div className="mt-4">
                            {problem.examples.map((example, index) => (
                                <div key={example.id}>
                                    <p className="font-medium text-white ">Example {problem.examples.length > 1 && index + 1}: </p>
                                    {example.img && (
                                        <img className="mt-3" src={example.img} alt={example.id.toString()}/>
                                    )}
                                    <div className="example-card">
                  <pre>
                      <p className="mb-2">
                    <strong className="text-white">Input: </strong> {example.inputText}
                          </p>
                         <p className="mb-2">
                    <strong>Output:</strong>{example.outputText} <br/>
                         </p>
                         <p className="mb-2">
                      {example.explanation &&
                          <>
                              <strong>Explanation:</strong> {example.explanation}
                          </>}
                         </p>
                  </pre>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Constraints */}
                        <div className="pb-4">
                            <div className=" font-medium text-white">Constraints:</div>
                            <ul className="ml-5 list-disc text-white">
                                <div dangerouslySetInnerHTML={{__html: problem.constraints}}></div>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProblemDescription
