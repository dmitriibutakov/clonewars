import Input from "@/components/Input"
import React from "react"

type SignInProps = {}

const SignIn: React.FC<SignInProps> = () => {
  return (
    <form className="space-y-6 px-6 pb-4">
      <h3 className="text-xl font-medium text-white">Sigh In to CleetCode</h3>
      {[
        {
          id: "email",
          placeholder: "example@mail.com",
          text: "Enter your email:",
        },
        {
          id: "password",
          placeholder: "********",
          text: "Enter your password:",
        },
      ].map(
        (
          el: { id: string; placeholder: string; text: string },
          key: number
        ) => (
          <Input
            key={key}
            id={el.id}
            placeholder={el.placeholder}
            text={el.text}
          />
        )
      )}
      <button
        type="submit"
        className="w-full rounded-lg bg-brand-orange px-5 py-2.5 text-center text-sm font-medium capitalize text-white hover:bg-brand-orange-s focus:ring-blue-300"
      >
        sign
      </button>
      <button type="submit" className="flex w-full justify-end">
        <a
          href="#"
          className="block w-full text-right text-sm capitalize text-brand-orange hover:underline"
        >
          forgot password?
        </a>
      </button>
      <div className="text-sm font-medium capitalize text-gray-500">
        not registered?
        <a href="#" className="ml-4 capitalize text-blue-700 hover:underline">
          create acount
        </a>
      </div>
    </form>
  )
}
export default SignIn
