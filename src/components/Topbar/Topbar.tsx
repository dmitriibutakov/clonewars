"use client"
import Link from "next/link"
import React from "react"
import Logo from "../Logo/Logo"
import Button from "../Button/Button"
import { useAuthState, useSignOut } from "react-firebase-hooks/auth"
import { auth } from "@/firebase/firebase"
import Image from "next/image"
import { useSetRecoilState } from "recoil"
import { authModalState } from "@/atoms/authModalAtom"

type TopbarProps = {}

const Topbar: React.FC<TopbarProps> = () => {
  const [user] = useAuthState(auth)
  const [signOut, loading, error] = useSignOut(auth)
  const setAuthState = useSetRecoilState(authModalState)
  const openAuthModal = setAuthState((prev) => ({
    ...prev,
    isOpen: true,
    type: "signin",
  }))
  return (
    <nav className="md:24-px relative flex items-center justify-between bg-dark-layer-1 px-2 text-dark-gray-7 sm:px-12">
      <div
        className={`mx-auto flex h-[50] w-full max-w-[1200px] items-center justify-between`}
      >
        <Logo />
        <div className="flex flex-1 items-center justify-end space-x-4">
          {!user ? (
            <Link href="/auth" onClick={() => openAuthModal}>
              <Button name="sign in" dark={true} />
            </Link>
          ) : (
            <div className="align-center group relative flex cursor-pointer">
              <Image
                src="/avatar.png"
                className="mr-4"
                alt="avatar"
                width="32"
                height="32"
              />
              <div
                className="absolute left-2/4 top-10 z-40  mx-auto -translate-x-2/4 scale-0 rounded bg-dark-layer-1 p-2 text-brand-orange shadow-lg transition-all 
		duration-300 ease-in-out group-hover:scale-100"
              >
                <p className="text-sm">{user.email}</p>
              </div>
              <Button
                clickCallback={async () => await signOut()}
                name="logout"
                loading={loading}
                dark={true}
              />
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}
export default Topbar
