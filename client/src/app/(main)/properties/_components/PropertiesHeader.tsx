import { Input } from '@/components/ui/input'
import React from 'react'
import { BsSearch } from 'react-icons/bs'

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { PiSliders } from "react-icons/pi";

export default function PropertiesHeader() {
    return (
        <section>
            <div className='flex items-center w-full gap-1 p-1'>
                <Input
                    className='flex-1'
                    startContent={<BsSearch className='text-app_theme mx-2' />}
                    endContent={
                        <Select>
                            <SelectTrigger className="w-[6rem]  border-0 border-l-2 rounded-none outline-0 shadow-none  focus:ring-0 ">
                                <SelectValue placeholder="city" />
                            </SelectTrigger>
                            <SelectContent className=''>
                                <SelectGroup className=''>
                                    <SelectLabel>Fruits</SelectLabel>
                                    <SelectItem value="apple">Apple</SelectItem>
                                    <SelectItem value="banana">Banana</SelectItem>
                                    <SelectItem value="blueberry">Blueberry</SelectItem>
                                    <SelectItem value="grapes">Grapes</SelectItem>
                                    <SelectItem value="pineapple">Pineapple</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    }
                />
                <Button><PiSliders /> Filter</Button>
            </div>
            {/* filter sections */}
            <section className='p-5 flex items-center flex-wrap gap-2'>
                <Badge variant={'outline'} onRemove={() => {
                    console.log("hii")
                }}>hii there</Badge>
                <Badge variant={'outline'} >hii there</Badge>
                <Badge variant={'outline'} className='bg-indigo-300/40 text-indigo-800'>hii there</Badge>
                <Badge variant={'destructive'} onRemove={() => {
                    console.log("hii")
                }}>hii there</Badge>
            </section>

        </section>
    )
}
