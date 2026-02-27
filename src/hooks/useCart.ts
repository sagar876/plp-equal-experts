import { useState } from "react";
import { ProductNode, CartRegistry } from "../types/product";

export function useCart() {
  const [cartState, setCartState] = useState<CartRegistry>({});
  const [drawerOpen, setDrawerOpen] = useState(false);

  const addItem = (product: ProductNode) => {
    setCartState((prev) => {
      const existing = prev[product.id];

      if (existing) {
        return {
          ...prev,
          [product.id]: {
            item: product,
            quantity: existing.quantity + 1
          }
        };
      }

      return {
        ...prev,
        [product.id]: {
          item: product,
          quantity: 1
        }
      };
    });
  };

  const incrementItem = (id: string) => {
    setCartState((prev) => {
      const existing = prev[id];
      if (!existing) return prev;

      return {
        ...prev,
        [id]: {
          ...existing,
          quantity: existing.quantity + 1
        }
      };
    });
  };

  const decrementItem = (id: string) => {
    setCartState((prev) => {
      const existing = prev[id];
      if (!existing) return prev;

      if (existing.quantity === 1) {
        const { [id]: _, ...rest } = prev;
        return rest;
      }

      return {
        ...prev,
        [id]: {
          ...existing,
          quantity: existing.quantity - 1
        }
      };
    });
  };

  const totalUnits = Object.values(cartState).reduce(
    (acc, entry) => acc + entry.quantity,
    0
  );

  const totalPrice = Object.values(cartState).reduce(
    (acc, entry) => acc + entry.item.price * entry.quantity,
    0
  );

  return {
    cartState,
    drawerOpen,
    setDrawerOpen,
    addItem,
    incrementItem,
    decrementItem,
    totalUnits,
    totalPrice
  };
}