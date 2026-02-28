import { useEffect, useState } from "react";
import { ProductNode } from "../types/product";

export function useProductsFeed() {
  const [records, setRecords] = useState<ProductNode[]>([]);
  const [loadingState, setLoadingState] = useState(true);
  const [errorState, setErrorState] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch(
          "https://equalexperts.github.io/frontend-take-home-test-data/products.json"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data: ProductNode[] = await response.json();
        setRecords(data);
      } catch (error) {
        console.error("Error fetching products:", error);
        setErrorState("Unable to load products.");
      } finally {
        setLoadingState(false);
      }
    }

    fetchProducts();
  }, []);

  return { records, loadingState, errorState };
}