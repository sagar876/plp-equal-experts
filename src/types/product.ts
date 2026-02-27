export interface ProductNode {
    id: string;
    title: string;
    price: number;
    description: string;
    image: string;
  }
  
  export interface CartEntry {
    item: ProductNode;
    quantity: number;
  }
  
  export type CartRegistry = Record<string, CartEntry>;