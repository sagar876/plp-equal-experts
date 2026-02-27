import { useEffect, useState } from "react";
import { ProductNode } from "../types/product";

export function useProductsFeed() {
  const [records, setRecords] = useState<ProductNode[]>([]);
  const [loadingState, setLoadingState] = useState(true);
  const [errorState, setErrorState] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://equalexperts.github.io/frontend-take-home-test-data/products.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }
        return res.json();
      })
      .then((data) => {
        setRecords(data);
        setLoadingState(false);
      })
      .catch(() => {
        setErrorState("Unable to load products.");
        setLoadingState(false);
      });
  }, []);

  return { records, loadingState, errorState };
}