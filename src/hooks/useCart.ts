import { useState, useMemo } from "react";
import { ProductNode, CartItem } from "../types/product";

export function useCart() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartDrawerOpen, setIsCartDrawerOpen] = useState(false);

  const addProductToCart = (product: ProductNode) => {
    setCartItems((prevCartItems) => {
        const ifItemExistsInCart = prevCartItems.find(cartItem => cartItem.id === product.id);
       
        if(ifItemExistsInCart){
            return prevCartItems.map(cartItem=> {
                if(cartItem.id === product.id){
                    return {
                        ...cartItem,
                        quantity: cartItem.quantity + 1
                    }
                }
                return cartItem;
            })
        }
        return [...prevCartItems,{...product, quantity: 1}]
    });
  };

  const increaseProductQuantity = (productId: string) => {
    setCartItems((prevCartItems) =>
      prevCartItems.map((cartItem) =>
        cartItem.id === productId
          ? {
              ...cartItem,
              quantity: cartItem.quantity + 1
            }
          : cartItem
      )
    );
  };

  const decreaseProductQuantity = (productId: string) => {
    setCartItems((prevCartItems) =>
      prevCartItems
        .map((cartItem) =>
          cartItem.id === productId
            ? {
                ...cartItem,
                quantity: cartItem.quantity - 1
              }
            : cartItem
        )
        .filter((cartItem) => cartItem.quantity > 0)
    );
  };

  const totalUnitsInCart = useMemo(() => {
    return cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
  }, [cartItems]);

  const totalCartPrice = useMemo(() => {
    return cartItems.reduce(
      (total, cartItem) =>
        total + cartItem.price * cartItem.quantity,
      0
    );
  }, [cartItems]);

  return {
    cartItems,
    isCartDrawerOpen,
    setIsCartDrawerOpen,
    addProductToCart,
    increaseProductQuantity,
    decreaseProductQuantity,
    totalUnitsInCart,
    totalCartPrice
  };
}