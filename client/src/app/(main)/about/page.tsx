import CircleBubble from '@/components/Shapes/CircleBubble'
import TriBg from '@/components/Shapes/TriBg'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import React from 'react'
import { GoGoal } from 'react-icons/go';

export default function About() {
    return (
        <main className='relative'>
            <TriBg />
            <div className='w-full my-20 p-10 text-center'>
                <CircleBubble className='top-0 right-0 w-24 opacity-90' />
                <CircleBubble className='top-52 -left-10 w-32 opacity-90' />
                <h1 className='text-7xl font-semibold'>About us</h1>
                <p className='max-w-[50rem] mx-auto leading-6 text-lg my-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis commodi nulla rerum amet eius eos vitae numquam obcaecati porro fuga sint ipsum at consequuntur adipisci possimus facilis, eligendi officiis laudantium.</p>
            </div>
            <BottomSection />
            <OurGoals/>
        </main>
    )
}



const BottomSection = ({ className }: { className?: string }) => {
    let options = [
        {
            boldValue: "250+",
            lightValue: "happy costumerr"
        },
        {
            boldValue: "250+",
            lightValue: "happy costumerr"
        },
        {
            boldValue: "250+",
            lightValue: "happy costumerr"
        },
        {
            boldValue: "250+",
            lightValue: "happy costumerr"
        }
    ];

    return (
        <section className={cn("bg-background  rounded-3xl px-5 my-10 mx-auto h-[10rem] max-w-[70rem] w-[95%] shadow-xl border-2 border-black/5 dark:border-white/10 flex items-center justify-around overflow-y-auto", className)}>
            {
                options?.map((e, i) => {
                    return (
                        <div className='text-center flex-1  flex flex-col gap-2 items-center justify-center capitalize cursor-pointer hover:scale-110 transition-all' key={i}>
                            <h2 className='text-3xl font-bold'>{e.boldValue}</h2>
                            <p className='text-base font-medium opacity-65'>{e.lightValue}</p>
                        </div>
                    )
                })
            }
        </section>
    );
};


const OurGoals = () => {
    const Goals = [
        {
            "title": "Market Leadership",
            "description": "Become a leading real estate company in the target market by providing high-quality properties and exceptional customer service. Achieve a market share of X% within the next Y years."
        },
        {
            "title": "Customer Satisfaction",
            "description": "Prioritize customer satisfaction by offering personalized services, transparent transactions, and support throughout the buying, selling, or renting process."
        },
        {
            "title": "Simplified Property Search",
            "description": "Make it easy for users to find the perfect property that meets their needs and budget by developing an intuitive, user-friendly platform with advanced search filters, detailed property information, and high-quality images."
        },
        {
            "title": "Transparent and Trustworthy Transactions",
            "description": "Ensure that all transactions are transparent and build trust with users by providing clear, honest information about properties, pricing, and legal aspects."
        },
        {
            "title": "Personalized Customer Support",
            "description": "Offer personalized support to help users navigate the real estate process, whether they’re first-time buyers, investors, or looking to rent."
        },
        {
            "title": "Flexible and Convenient Services",
            "description": "Cater to the diverse needs of users by offering flexible viewing options, virtual tours, and a range of payment and financing options."
        },
        {
            "title": "Ongoing Engagement and Community Building",
            "description": "Engage with users beyond the transaction by offering valuable resources, updates on market trends, and opportunities to connect with local communities."
        }
    ]
    return (
        <section className='p-5'>
            <h1 className='my-5 text-4xl font-bold flex gap-3 items-center p-1'>Our Goals <GoGoal /> </h1>
            <div className='gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
                {Goals?.map((e, i) => {
                    return (
                        <Card key={i}>
                            <CardContent>
                                <div className='my-5 w-[5rem] h-[5rem] aspect-square grid  place-items-center bg-blue-500/20 dark:bg-blue-500/10 rounded-full'>
                                    <p className='w-fit text-app_theme font-bold text-2xl'>{i+1}</p>
                                </div>
                                <CardTitle className='my-5 leading-6 text-2xl'>{e.title}</CardTitle>
                                <CardDescription className='leading-5 text-base'>{e.description}</CardDescription>
                            </CardContent>
                        </Card>
                    )
                })}
            </div>
        </section>
    )
}