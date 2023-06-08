import Input from "@/components/Input"
import React from "react"
import { AuthModalInput, InputAuthCallback } from "./AuthModalTypes"
import Button from "../Button"

type SignInProps = {
  clickCallbackForgot: () => void
  clickCallbackSignUp: () => void
  inputs: AuthModalInput[]
  inputCallback: InputAuthCallback
}

const SignIn: React.FC<SignInProps> = ({
  clickCallbackForgot,
  clickCallbackSignUp,
  inputs,
  inputCallback,
}) => {
  return (
    <form className="space-y-6 px-6 pb-4">
      <h3 className="text-xl font-medium text-white">Sign In to CleetCode</h3>
      {inputs.map((el: AuthModalInput, key: number) => (
        <Input
          value={el.value}
          key={key}
          id={el.id}
          placeholder={el.placeholder}
          text={el.text}
          inputCallback={inputCallback}
        />
      ))}
      <Button loading={true} name={"sign in"} />
      <button
        onClick={clickCallbackForgot}
        type="submit"
        className="flex w-full justify-end"
      >
        <a
          href="#"
          className="block w-full text-right text-sm capitalize text-brand-orange hover:underline"
        >
          forgot password?
        </a>
      </button>
      <div className="text-sm font-medium capitalize text-gray-500">
        not registered?
        <button
          onClick={clickCallbackSignUp}
          className="ml-4 capitalize text-blue-700 hover:underline"
        >
          create acount
        </button>
      </div>
    </form>
  )
}
export default SignIn
