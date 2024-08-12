"use client"
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils"
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { usePathname, useRouter } from "next/navigation"
import { memo, useRef } from "react";

function NavOption({ className }: { className: string }) {
    const router = useRouter();
    const pathname = usePathname();
    console.log("excuting ", pathname)
    let Paths = [
        {
            title: "home",
            url: "/"
        }, {
            title: "properties",
            url: "/properties"
        }, {
            title: "service",
            url: "/service"
        }, {
            title: "about",
            url: "/about"
        }
        , {
            title: "contact",
            url: "/contact"
        }
    ]

    let dropDownRef = useRef<any>()
    return (
        <section className={cn('bg-secondary h-[80%] rounded-md md:rounded-full font-semibold  justify-center items-center list-none gap-1 px-2  flex flex-col md:flex-row relative', className)}>
            
            {
                Paths?.map((e) => {
                    return (
                        <li className={`cursor-pointer capitalize  h-full w-full flex-1 flex items-center p-4  ${e.url == pathname && "text-app_theme"}`} onClick={() => {
                            router.push(e.url)
                        }} key={e.title}>{e.title}</li>
                    )
                })
            }
        </section>
    )
}

export default memo(NavOption)