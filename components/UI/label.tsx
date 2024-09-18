import { cva, VariantProps } from "class-variance-authority";
import React from "react";
import { cn } from "@/lib/utils";

const labelBaseStyles = cva("block font-medium text-md");

// Definir el tipo de props para el componente Label
type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement> &
  VariantProps<typeof labelBaseStyles>;

export const Label: React.FC<LabelProps> = ({
  className,
  children,
  ...props
}) => (
  <label className={cn(labelBaseStyles(), className)} {...props}>
    {children}
  </label>
);
