import { ProductNode, CartRegistry } from "../types/product";

interface Props {
  productUnit: ProductNode;
  cartState: CartRegistry;
  onAdd: (item: ProductNode) => void;
  onIncrement: (id: string) => void;
  onDecrement: (id: string) => void;
}

export default function ProductCard({
  productUnit,
  cartState,
  onAdd,
  onIncrement,
  onDecrement
}: Props) {
  const existing = cartState[productUnit.id];

  return (
    <div className="border rounded-lg p-4 shadow-sm">
      <img
        src={productUnit.image}
        alt={productUnit.title}
        className="w-full h-48 object-contain mb-4"
      />

      <h2 className="text-lg font-medium mb-2">
        {productUnit.title}
      </h2>

      <p className="text-sm text-gray-600 mb-4">
        {productUnit.description}
      </p>

      <div className="flex justify-between items-center">
        <span className="text-brandRed font-semibold">
          £{productUnit.price}
        </span>

        {!existing ? (
          <button
            type="button"
            onClick={() => onAdd(productUnit)}
            className="bg-brandRed text-white px-3 py-2 rounded"
          >
            Add to Cart
          </button>
        ) : (
          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="Decrease quantity"
              onClick={() => onDecrement(productUnit.id)}
              className="px-3 py-1 border rounded"
            >
              -
            </button>

            <span>{existing.quantity}</span>

            <button
              type="button"
              aria-label="Increase quantity"
              onClick={() => onIncrement(productUnit.id)}
              className="px-3 py-1 border rounded"
            >
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
}