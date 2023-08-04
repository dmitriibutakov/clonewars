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
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
import { BsList } from "react-icons/bs"
import Timer from "../Timer/Timer"

type TopbarProps = {
  problemsPage?: boolean
}

const Topbar: React.FC<TopbarProps> = ({ problemsPage }) => {
  const [user] = useAuthState(auth)
  const [signOut, loading, error] = useSignOut(auth)
  const setAuthState = useSetRecoilState(authModalState)
  return (
    <nav className="relative flex h-[50px] items-center justify-between bg-dark-layer-1 px-2 text-dark-gray-7 sm:px-12 md:px-24">
      <div
        className={`mx-auto flex w-full max-w-[1200px] items-center justify-between`}
      >
        <Logo />
        <div className="flex flex-1 items-center justify-end space-x-4">
          {problemsPage && (
            <div className="flex flex-1 items-center justify-center gap-4">
              <div className="dark-fill-3 flex h-8 w-8 cursor-pointer items-center justify-center rounded hover:bg-dark-fill-2">
                <FaChevronLeft />
              </div>
              <Link
                className="max-w[170px] flex cursor-pointer items-center justify-center gap-2 font-medium capitalize text-dark-gray-8"
                href="/"
              >
                <BsList /> problems list
              </Link>
              <div className="dark-fill-3 flex h-8 w-8 cursor-pointer items-center justify-center rounded hover:bg-dark-fill-2">
                <FaChevronRight />
              </div>
            </div>
          )}
        </div>
          {user && <Timer/>}
        {!user ? (
          <Link
            href="/auth"
            onClick={() =>
              setAuthState((prev) => ({
                ...prev,
                isOpen: true,
                type: "signin",
              }))
            }
          >
            <Button name="sign in" dark={true} />
          </Link>
        ) : (
          <div className="group relative flex cursor-pointer justify-center">
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
    </nav>
  )
}
export default Topbar
