
import React from 'react'
import Navbar from './_site/Navbar'
import Footer from './_site/Footer'

export default function MainProvider({ children }: {
    children: React.ReactNode
}) {
    return (
        <>
            <Navbar />
            <main className='pt-[5rem]'>
                {children}
            </main>
            <Footer/>
        </>
    )
}