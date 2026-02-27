import ProductCard from "./ProductCard";
import { ProductNode, CartRegistry } from "../types/product";

interface Props {
  items: ProductNode[];
  cartState: CartRegistry;
  onAdd: (item: ProductNode) => void;
  onIncrement: (id: string) => void;
  onDecrement: (id: string) => void;
}

export default function ProductList({
  items,
  cartState,
  onAdd,
  onIncrement,
  onDecrement
}: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((node) => (
        <ProductCard
          key={node.id}
          productUnit={node}
          cartState={cartState}
          onAdd={onAdd}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
        />
      ))}
    </div>
  );
}