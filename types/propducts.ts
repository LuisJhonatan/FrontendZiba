export interface Product {
  id_product: number;
  name_product: string;
  price: string;
  stock: number;
  color: string;
  description: string;
  rating: string;
  category: string;
  images: string[]; // Array de URLs de imágenes
}
