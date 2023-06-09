import Input from "@/components/Input/Input"
import React, { useEffect } from "react"
import { AuthModalInput, InputAuthCallback } from "./AuthModalTypes"
import { auth } from "@/firebase/firebase"
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth"
import Button from "../Button/Button"
import { useRouter } from "next/navigation"
import { toast } from "react-toastify"

type SignUpProps = {
  clickCallbackSignIn: () => void
  clickCallbackSignUp: () => void
  inputs: AuthModalInput[]
  closeModalCallback: () => void
  inputCallback: InputAuthCallback
}

const SignUp: React.FC<SignUpProps> = ({
  clickCallbackSignIn,
  inputs,
  closeModalCallback,
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
        const response = await createUserWithEmailAndPassword(
          email.value,
          password.value,
        )
        if (response) {
          closeModalCallback()
          router.push("/")
        }
      } else {
        toast.error("Please, fill-in all fields", {
          position: "bottom-right"
        })
      }
    } catch (error: any) {
      toast.error(error.message, {
        position: "bottom-right"
      })
    }
  }
  useEffect(() => {
    error &&
      toast.error(error.message, {
        position: "top-center"
      })
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
