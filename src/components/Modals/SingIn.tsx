import Input from "@/components/Input/Input"
import React, { useEffect } from "react"
import { AuthModalInput, InputAuthCallback } from "./AuthModalTypes"
import Button from "../Button/Button"
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth"
import { auth } from "@/firebase/firebase"
import { useRouter } from "next/navigation"

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
  const router = useRouter()
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth)
  const email = inputs.find((el) => el.id === "email")
  const password = inputs.find((el) => el.id === "password")
  const signInHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      if (email && email.value && password && password.value) {
        const isAuth = await signInWithEmailAndPassword(
          email.value,
          password.value,
        )
        isAuth && router.push("/")
      } else {
        alert("please, fill-in all fields")
      }
    } catch (error: any) {
      alert(error.message)
    }
  }
  useEffect(() => {
    error && alert(error.message)
  }, [error])
  return (
    <form onSubmit={signInHandler} className="space-y-6 px-6 pb-4">
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
      <Button loading={loading} name={"sign in"} />
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
