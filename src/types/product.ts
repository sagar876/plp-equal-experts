export interface ProductNode {
    id: string;
    title: string;
    price: number;
    description: string;
    image: string;
  }

  export type ProductListProps = {
    items: ProductNode[];
    cartItems: CartItem[];
    onAdd: (item: ProductNode) => void;
    onIncrease: (productId: string) => void;
    onDecrease: (productId: string) => void;
  }

  export type ProductCardProps ={
    productUnit: ProductNode;
    cartItems: CartItem[];
    onAdd: (item: ProductNode) => void;
    onIncrease: (productId: string) => void;
    onDecrease: (productId: string) => void;
  }
  
  
  export type CartItem = ProductNode & {
    quantity: number;
  };

