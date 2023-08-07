import Input from "@/components/Input/Input"
import React, {useEffect} from "react"
import {AuthModalInput, InputAuthCallback} from "../../utils/types/AuthModalTypes"
import {auth, firestore} from "@/firebase/firebase"
import {useCreateUserWithEmailAndPassword} from "react-firebase-hooks/auth"
import Button from "../Button/Button"
import {useRouter} from "next/navigation"
import {toast} from "react-toastify"
import {doc, setDoc} from "@firebase/firestore";

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
    const [createUserWithEmailAndPassword, loading, error] =
        useCreateUserWithEmailAndPassword(auth)
    const email = inputs.find((el) => el.id === "email")
    const password = inputs.find((el) => el.id === "password")
    const name = inputs.find((el) => el.id === "name")
    const signUpHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            toast.loading("Create your account", {position: "bottom-right", toastId: "loading-toast"})
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
                    const userData = {
                        uid: response.user.uid,
                        email: response.user.email,
                        displayName: name,
                        createdAt: Date.now(),
                        updatedAt: Date.now(),
                        likedProblems: [],
                        dislikedProblems: [],
                        solvedProblems: [],
                        starredProblems: []
                    }
                    await setDoc(doc(firestore, "users", response.user.uid), userData)
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
        } finally {
            toast.dismiss("loading-toast")
        }
    }
    useEffect(() => {
        error &&
        toast.error(error, {
            position: "top-center"
        })
    }, [error])
    return (
        <form onSubmit={signUpHandler} className="space-y-6 px-6 pb-4">
            <h3 className="text-xl font-medium text-white">Sigh Up to CloneWars</h3>
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
            <Button name={"sign up"} loading={loading}/>
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
