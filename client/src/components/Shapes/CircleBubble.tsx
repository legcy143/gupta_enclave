import { cn } from "@/lib/utils"

export default function CircleBubble ({ className }: { className?: string }) {
    return (
        <div className={cn("rounded-full w-20 aspect-square bg-primary-gradient dark:bg-primary-gradient-dark absolute", className)}></div>
    )
}