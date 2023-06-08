// "use client"
import Input from "@/components/Input"
import React, { useEffect } from "react"
import { AuthModalInput, InputAuthCallback } from "./AuthModalTypes"
import { auth } from "@/firebase/firebase"
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth"
import Button from "../Button"
import { useRouter } from "next/navigation"

type SignUpProps = {
  clickCallbackSignIn: () => void
  clickCallbackSignUp: () => void
  inputs: AuthModalInput[]

  inputCallback: InputAuthCallback
}

const SignUp: React.FC<SignUpProps> = ({
  clickCallbackSignIn,
  inputs,
  inputCallback,
}) => {
  const router = useRouter()
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth)
  const email = inputs.find((el) => el.id === "email")
  const password = inputs.find((el) => el.id === "password")
  const name = inputs.find((el) => el.id === "name")
  const signUpHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      if (
        email &&
        email.value &&
        password &&
        password.value &&
        name &&
        name.value
      ) {
        const newUser = await createUserWithEmailAndPassword(
          email.value,
          password.value,
        )
        if (!newUser) {
        }
        router.push("/")
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
    <form onSubmit={signUpHandler} className="space-y-6 px-6 pb-4">
      <h3 className="text-xl font-medium text-white">Sigh Up to CleetCode</h3>
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
      <Button name={"sign up"} loading={loading} />
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
