import React from "react"

type InputProps = {
  id: string
  placeholder: string
  text: string
  value: string
  inputCallback: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input: React.FC<InputProps> = ({
  id,
  placeholder,
  text,
  inputCallback,
}) => {
  return (
    <>
      <label
        htmlFor={id}
        className="mb-2 block text-sm font-medium text-gray-300"
      >
        {text}
      </label>
      <input
        type={id}
        onChange={inputCallback}
        name={id}
        id={id}
        className="block w-full rounded-lg border-2 border-gray-500 bg-gray-600 p-2.5 text-white placeholder-gray-400
outline-none focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
        placeholder={placeholder}
      />
    </>
  )
}
export default Input
