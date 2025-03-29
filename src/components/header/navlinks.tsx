"use client"

import { NAVLINKS } from "@/lib/constants"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"

const Navlinks = ({ className }: { className?: string }) => {
    return (
        <div className={cn("flex justify-center items-center gap-2", className)}>
            {
                NAVLINKS.map((link, index) => (
                    <Link
                        key={index}
                        href={link.href}
                        className={cn("text-sm font-semibold text-accent-dark-gray hover:text-foreground **:transition-colors **:duration-300", (usePathname() === link.href) && "text-accent-magenta")}
                    >
                        <span className={cn("border border-transparent p-1.5 px-5 flex justify-center items-center rounded-full", usePathname() === link.href && " border-accent-gray")}>
                            {link.title}
                        </span>
                    </Link>
                ))
            }
        </div>
    )
}

export default Navlinks
