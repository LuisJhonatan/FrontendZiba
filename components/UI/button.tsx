import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

const buttonBaseStyles = cva(
    'text-primary w-full py-1 px-3',{
        variants: {
            variant: {
                account: 'border border-primary rounded hover:bg-primary hover:text-white',
                shopping: 'border border-primary rounded',
                header: 'hover:bg-primary hover:text-white rounded-3xl px-5 py-2',
                detail: 'bg-black text-white rounded-3xl px-4 sm:px-8'
            }
        },
    }
);

// Definir el tipo de props para los componentes de input
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonBaseStyles>;

export const Button:React.FC<ButtonProps> = ({ className, variant, children, ...props}) => {
    return(
        <button className={cn(buttonBaseStyles({variant}), className)} {...props}>
            {children}
        </button>
    );
}