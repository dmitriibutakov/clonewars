import React, {useEffect} from "react"
import Input from "../Input/Input"
import {AuthModalInput, InputAuthCallback} from "../../utils/types/AuthModalTypes"
import {auth} from "@/firebase/firebase"
import {useSendPasswordResetEmail} from "react-firebase-hooks/auth"
import {toast} from "react-toastify"
import Button from "../Button/Button"

type ResetPasswordProps = {
    inputs: AuthModalInput[]
    inputCallback: InputAuthCallback
    closeModalCallback: () => void
}

const ResetPassword: React.FC<ResetPasswordProps> = ({
                                                         inputs,
                                                         inputCallback,
                                                         closeModalCallback,
                                                     }) => {
    const email = inputs.find((el) => el.id === "email")
    const [sendPasswordResetEmail, sending, error] =
        useSendPasswordResetEmail(auth)
    const resetPasswordHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            if (email) {
                const response = await sendPasswordResetEmail(email.value)
                if (response) {
                    closeModalCallback()
                    toast.success("Your password was sucessfully reset", {
                        position: "bottom-right",
                    })
                }
            }
        } catch (error: any) {
            toast.error(error.message, {
                position: "bottom-right",
            })
        }
    }
    useEffect(() => {
        error &&
        toast.error(error.message, {
            position: "bottom-right",
            autoClose: 3000,
        })
    }, [error])
    return (
        <form
            onSubmit={resetPasswordHandler}
            className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8"
        >
            <h3 className="text-xl font-medium  text-white">Reset Password</h3>
            <p className="text-sm text-white">
                Forgotten your password? Enter your e-mail address below, and we&apos;ll
                send you an e-mail allowing you to reset it.
            </p>
            <div>
                {inputs.map((el: AuthModalInput, idx: number) => (
                    <Input
                        key={idx}
                        id={el.id}
                        placeholder={el.placeholder}
                        text={el.text}
                        value={el.value}
                        inputCallback={inputCallback}
                    />
                ))}
            </div>

            <Button name="reset password"/>
        </form>
    )
}
export default ResetPassword
