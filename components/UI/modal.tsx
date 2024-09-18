import { X } from "lucide-react";
import { cva, VariantProps } from "class-variance-authority";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

// Variantes para animaciones del modal
const modalVariants = cva(
  "fixed inset-0 flex items-center justify-center transition-transform z-50",
  {
    variants: {
      animation: {
        bottom: "translate-y-full opacity-0",
        right: "translate-x-full opacity-0",
      },
      visible: {
        true: "opacity-100",
        false: "opacity-0 pointer-events-none",
      },
    },
    compoundVariants: [
      {
        animation: "bottom",
        visible: true,
        className: "translate-y-0 opacity-100 transition-transform duration-500",
      },
      {
        animation: "right",
        visible: true,
        className: "translate-x-0 opacity-100 transition-transform duration-500",
      },
    ],
    defaultVariants: {
      animation: "bottom",
      visible: false,
    },
  }
);

// Variantes para la animación del fondo (overlay)
const overlayVariants = cva(
  "fixed inset-0 bg-black/50 transition-opacity duration-500 z-40", // Añadir z-index menor al modal para que esté detrás
  {
    variants: {
      visible: {
        true: "opacity-100",
        false: "opacity-0 pointer-events-none",
      },
    },
    defaultVariants: {
      visible: false,
    },
  }
);

interface ModalProps extends VariantProps<typeof modalVariants> {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export const Modal = ({ isOpen, onClose, children, animation }: ModalProps) => {
  return (
    <>
      {/* Fondo Oscuro con animación de opacidad */}
      <div className={cn(overlayVariants({ visible: isOpen }))} />

      {/* Contenedor del Modal */}
      <div className={cn(modalVariants({ animation, visible: isOpen }))}>
        {/* Modal Content */}
        <div className="bg-white p-6 rounded-lg shadow-lg relative w-[90%] max-w-md mx-auto z-50">
          {/* Botón para cerrar */}
          <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
          {/* Contenido del Modal */}
          {children}
        </div>
      </div>
    </>
  );
};
