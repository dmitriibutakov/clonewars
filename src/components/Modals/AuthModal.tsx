import React, { useEffect, useState } from "react"
import { IoClose } from "react-icons/io5"
import SignIn from "./SingIn"
import SignUp from "./SignUp"
import ResetPassword from "./ResetPassword"
import { useSetRecoilState, useRecoilValue } from "recoil"
import { authModalState } from "@/atoms/authModalAtom"
import { AuthInputKey, AuthModalInputs } from "./AuthModalTypes"

type AuthModalProps = {}

const AuthModal: React.FC<AuthModalProps> = () => {
  const authModal = useRecoilValue(authModalState)
  const changeAuthState = useSetRecoilState(authModalState)
  const clickCallbackSignUp = () =>
    changeAuthState((prev) => ({ ...prev, type: "signup" }))
  const clickCallbackForgot = () =>
    changeAuthState((prev) => ({ ...prev, type: "forgot" }))
  const clickCallbackSignIn = () =>
    changeAuthState((prev) => ({ ...prev, type: "signin" }))
  const closeModalHandler = useCloseModal()
  const [inputs, setInputs] = useState({
    signup: [
      {
        id: "email",
        placeholder: "example@mail.com",
        text: "Enter your email:",
        value: "",
      },
      {
        id: "name",
        placeholder: "John Silver",
        text: "Enter your name:",
        value: "",
      },
      {
        id: "password",
        placeholder: "********",
        text: "Enter your password:",
        value: "",
      },
    ],
    signin: [
      {
        id: "email",
        placeholder: "example@mail.com",
        text: "Enter your email:",
        value: "",
      },
      {
        id: "password",
        placeholder: "********",
        text: "Enter your password:",
        value: "",
      },
    ],
    forgot: [
      {
        id: "email",
        placeholder: "example@mail.com",
        text: "Enter your email:",
        value: "",
      },
    ],
  } as AuthModalInputs)
  const inputHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    key: AuthInputKey,
  ) => {
    setInputs((prev) => ({
      ...prev,
      key: { ...prev[key], [e.currentTarget.name]: e.currentTarget.value },
    }))
  }
  return (
    <>
      <div
        onClick={closeModalHandler}
        className="absolute left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-60"
      ></div>
      <div className="absolute left-[50%]  top-[50%] flex w-full translate-x-[-50%] translate-y-[-50%]  items-center justify-center sm:w-[450px]">
        <div className="relative mx-auto flex h-full w-full items-center justify-center">
          <div className="relative mx-6 w-full rounded-lg bg-white bg-gradient-to-b from-brand-orange to-slate-900 shadow">
            <div className="flex justify-end p-2">
              <button
                onClick={closeModalHandler}
                type="button"
                className="ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-white hover:bg-gray-800 hover:text-white"
              >
                <IoClose className="h-5 w-5" />
              </button>
            </div>
            {Object.keys(inputs).map(
              (value: string, index: number) =>
                (value === "forgot" && authModal.type === "forgot" && (
                  <ResetPassword
                    inputCallback={inputHandler}
                    key={index}
                    name={value}
                    inputs={inputs[value]}
                  />
                )) ||
                (value === "signin" && authModal.type === "signin" && (
                  <SignIn
                    key={index}
                    name={value}
                    inputs={inputs[value]}
                    inputCallback={inputHandler}
                    clickCallbackForgot={clickCallbackForgot}
                    clickCallbackSignUp={clickCallbackSignUp}
                  />
                )) ||
                (value === "signup" && authModal.type === "signup" && (
                  <SignUp
                    key={index}
                    name={value}
                    inputs={inputs[value]}
                    inputCallback={inputHandler}
                    clickCallbackSignUp={clickCallbackSignUp}
                    clickCallbackSignIn={clickCallbackSignIn}
                  />
                )),
            )}
          </div>
        </div>
      </div>
    </>
  )
}
export default AuthModal

function useCloseModal() {
  const setAuthModal = useSetRecoilState(authModalState)
  const closeModal = () => {
    setAuthModal((prev) => ({ ...prev, isOpen: false, type: "signin" }))
  }
  useEffect(() => {
    const escHandler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal()
    }
    window.addEventListener("keydown", escHandler)
    return () => window.removeEventListener("keydown", escHandler)
  }, [])
  return closeModal
}
