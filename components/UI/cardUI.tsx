import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

interface CardUIProps extends VariantProps<typeof cardStyles> {
  children: React.ReactNode;
  className?: string;
}

const cardStyles = cva(
  "rounded-xl shadow-md border border-gray-200 bg-white overflow-hidden pb-2 sm:pb-0 w-full max-w-[300px]", // Ajuste del tamaño máximo
  {
    variants: {
      hoverable: {
        true: "hover:scale-[1.05] transition-transform",
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
