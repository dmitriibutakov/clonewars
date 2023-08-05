import {authModalState} from "@/atoms/authModalAtom"
import React from "react"
import {useSetRecoilState} from "recoil"
import Logo from "../Logo/Logo"

type NavbarProps = {}

const Navbar: React.FC<NavbarProps> = () => {
    const changeAuthState = useSetRecoilState(authModalState)
    const clickHandler = () => {
        changeAuthState((prev) => ({...prev, isOpen: true}))
    }
    return (
        <div className="mx-auto flex h-[50px] w-full max-w-[1200px] items-center justify-between">
            <Logo/>
            <div className="flex items-center">
                <button
                    onClick={clickHandler}
                    className="trasition rounded-md border-2 border-transparent bg-brand-orange px-2 py-1 text-sm
      font-medium text-white duration-300 ease-in-out hover:border-brand-orange hover:bg-white hover:text-brand-orange sm:px-4"
                >
                    Sign In
                </button>
            </div>
        </div>
    )
}
export default Navbar
