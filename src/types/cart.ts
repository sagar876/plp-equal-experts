import { CartItem } from "./product";

export type CartProps = {
    isOpen: boolean;
    onClose: () => void;
    cartItems: CartItem[];
    totalPrice: number;
    onIncrease: (productId: string) => void;
    onDecrease: (productId: string) => void;
  }
  