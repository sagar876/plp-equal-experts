export interface ProductNode {
    id: string;
    title: string;
    price: number;
    description: string;
    image: string;
  }
  
  export type CartItem = ProductNode & {
    quantity: number;
  };