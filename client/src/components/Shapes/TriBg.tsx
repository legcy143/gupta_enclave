import { cn } from '@/lib/utils'
import React from 'react'

export default function TriBg({className}:{className?:string}) {
  return (
    <div className={cn(' w-[100vw] h-[100vh]  max-w-[40rem] max-h-[25rem] md:max-h-[40rem] aspect-square top-0 right-0 fixed  overflow-hidden z-[-1]' , className)}>

      <div className='w-[200%] h-[100%] bg-blue-400/40 relative -top-[35%]  -left-[15%] rotate-45'></div>

    </div>
  )
}
