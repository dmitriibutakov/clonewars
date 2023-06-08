import Input from "@/components/Input"
import React from "react"
import {
  AuthInputKey,
  AuthModalInput,
  InputAuthCallback,
} from "./AuthModalTypes"

type SignUpProps = {
  clickCallbackSignIn: () => void
  clickCallbackSignUp: () => void
  inputs: AuthModalInput[]
  name: AuthInputKey
  inputCallback: InputAuthCallback
}

const SignUp: React.FC<SignUpProps> = ({
  clickCallbackSignIn,
  clickCallbackSignUp,
  inputs,
  name,
  inputCallback,
}) => {
  return (
    <form className="space-y-6 px-6 pb-4">
      <h3 className="text-xl font-medium text-white">Sigh Up to CleetCode</h3>
      {inputs.map((el: AuthModalInput, key: number) => (
        <Input
          value={el.value}
          key={key}
          id={el.id}
          placeholder={el.placeholder}
          text={el.text}
          inputCallback={(e: React.ChangeEvent<HTMLInputElement>) =>
            inputCallback(e, name)
          }
        />
      ))}
      <button
        type="submit"
        className=" w-full rounded-lg bg-brand-orange px-5 py-2.5 text-center text-sm font-medium capitalize text-white hover:bg-brand-orange-s focus:ring-blue-300"
      >
        sign up
      </button>
      <button type="submit" className="flex w-full justify-end">
        <button
          onClick={clickCallbackSignUp}
          className="block w-full text-right text-sm capitalize text-brand-orange hover:underline"
        >
          register
        </button>
      </button>
      <div className="text-sm font-medium capitalize text-gray-500">
        already have an account?
        <button
          onClick={clickCallbackSignIn}
          className="ml-4 capitalize text-blue-700 hover:underline"
        >
          sign in
        </button>
      </div>
    </form>
  )
}
export default SignUp
