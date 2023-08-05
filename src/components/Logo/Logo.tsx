import Link from "next/link"
import React from "react"
import Icon from "../Icon/Icon"

type LogoProps = {}

const Logo: React.FC<LogoProps> = () => {
    return (
        <Link href="/" className="flex h-20 items-center justify-center">
            <Icon/>
        </Link>
    )
}
export default Logo
