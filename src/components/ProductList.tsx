import ProductCard from "./ProductCard";
import { ProductNode, ProductListProps } from "../types/product";



export default function ProductList({
  items,
  cartItems,
  onAdd,
  onIncrease,
  onDecrease
}: ProductListProps) {
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