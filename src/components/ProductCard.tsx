import { ProductCardProps } from "../types/product";

export default function ProductCard({
  productUnit,
  cartItems,
  onAdd,
  onIncrease,
  onDecrease
}: ProductCardProps) {
  const existing = cartItems.find(
    item => item.id === productUnit.id
  );

  return (
    <div className="border rounded-lg p-4 shadow-sm flex flex-col h-full">
      <img
        src={productUnit.image}
        alt={productUnit.title}
        className="w-full h-48 object-contain mb-4 shrink-0"
      />

      <h2 className="text-lg font-medium mb-2 shrink-0">
        {productUnit.title}
      </h2>

      <p className="text-sm text-gray-600 mb-4 flex-1 min-h-0">
        {productUnit.description}
      </p>

      <div className="flex justify-between items-center shrink-0">
        <span className="text-primary font-semibold">
          £{productUnit.price}
        </span>

        {!existing ? (
          <button
            type="button"
            onClick={() => onAdd(productUnit)}
            className="bg-primary text-white px-3 py-2 rounded"
          >
            Add to Cart
          </button>
        ) : (
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => onDecrease(productUnit.id)}
              className="px-3 py-1 border rounded"
            >
              -
            </button>

            <span>{existing.quantity}</span>

            <button
              type="button"
              onClick={() => onIncrease(productUnit.id)}
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