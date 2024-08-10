import React from 'react'
import NavbarScrollTriger from './client_actions/NavbarScrollTriger';
import { Button } from '@/components/ui/button';

export default function Navbar() {
    return (
        <NavbarScrollTriger className='fixed top-0 left-0 h-[5rem] w-full flex items-center justify-between px-16 gap-10 z-40'>
            <section>Logo</section>
            <section className='bg-secondary h-[80%] rounded-full font-semibold flex justify-center items-center list-none gap-10 px-10'>
                <li className='cursor-pointer text-app_theme'>Home</li>
                <li className='cursor-pointer'>Home</li>
                <li className='cursor-pointer'>Home</li>
                <li className='cursor-pointer'>Home</li>
            </section>
            <section>
                <Button variant={'outline'}>Login/signup</Button>
            </section>
        </NavbarScrollTriger>
    )
}
