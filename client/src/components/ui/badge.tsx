import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { Cross2Icon } from "@radix-ui/react-icons"

const badgeVariants = cva(
  "inline-flex items-center rounded-md border transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 gap-1 rounded-full text-sm font-medium py-[0.4rem] px-3",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-red-500/40 text-red-700 dark:text-red-100 shadow hover:bg-red-500/50 ",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof badgeVariants> {
  onRemove?: () => void
}

function Badge({ className, variant, children, onRemove, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} >
      {children}
      {
        onRemove && (
          <button className="h-5 w-5 grid place-items-center transition-all active:scale-150">
            <Cross2Icon />
          </button>
        )
      }
    </div>
  )
}

export { Badge, badgeVariants }
