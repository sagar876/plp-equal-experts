import { useEffect } from "react";
import { CartRegistry } from "../types/product";

interface Props {
  openFlag: boolean;
  onCloseDrawer: () => void;
  cartState: CartRegistry;
  totalPrice: number;
  onIncrement: (id: string) => void;
  onDecrement: (id: string) => void;
}

export default function Cart({
  openFlag,
  onCloseDrawer,
  cartState,
  totalPrice,
  onIncrement,
  onDecrement
}: Props) {
  const entries = Object.values(cartState);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onCloseDrawer();
      }
    };

    if (openFlag) {
      window.addEventListener("keydown", handleEscape);
    }

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [openFlag, onCloseDrawer]);

  return (
    <>
      <div
        onClick={onCloseDrawer}
        className={`fixed inset-0 bg-black bg-opacity-40 ${
          openFlag ? "block" : "hidden"
        }`}
      />

      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform transition-transform ${
          openFlag ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 flex flex-col h-full">
          <div className="flex justify-between mb-6">
            <h2 className="text-lg font-semibold">Cart</h2>
            <button
              type="button"
              aria-label="Close cart"
              onClick={onCloseDrawer}
            >
              X
            </button>
          </div>

          <ul className="flex-1 overflow-y-auto space-y-4">
            {entries.length === 0 && (
              <li className="text-gray-500">
                Cart is empty.
              </li>
            )}

            {entries.map((entry) => (
              <li key={entry.item.id} className="border-b pb-3">
                <p>{entry.item.title}</p>
                <p>
                  £{entry.item.price} × {entry.quantity}
                </p>

                <div className="flex gap-3 mt-2">
                  <button
                    type="button"
                    onClick={() => onDecrement(entry.item.id)}
                    className="px-2 border rounded"
                  >
                    -
                  </button>

                  <button
                    type="button"
                    onClick={() => onIncrement(entry.item.id)}
                    className="px-2 border rounded"
                  >
                    +
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-6 font-semibold">
            Total: £{totalPrice}
          </div>
        </div>
      </aside>
    </>
  );
}