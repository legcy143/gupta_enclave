import React from 'react'
import MainProvider from './MainProvider'

export default function layout({ children }: {
    children: React.ReactNode
}) {
    return (
        <MainProvider>
            {children}
        </MainProvider>
    )
}
