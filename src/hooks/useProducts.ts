import { Product } from "@/types";
import { useEffect, useState } from "react";

export function useProducts() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState<Product[]>();

  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:3001/products");
      const products = await response.json();
      setProducts(products);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return { loading, products };
}
