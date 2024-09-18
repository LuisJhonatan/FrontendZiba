import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Label } from "./label";

const inputStyles = cva(
  "w-full border text-xs sm:text-sm border-gray-300 rounded-[4px] px-[6px] py-1 transition-colors duration-300 hover:border-black focus:border-black focus:outline-none",
  {
    variants: {
      variant: {
        primary: "border-gray-400 ",
        error: "border-red-500 focus:ring-red-500 focus:border-red-500",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputStyles> {
  label?: string;
  errorMessage?: string;
  register: UseFormRegisterReturn;
}

const Input: React.FC<InputProps> = ({
  label,
  errorMessage,
  register,
  variant,
  ...props
}) => {
  return (
    <div className="mb-4">
      {label && <Label>{label}</Label>}
      <input
        {...register}
        {...props}
        className={cn(inputStyles({ variant }), props.className)}
      />
      {errorMessage && (
        <p className="mt-1 text-sm text-red-600">{errorMessage}</p>
      )}
    </div>
  );
};

export default Input;
