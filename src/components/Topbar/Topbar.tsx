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
import {useRouter} from "next/router";
import {problems} from "@/utils/problems";
import {Problem} from "@/utils/types/problem";

type TopbarProps = {
    problemPage?: boolean
}

const Topbar: React.FC<TopbarProps> = ({ problemPage }) => {
  const [user] = useAuthState(auth)
  const [signOut, loading] = useSignOut(auth)
  const setAuthState = useSetRecoilState(authModalState)
    const setAuthModalState = useSetRecoilState(authModalState);
    const router = useRouter();

    const handleProblemChange = (isForward: boolean) => {
        const { order } = problems[router.query.pid as string] as Problem;
        const direction = isForward ? 1 : -1;
        const nextProblemOrder = order + direction;
        const nextProblemKey = Object.keys(problems).find((key) => problems[key].order === nextProblemOrder);

        if (isForward && !nextProblemKey) {
            const firstProblemKey = Object.keys(problems).find((key) => problems[key].order === 1);
            router.push(`/problems/${firstProblemKey}`);
        } else if (!isForward && !nextProblemKey) {
            const lastProblemKey = Object.keys(problems).find(
                (key) => problems[key].order === Object.keys(problems).length
            );
            router.push(`/problems/${lastProblemKey}`);
        } else {
            router.push(`/problems/${nextProblemKey}`);
        }
    };
  return (
    <nav className="relative flex h-[50px] items-center justify-between bg-dark-layer-1 px-2 text-dark-gray-7 sm:px-12 md:px-24">
      <div
        className={`mx-auto flex w-full max-w-[1200px] items-center justify-between`}
      >
        <Logo />
        <div className="flex flex-1 items-center justify-end space-x-4">
            {problemPage && (
                <div className='flex items-center gap-4 flex-1 justify-center'>
                    <div
                        className='flex items-center justify-center rounded bg-dark-fill-3 hover:bg-dark-fill-2 h-8 w-8 cursor-pointer'
                        onClick={() => handleProblemChange(false)}
                    >
                        <FaChevronLeft />
                    </div>
                    <Link
                        href='/'
                        className='flex items-center gap-2 font-medium max-w-[170px] text-dark-gray-8 cursor-pointer'
                    >
                        <div>
                            <BsList />
                        </div>
                        <p>Problem List</p>
                    </Link>
                    <div
                        className='flex items-center justify-center rounded bg-dark-fill-3 hover:bg-dark-fill-2 h-8 w-8 cursor-pointer'
                        onClick={() => handleProblemChange(true)}
                    >
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
