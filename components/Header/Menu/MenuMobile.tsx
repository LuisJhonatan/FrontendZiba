import { X } from 'lucide-react';
import Link from 'next/link';
import { useEffect } from 'react';

interface MenuMovileProps {
  isOpen: boolean;
  onClose: () => void;
}

const MenuMovile: React.FC<MenuMovileProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  return (
    <div className={`fixed top-16 inset-0 bg-black bg-opacity-0 transition-opacity duration-300 z-50 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'} sm:hidden`}>
      <aside className={`fixed top-16 left-0 w-[90%] h-full bg-black bg-opacity-15 transition-transform duration-300 z-50 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        {/* Botón para cerrar en la esquina superior derecha */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-white"
          aria-label="Cerrar menú"
        >
          <X className="w-9 h-9" /> {/* Tamaño del ícono */}
        </button>
        <nav className="flex flex-col space-y-2 mt-16">
          <Link href="/" className="text-lg bg-header pl-6 text-secondary py-1">Inicio</Link>
          <Link href="/" className="text-lg bg-header pl-6 text-secondary py-1">Productos</Link>
          <Link href="/" className="text-lg bg-header pl-6 text-secondary py-1">Ofertas especiales</Link>
          <Link href="/" className="text-lg bg-header pl-6 text-secondary py-1">Nuevo</Link>
        </nav>
      </aside>
    </div>
  );
};

export default MenuMovile;
