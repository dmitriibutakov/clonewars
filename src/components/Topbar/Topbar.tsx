import Link from "next/link"
import React from "react"
import Logo from "../Logo/Logo"
import Button from "../Button/Button"

type TopbarProps = {}

const Topbar: React.FC<TopbarProps> = () => {
  const clickHandler = () => {}
  return (
    <nav className="md:24-px relative flex items-center justify-between bg-dark-layer-1 px-2 text-dark-gray-7 sm:px-12">
      <div
        className={`mx-auto flex h-[50] w-full max-w-[1200px] items-center justify-between`}
      >
        <Logo />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <Link href="/auth">
            <Button name="sign in" dark={true} />
          </Link>
        </div>
      </div>
    </nav>
  )
}
export default Topbar
