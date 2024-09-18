import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

interface CardUIProps extends VariantProps<typeof cardStyles> {
  children: React.ReactNode;
  className?: string;
}

const cardStyles = cva(
  "rounded-xl shadow-md border border-gray-200 bg-white overflow-hidden pb-2 sm:pb-0 max-w-[137px] sm:max-w-[227px]",
  {
    variants: {
      hoverable: {
        true: "hover:shadow-2xl hover:scale-105 transition-transform",
      },
    },
    defaultVariants: {
      hoverable: true,
    },
  }
);

export const CardUI = ({ children, className, hoverable }: CardUIProps) => {
  return <div className={cn(cardStyles({ hoverable }), className)}>{children}</div>;
};
