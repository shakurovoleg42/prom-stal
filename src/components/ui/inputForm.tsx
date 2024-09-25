import * as React from "react"
import { cn } from "../../lib/utils"

const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex  w-[294px] h-[45px] rounded-[7px]  bg-transparent py-1 px-3 text-sm ring-offset-background file:border-0 file:bg-[#F5F7F8] file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-black focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 focus:border-none  border-[2px] border-white",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
);
Input.displayName = "Input";

export { Input };
