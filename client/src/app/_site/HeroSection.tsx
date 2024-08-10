import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import React from 'react'

export default function HeroSection() {
    return (
        <section className='pt-[7rem] pb-[5rem] min-h-fit h-[85vh] max-h-[60rem]  relative mb-[4rem] bg-primary-gradient flex flex-col items-center'>
            <MiddleSection />
            <BottomSection />
        </section>
    )
}

const MiddleSection = ({ className }: { className?: string }) => {
    return (
        <section className={cn('flex bg-red-200 my-auto', className)}>
            <section className='flex-1 p-5 flex flex-col gap-2 justify-between items-start max-h-[25rem]'>
                <h1 className='text-8xl font-bold'>Find Your Dream House</h1>
                <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. At cum laborum molestiae, saepe rem laboriosam distinctio perspiciatis debitis repudiandae voluptas perferendis </p>
                <Button>catelog</Button>
            </section>
            <section className='flex-1'>
                images
            </section>
        </section>
    )
}

const BottomSection = ({ className }: { className?: string }) => {
    return (
        <section className={cn("bg-background rounded-full px-5 absolute h-[8rem] bottom-[-4rem] w-[90%] shadow-md ", className)}>
            Bottom border
        </section>
    )
}