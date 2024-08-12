import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import React from 'react'
import { BsBuildingsFill } from "react-icons/bs";
import { LiaMapMarkedAltSolid } from "react-icons/lia";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { FaStore } from "react-icons/fa";
import { MdVilla, MdOutlineApartment } from "react-icons/md";
import { PiHouseLineBold } from "react-icons/pi";

export default function HeroSection() {
    return (
        <section className='pt-[5rem] mt-[-5rem] h-[100%] md:h-[90vh] max-h-[50rem]  relative mb-[4rem] bg-primary-gradient dark:bg-primary-gradient-dark flex flex-col items-center'>
            <MiddleSection />
            <BottomSection />
        </section>
    )
}

const MiddleSection = ({ className }: { className?: string }) => {
    return (
        <section className={cn('flex flex-col md:flex-row items-center h-full overflow-hidden', className)}>
            {/* text parts */}
            <section className=' flex-1 p-5 md:p-10 flex flex-col gap-2 justify-between items-start '>
                <h1 className='text-[300%] lg:text-[480%] font-bold leading-[100%]'>Find Your Dream House</h1>
                <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. At cum laborum molestiae, saepe rem laboriosam distinctio perspiciatis debitis repudiandae voluptas perferendis </p>
                <Button size={'lg'}>catelog</Button>
            </section>
            {/* image partss */}
            <section className='flex-0 relative overflow-hidden w-full  md:w-[45%] h-[90%] mt-auto'>
                <CircleBubble className='top-0 right-0 ' />
                <CircleBubble className='top-1 left-42 w-40' />
                <CircleBubble className='top-12 right-52 w-60' />
                <CircleBubble className='top-52 right-0 w-72' />
                <img src="/small-house.webp" alt="" className='relative ml-auto ' />
            </section>
        </section>
    )
}

const CircleBubble = ({ className }: { className?: string }) => {
    return (
        <div className={cn("rounded-full w-20 aspect-square bg-primary-gradient dark:bg-primary-gradient-dark absolute", className)}></div>
    )
}


const BottomSection = ({ className }: { className?: string }) => {
    let options = [
        {
            color: "bg-indigo-500 text-indigo-500",
            icon: <BsBuildingsFill />,
            title: "all",
        },
        {
            color: "bg-teal-500 text-teal-500",
            icon: <LiaMapMarkedAltSolid />,
            title: "land lots",
        },
        {
            color: "bg-amber-500 text-amber-500",
            icon: <HiOutlineOfficeBuilding />,
            title: "office",
        },
        {
            color: "bg-yellow-500 text-yellow-500",
            icon: <FaStore />,
            title: "store",
        },
        {
            color: "bg-orange-500 text-orange-500",
            icon: <MdOutlineApartment />,
            title: "apartment",
        },
        {
            color: "bg-emerald-500 text-emerald-500",
            icon: <MdVilla />,
            title: "villa",
        },
        {
            color: "bg-rose-500 text-rose-500",
            icon: <PiHouseLineBold />,
            title: "house",
        }
    ];

    return (
        <section className={cn("bg-background rounded-full px-5 absolute h-[6rem] bottom-[-3rem] w-[95%] md:w-[70%] shadow-md flex items-center justify-around overflow-y-auto", className)}>
            {
                options?.map((e, i) => {
                    return (
                        <div className='text-center flex-1 min-w-[5rem] flex flex-col gap-2 items-center justify-center capitalize cursor-pointer hover:scale-110 transition-all' key={i}>
                            <div className={`w-10 flex items-center justify-center aspect-square rounded-full bg-opacity-20 ${e.color}`}>
                                {e.icon}
                            </div>
                            <p className='text-xs font-medium'>{e.title}</p>
                        </div>
                    )
                })
            }
        </section>
    );
};
