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

export default function PropertiesHeader() {
    return (
        <section>
            <Input
                startContent={<BsSearch className='text-app_theme' />}
                endContent={
                    <Select>
                        <SelectTrigger className="w-[180px] ">
                            <SelectValue placeholder="Select a fruit" />
                        </SelectTrigger>
                        <SelectContent className='border-0 outline-none'>
                            <SelectGroup>
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
            PropertiesHeader

        </section>
    )
}
