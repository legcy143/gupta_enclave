import React from 'react'

export default function Navbar() {
    return (
        <section className='fixed top-0 left-0 h-[5rem] w-full flex items-center justify-between px-16 gap-10 border-2 border-gray-500 z-40'>
            <section>Logo</section>
            <section>options</section>
            <section>Login/signup</section>
        </section>
    )
}
