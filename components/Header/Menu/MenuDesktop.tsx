import { Button } from "@/components/UI/button";
import Link from "next/link";

const MenuDesktop: React.FC = () => {
  return (
    <div className="hidden sm:block sm:w-11/12 md:w-10/12 lg:w-8/12 mx-auto">
      <nav className="flex justify-center gap-4">
        <div>
          <Button variant="header">
            <Link href="#" className="text-xl">
              Inicio
            </Link>
          </Button>
        </div>

        <div>
          <Button variant="header">
            <Link href="#" className="text-xl">
              Productos
            </Link>
          </Button>
        </div>
        <div>
          <Button variant="header">
            <Link href="#" className="text-xl">
              Ofertas especiales
            </Link>
          </Button>
        </div>
        <div>
          <Button variant="header">
            <Link href="#" className="text-lg">
              Nuevo
            </Link>
          </Button>
        </div>
      </nav>
    </div>
  );
};

export default MenuDesktop;
