import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from '@/components/ui/button'
import { FaRegHeart } from "react-icons/fa6";
import { GoHeartFill } from "react-icons/go";

export default function SuggestionSection() {
    return (
        <section className='space-y-5 p-2'>
            <ViewProperitiesCard />
            <ViewProperitiesCard />
            <ViewProperitiesCard />
            <ViewProperitiesCard />
            <ViewProperitiesCard />
            <ViewProperitiesCard />
            <ViewProperitiesCard />
            <ViewProperitiesCard />
        </section>
    )
}


const ViewProperitiesCard = () => {
    return (
        <section className='mx-auto bg-card w-full max-w-[55rem] p-2 relative rounded-md border-[0px] border-primary/30 flex flex-col md:flex-row gap-5'>
            <Button size={'icon'} variant={'outline'} className='text-red-500 hover:text-red-500 absolute top-5 right-5 md:right-2 md:top-2 z-10'>
                {/* <FaRegHeart /> */}
                <GoHeartFill />
            </Button>
            <div className=' h-[12rem] aspect-video'>
                <Carousel className='w-full h-full overflow-hidden rounded-3xl'>
                    <CarouselContent>
                        <CarouselItem>
                            <img  className='w-full h-full object-cover' src="https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="img" />
                        </CarouselItem>
                        <CarouselItem>
                            <img src="https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="img" />
                        </CarouselItem>
                        <CarouselItem>
                            <img src="https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="img" />
                        </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
            {/* text an dinfo section */}
            <div className='flex gap-2 justify-between  flex-col p-3'>
                <h2 className='font-bold text-3xl'> &#8377; 45,000 </h2>
                <p className='font-medium line-clamp-1 capitalize'>tow bhk with fully furnished and falana dikmkana and bla bla ass well</p>
                <div className='flex items-center gap-2 font-semibold'>
                    <span>250 sq</span>
                    <span>3 beed room</span>
                    <span>2 washroom</span>
                </div>
                <p className='text-sm opacity-80 line-clamp-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi consequatur, dolorum dolorem nobis laudantium dolore quia quae, ad quis minus tenetur reiciendis optio voluptas placeat facere suscipit, molestiae quod tempore!</p>
            </div>
        </section>
    )
}