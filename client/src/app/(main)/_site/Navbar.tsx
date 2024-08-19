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
import NavOption from './client_actions/NavOption';
import { FaUser } from 'react-icons/fa';

export default function Navbar() {
    return (
        <NavbarScrollTriger className='fixed top-0 left-0 h-[5rem] w-[100vw] flex items-center justify-between px-3 lg:px-16 gap-1 md:gap-5 lg:gap-10 z-40'>
            <section className='flex-1 flex items-center  gap-1 '>
                <DropdownMenu>
                    <DropdownMenuTrigger className='outline-none md:hidden border-2 border-app_theme backdrop-blur-lg rounded-full p-1'>
                        <IoMenu className='text-2xl' />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className='outline-none bg-transparent border-none p-0 pl-1 pt-4 backdrop-blur-0 shadow-none blur-0 w-fit'>
                        <DropdownMenuItem className='p-0 w-fit relative'>
                            <div className="top-[-0.7rem] left-3 rotate-45 absolute bg-secondary w-7 aspect-square " />
                            <NavOption className='gap-0 py-1 ' />
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

                <div className='flex items-center justify-center font-bold capitalize border-2 rounded border-app_theme'>
                    <p className='p-1 bg-app_theme text-white'>Gupta</p>
                    <p className='p-1 text-black dark:bg-white'>Enclave</p>
                </div>
            </section>
            <NavOption className='hidden md:flex' />
            <section className='flex-1 flex justify-end'>
                <Button variant={'outline'}>
                    <FaUser/>
                    Login/signup
                    </Button>
            </section>
        </NavbarScrollTriger>
    )
}


