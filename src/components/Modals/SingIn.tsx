import Input from "@/components/Input"
import React from "react"
import {
  AuthInputKey,
  AuthModalInput,
  InputAuthCallback,
} from "./AuthModalTypes"

type SignInProps = {
  clickCallbackForgot: () => void
  clickCallbackSignUp: () => void
  inputs: AuthModalInput[]
  inputCallback: InputAuthCallback
  name: AuthInputKey
}

const SignIn: React.FC<SignInProps> = ({
  clickCallbackForgot,
  clickCallbackSignUp,
  inputs,
  name,
  inputCallback,
}) => {
  return (
    <form className="space-y-6 px-6 pb-4">
      <h3 className="text-xl font-medium text-white">Sigh In to CleetCode</h3>
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
        className="w-full rounded-lg bg-brand-orange px-5 py-2.5 text-center text-sm font-medium capitalize text-white hover:bg-brand-orange-s focus:ring-blue-300"
      >
        sign in
      </button>
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
