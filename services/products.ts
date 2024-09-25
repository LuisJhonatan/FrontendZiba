import { api } from "@/lib/api";
import { Product } from "@/types/propducts";

export const getProducts = async (): Promise<Product[]> => {
  const response = await api.get("products");
  return response.data as Product[];
};
