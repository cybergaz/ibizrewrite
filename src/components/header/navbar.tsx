"use client"

import { Button } from "../ui/button"
import Image from "next/image"
import { NAVLINKS } from "@/lib/constants"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"


const Navbar = () => {

    return (
        <div className={cn("w-[87rem] mx-auto px-5 flex justify-between items-center rounded-md transition-normal duration-500")}>

            <Image src="/images/logo.png" width={135} height={100} alt="logo" />
            <Navlinks className=" justify-center items-center" />
            <Button className=" cursor-pointer text-sm rounded-md bg-accent-magenta/10 text-accent-magenta hover:bg-accent-magenta/20 transition-colors duration-300">
                Download Brochure
            </Button>
        </div>
    )
}

const Navlinks = ({ className }: { className?: string }) => {
    return (
        <div className={cn("flex justify-center items-center gap-2", className)}>
            {
                NAVLINKS.map((link, index) => (
                    <Link
                        key={index}
                        href={link.href}
                        className={cn("text-sm font-medium text-accent-dark-gray hover:text-foreground **:transition-colors **:duration-200", (usePathname() === link.href) && "text-accent-magenta")}
                    >
                        <span className={cn("border border-transparent p-1.5 px-5 flex justify-center items-center rounded-md", usePathname() === link.href && " bg-accent-magenta/5")}>
                            {link.title}
                        </span>
                    </Link>
                ))
            }
        </div>
    )
}

export default Navbar
