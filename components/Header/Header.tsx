"use client";
import { useState } from "react";
import MenuDesktop from "./Menu/MenuDesktop";
import MenuMovile from "./Menu/MenuMobile";
import Link from "next/link";
import Image from "next/image";
import { CircleUser, Menu } from "lucide-react";
import { IconBxsShoppingBag, IconBxUser, IconIonBagOutline } from "../icons";
import { Button } from "../UI/button";
import SearchForm from "./SearchForm";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Envuelve el Header en un contenedor */}
      <div className="bg-header w-full border-b-[1px] border-primary">
        <header className="relative flex justify-between items-center p-4 bg-header min-w-80 sm:w-11/12 md:w-11/12 lg:w-10/12 xl:w-9/12 2xl:w-8/12 max-w-[1200px] mx-auto">
          {/* Solo para movil */}
          <button onClick={toggleMobileMenu} className="sm:hidden">
            <Menu className="text-primary" />
          </button>
          {/* Logo principal */}
          <div className="absolute left-1/2 transform -translate-x-1/2 sm:static sm:transform-none sm:left-auto flex items-center gap-[10px] md:gap-10">
            <Link href="/">
              <Image
                src="/images/logo2.png"
                alt="logo"
                width={500}
                height={500}
                className="w-12 h-12 sm:w-20 sm:h-20"
              />
            </Link>
            <div className="hidden sm:block">
              <SearchForm />
            </div>
          </div>
          {/* Solo para móvil */}
          <div className="flex gap-1 sm:hidden">
            <div>
              <Link href="">
                <CircleUser
                  className="w-8 h-8 text-primary "
                  strokeWidth={0.8}
                />
              </Link>
            </div>
            <div className="relative">
              <Link href="/carrito">
                <IconIonBagOutline className="w-8 h-8 text-primary " />
              </Link>
              <div className="absolute text-[12px] top-0 right-0 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center">
                2
              </div>
            </div>
          </div>

          <div className="hidden sm:flex gap-4">
            <div>
              <Button
                variant="account"
                className="flex gap-2 py-3 px-5 font-semibold"
              >
                <IconBxUser />
                <span>Mi cuenta</span>
              </Button>
            </div>
            <div>
              <Button
                variant="account"
                className="flex gap-2 py-3 px-5 font-semibold"
              >
                <IconBxsShoppingBag />
                <span>S/.234.90</span>
              </Button>
            </div>
          </div>

          <MenuMovile isOpen={isMobileMenuOpen} onClose={toggleMobileMenu} />
        </header>
      </div>

      {/* MenuDesktop colocado dentro del flujo normal del documento */}
      <div className="hidden sm:block bg-header w-full border-b-[1px] border-primary p-2">
        <MenuDesktop />
      </div>
    </>
  );
};

export default Header;
