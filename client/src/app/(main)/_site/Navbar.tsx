import React from 'react'
import NavbarScrollTriger from './client_actions/NavbarScrollTriger';
import { Button } from '@/components/ui/button';
import { IoMenu } from "react-icons/io5";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from '@/lib/utils';

export default function Navbar() {
    return (
        <NavbarScrollTriger className='fixed top-0 left-0 h-[5rem] w-full flex items-center justify-between px-3 md:px-16 gap-5 md:gap-10 z-40'>
            <section className='flex-1 flex items-center  gap-1 '>
                <DropdownMenu>
                    <DropdownMenuTrigger className='outline-none md:hidden'>
                        <IoMenu className='text-3xl' />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className='outline-none bg-transparent border-none'>
                        <NavOption className='gap-10 py-10'/>
                    </DropdownMenuContent>
                </DropdownMenu>

                <div className='flex items-center justify-center font-bold capitalize border-2 rounded border-app_theme'>
                    <p className='p-1 bg-app_theme text-white'>Gupta</p>
                    <p className='p-1 text-black dark:bg-white'>Enclave</p>
                </div>
            </section>
            <NavOption className='hidden md:flex' />
            <section className='flex-1 flex justify-end'>
                <Button variant={'secondary'}>Login/signup</Button>
            </section>
        </NavbarScrollTriger>
    )
}


const NavOption = ({ className }: { className: string }) => {
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
    return (
        <section className={cn('bg-secondary h-[80%] flex-1 rounded-md md:rounded-full font-semibold  justify-center items-center list-none gap-10 px-10 flex flex-col md:flex-row', className)}>
            {
                Paths?.map((e) => {
                    return (
                        <li className='cursor-pointer capitalize' key={e.title}>{e.title}</li>
                    )
                })
            }
        </section>
    )
}