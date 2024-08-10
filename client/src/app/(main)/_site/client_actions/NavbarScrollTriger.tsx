"use client"
import { cn } from '@/lib/utils'
import React, { useEffect, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'

export default function NavbarScrollTrigger({ children, className }: {
    children: React.ReactNode,
    className?: string
}) {
    const [scrollY, setScrollY] = useState(0);
    const controls = useAnimation();

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        controls.start({
            backdropFilter: `blur(${Math.min(scrollY / 15, 30)}px)`,
            backgroundColor: scrollY > 1 ? 'rgba(255, 255, 255, 0.3)' : 'rgba(255, 255, 255, 0)',
            transition: { duration: 0.3, ease: 'easeOut' }
        });
    }, [scrollY, controls]);

    return (
        <motion.section
            className={cn(
                "",
                className
            )}
            animate={controls}
        >
            {children}
        </motion.section>
    )
}
