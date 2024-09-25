import SliderHome from "@/components/Slider";
import { getProducts } from "@/services/products";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/propducts";
import Carousel from "@/components/CarouselProducts";
import { IconTablerBrandWhatsapp, IconWhatsapp } from "@/components/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default async function Home() {
  let bestSellingProducts: Product[] = [];

  try {
    bestSellingProducts = await getProducts();
  } catch (error) {
    console.error("Error fetching products:", error);
  }

  // Asegúrate de que bestSellingProducts sea un array
  bestSellingProducts = bestSellingProducts || [];

  const slides = [
    {
      src: "https://via.placeholder.com/1200x400.png?text=Image+1",
      alt: "Slide 1",
    },
    {
      src: "https://via.placeholder.com/1200x400.png?text=Image+2",
      alt: "Slide 2",
    },
    {
      src: "https://via.placeholder.com/1200x400.png?text=Image+3",
      alt: "Slide 3",
    },
  ];

  return (
    <div>
      <main className="min-w-80">
        <SliderHome slides={slides} />
        <section className="min-w-80 max-w-[1280px] mx-auto px-3">
          <div className="w-full mx-auto py-3 sm:px-0 md:py-6">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold inline-block">
              Nuestros productos
            </h1>
          </div>
          <div className="w-full mx-auto grid grid-cols-2 gap-4 lg:gap-8">
            <Link
              href=""
              className="group relative col-span-2 lg:col-span-1 lg:row-span-2"
            >
              <Image
                src="/images/home/home1.png"
                alt="home1"
                width={1000}
                height={1000}
                className="h-full object-cover transition-all duration-300 group-hover:brightness-50"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-6 py-6 md:px-12 md:py-12">
                <div className="w-full h-full border-4 border-white flex items-center justify-center">
                  <div className="text-white text-xl md:text-3xl lg:text-5xl font-semibold ">
                    CARTERAS
                  </div>
                </div>
              </div>
            </Link>

            <Link href="" className="group relative">
              <Image
                src="/images/home/home2.png"
                alt="home2"
                width={1000}
                height={1000}
                className="h-full object-cover transition-all duration-300 group-hover:brightness-50"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-6 py-6 md:px-12 md:py-12">
                <div className="w-full h-full border-4 border-white flex items-center justify-center">
                  <div className="text-white text-xl md:text-3xl lg:text-5xl font-semibold ">
                    MOCHILAS
                  </div>
                </div>
              </div>
            </Link>
            <Link href="" className="group relative">
              <Image
                src="/images/home/home3.png"
                alt="home3"
                width={1000}
                height={1000}
                className="h-full object-cover transition-all duration-300 group-hover:brightness-50"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-6 py-6 md:px-12 md:py-12">
                <div className="w-full h-full border-4 border-white flex items-center justify-center">
                  <div className="text-white text-xl md:text-3xl lg:text-5xl font-semibold ">
                    BILLETERAS
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="w-full mx-auto py-3 sm:px-0 md:py-6">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold inline-block">
              Lo mas vendido
            </h1>
          </div>

          <div className="w-full mx-auto py-10 sm:px-0 md:py-6 ">
            <Carousel products={bestSellingProducts.slice(0, 10)} />{" "}
            {/* Muestra solo los primeros 10 productos para el carrusel */}
          </div>
          <div className="fixed bottom-5 right-5">
            <a
              href="https://wa.me/51903315552?text=Hola,%20estoy%20interesado%20en%20adquirir%20uno%20de%20sus%20productos,%20quiero%20mas%20información"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="p-4 rounded-full animate-pulse">
                <IconWhatsapp className="w-16 h-16"/>
              </button>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
