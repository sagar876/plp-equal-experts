import ProductCard from "./ProductCard";
import { ProductNode, CartItem } from "../types/product";

interface Props {
  items: ProductNode[];
  cartItems: CartItem[];
  onAdd: (item: ProductNode) => void;
  onIncrease: (productId: string) => void;
  onDecrease: (productId: string) => void;
}

export default function ProductList({
  items,
  cartItems,
  onAdd,
  onIncrease,
  onDecrease
}: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6">
      {items.map((node) => (
        <ProductCard
          key={node.id}
          productUnit={node}
          cartItems={cartItems}
          onAdd={onAdd}
          onIncrease={onIncrease}
          onDecrease={onDecrease}
        />
      ))}
    </div>
  );
}