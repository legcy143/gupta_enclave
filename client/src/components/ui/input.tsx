import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, startContent, endContent, ...props }, ref) => {
    return (
      <div
        className={cn(
          "flex items-center rounded-full border-[1.5px] border-input bg-transparent px-4 py-2 shadow-sm transition-colors focus-within:ring-1 focus-within:ring-ring",
          className
        )}
      >
        {startContent && (
          <span className="mr-2 text-muted-foreground">
            {startContent}
          </span>
        )}
        <input
          type={type}
          className="flex-1 bg-transparent text-sm focus:outline-none p-1"
          ref={ref}
          {...props}
        />
        {endContent && (
          <span className="ml-2 text-muted-foreground">
            {endContent}
          </span>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
