"use client";
import InputPassword from "@/components/InputPassword";
import Input from "@/components/UI/input";
import { RegisterFormData, registerSchema } from "@/lib/validators/auth";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import InputNumeric from "@/components/InputNumeric";
import { Label } from "@/components/UI/label";
import * as HoverCard from "@radix-ui/react-hover-card";
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/UI/dialog";
import { Modal } from "@/components/UI/modal";
import HoverCardComponent from "@/components/UI/hoverCard";
import { Card } from "@/components/Card";
import SelectUI from "@/components/UI/selectUI";
import { useSelectLogic } from "@/components/Select";

interface Product {
  id: number;
  name: string;
  price: number;
}

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (data: RegisterFormData) => {
    console.log("Login Data:", data);
  };

  const [products, setProducts] = useState<Product[]>([
    { id: 1, name: 'Producto A', price: 20 },
    { id: 2, name: 'Producto B', price: 50 },
    { id: 3, name: 'Producto C', price: 10 },
  ]);

  // Hook para controlar el estado del select
  const selectLogic = useSelectLogic();

  const options = [
    { label: 'Precio: Bajo a Alto', value: 'price_asc' },
    { label: 'Precio: Alto a Bajo', value: 'price_desc' },
    { label: 'Nuevos Productos', value: 'newest' },
    { label: 'Más Vendidos', value: 'bestselling' },
  ];


  useEffect(() => {
    if (selectLogic.selectedOption) {
      setProducts(prevProducts => {
        const sortedProducts = [...prevProducts]; // Hace una copia del array original.
        const { value } = selectLogic.selectedOption;
        
        switch (value) {
          case 'price_asc':
            sortedProducts.sort((a, b) => a.price - b.price);
            break;
          case 'price_desc':
            sortedProducts.sort((a, b) => b.price - a.price);
            break;
          case 'newest':
            sortedProducts.sort((a, b) => b.id - a.id);
            break;
          case 'bestselling':
            // Lógica para más vendidos (ajustar según tus datos)
            break;
        }
  
        return sortedProducts; // Solo actualizamos el estado si los productos cambian.
      });
    }
  }, [selectLogic.selectedOption]);// Eliminamos `products` de las dependencias
  
  return (
    <div className="w-full flex flex-col justify-center items-center gap-12">
      {/* <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-96 p-3 bg-slate-300 rounded-lg"
      >
        <Input
          label="Correo"
          type="email"
          register={register("email")}
          errorMessage={errors.email?.message}
        />
        <InputPassword
          label="Contraseña"
          register={register("password")}
          errorMessage={errors.password?.message}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded w-36 self-center"
        >
          Iniciar Sesión
        </button>
      </form> */}

      <form className="w-96 p-3  rounded-lg" onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Nombre"
          type="text"
          register={register("name")}
          errorMessage={errors.name?.message}
        />
        <Input
          label="Correo"
          type="email"
          register={register("email")}
          errorMessage={errors.email?.message}
        />
        <InputPassword
          label="Contraseña"
          register={register("password")}
          errorMessage={errors.password?.message}
        />
        <InputNumeric
          label="edad"
          register={register("numero")}
          errorMessage={errors.password?.message}
        />

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Registrarse
        </button>
      </form>
      <Label>
        <section>asdasd</section>
        <section>asdasd</section>
        asdasd
      </Label>

      <input
        type="text"
        className="border text-sm border-gray-800 rounded-[4px] px-[6px] py-1 transition-colors duration-300 hover:border-black focus:border-black focus:outline-none"
      />
      <div>
        {/* <Dialog>
        <DialogTrigger asChild>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md">
            Open Dialog
          </button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Action</DialogTitle>
            <DialogDescription>
              Are you sure you want to perform this action? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild>
              <button className="px-4 py-2 bg-gray-300 rounded-md">Cancel</button>
            </DialogClose>
            <button className="px-4 py-2 bg-red-600 text-white rounded-md">
              Confirm
            </button>
          </DialogFooter>
        </DialogContent>
      </Dialog> */}
      </div>
      <div>
        <button
          onClick={openModal}
          className="p-2 bg-blue-500 text-white rounded"
        >
          Abrir Modal
        </button>

        <Modal isOpen={isOpen} onClose={closeModal} animation="bottom">
          <h2 className="text-xl font-semibold">
            Este es el contenido del modal
          </h2>
          <p>Es totalmente personalizable y tiene animaciones de entrada.</p>
        </Modal>
        <Card
          imageSrc="https://www.sercoplus.com/26443-large_default/mando-logitech-f310-usb.jpg"
          hoverImageSrc="https://www.sercoplus.com/26444-large_default/mando-logitech-f310-usb.jpg"
          name="Nombre cartera asd asda sda ss pepinillo"
          price={999.99}
          stock={100}
          rating={4.3}
        />
      </div>
      <div>
      <SelectUI {...selectLogic} options={options} />
      
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
}
