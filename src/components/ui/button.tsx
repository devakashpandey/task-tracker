import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-semibold transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        primary:
          "bg-gradient-to-b from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 cursor-pointer",
        darkYellow:
          "bg-gradient-to-b from-amber-600 to-amber-700 text-white hover:from-amber-700 hover:to-amber-800 cursor-pointer",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 cursor-pointer",
        secondary:
          "text-black bg-white hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 cursor-pointer",
        ghost:
          "text-black bg-white hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 cursor-pointer",
        muted:
          "bg-neutral-200 text-neutral-600 hover:bg-neutral-200/80 cursor-pointer",
        lightBlue: "bg-blue-100 text-blue-600 hover:bg-blue-200 cursor-pointer",
      },
      size: {
        default: "h-9 px-5 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-sm gap-1.5 px-3 has-[>svg]:px-2.5",
        xs: "h-7 rounded-sm gap-1 px-2.5 has-[>svg]:px-2 text-xs",
        lg: "h-11 rounded-md has-[>svg]:px-4 px-8",
        icon: "size-8",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
