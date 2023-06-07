import React from "react"
import { IoClose } from "react-icons/io5"
import SignIn from "./SingIn"
import SignUp from "./SignUp"
import ResetPassword from "./ResetPassword"
type AuthModalProps = {}

const AuthModal: React.FC<AuthModalProps> = () => {
  return (
    <>
      <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-60"></div>
      <div className="absolute left-[50%]  top-[50%] flex w-full translate-x-[-50%] translate-y-[-50%]  items-center justify-center sm:w-[450px]">
        <div className="relative mx-auto flex h-full w-full items-center justify-center">
          <div className="relative mx-6 w-full rounded-lg bg-white bg-gradient-to-b from-brand-orange to-slate-900 shadow">
            <div className="flex justify-end p-2">
              <button
                type="button"
                className="ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-white hover:bg-gray-800 hover:text-white"
              >
                <IoClose className="h-5 w-5" />
              </button>
            </div>
            {/* <SignIn /> */}
            {/* <SignUp/> */}
            <ResetPassword />
          </div>
        </div>
      </div>
    </>
  )
}
export default AuthModal
