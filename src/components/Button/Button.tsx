import React from "react"
import {FiLogOut} from "react-icons/fi"
import {UserCredential} from "@firebase/auth";

type ButtonProps = {
    loading: UserCredential | undefined
    name: string
    dark?: boolean
    clickCallback?: () => void
}

const Button: React.FC<ButtonProps> = ({
                                           name,
                                           loading,
                                           dark,
                                           clickCallback,
                                       }) => {
    const setStyleBtnLoading = !dark
        ? "inline-flex w-full cursor-not-allowed items-center justify-center rounded-lg bg-brand-orange px-5 py-2.5 text-center text-sm font-medium capitalize text-white transition duration-150 ease-in-out"
        : "inline-flex w-full cursor-not-allowed items-center justify-center rounded-lg cursor-pointer bg-dark-fill-3 px-5 py-2.5 text-center text-sm font-medium capitalize transition duration-150 ease-in-out"
    const setStyleBtn = !dark
        ? "w-full rounded-lg bg-brand-orange px-5 py-2.5 text-center text-sm font-medium capitalize text-white hover:bg-brand-orange-s focus:ring-blue-300"
        : "cursor-pointer hover:text-brand-orange rounded bg-dark-fill-3 px-2 py-1 capitalize"
    return (
        <>
            {loading ? (
                <div className="flex items-center justify-center">
                    <button type="button" className={setStyleBtnLoading}>
                        <svg
                            className="-ml-1 mr-3 h-5 w-5 animate-spin text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                            ></circle>
                            <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                        </svg>
                        loading...
                    </button>
                </div>
            ) : (
                <button onClick={clickCallback} type="submit" className={setStyleBtn}>
                    {name === "logout" ? <FiLogOut/> : name}
                </button>
            )}
        </>
    )
}
export default Button
