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

  useEffect(() => {
    if (openFlag) {
      const previous = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = previous;
      };
    }
  }, [openFlag]);

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
        className={`fixed top-[72px] right-0 h-full w-80 bg-white shadow-xl transform transition-transform border-l border-ee-stone ${
          openFlag ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <header className="flex items-center justify-between px-5 py-4 border-b border-ee-stone bg-header text-white shrink-0">
            <h2 className="text-lg font-semibold">Cart</h2>
            <button
              type="button"
              aria-label="Close cart"
              onClick={onCloseDrawer}
              className="p-1.5 rounded-full text-white/80 hover:bg-white/10 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </header>

          <ul className="flex-1 overflow-y-auto px-4 py-3 space-y-3 bg-stone/30">
            {entries.length === 0 && (
              <li className="py-8 text-center text-gray-500 text-sm">
                Your cart is empty.
              </li>
            )}

            {entries.map((entry) => {
              const lineTotal = (entry.item.price * entry.quantity).toFixed(2);
              return (
                <li
                  key={entry.item.id}
                  className="rounded-lg border border-ee-stone bg-white p-3 shadow-sm"
                >
                  <p className="font-medium text-ee-header text-sm leading-tight">
                    {entry.item.title}
                  </p>
                  <div className="mt-1.5 flex items-baseline justify-between gap-2">
                    <span className="text-xs text-gray-500">
                      £{entry.item.price.toFixed(2)} × {entry.quantity}
                    </span>
                    <span className="text-sm font-semibold text-ee-header">
                      £{lineTotal}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      type="button"
                      onClick={() => onDecrement(entry.item.id)}
                      className="flex-1 py-1.5 text-sm font-medium rounded-md border border-ee-teal/30 text-ee-header bg-white transition-colors"
                      aria-label={`Decrease quantity of ${entry.item.title}`}
                    >
                      −
                    </button>
                    <span className="text-sm font-medium text-ee-header min-w-[1.5rem] text-center">
                      {entry.quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => onIncrement(entry.item.id)}
                      className="flex-1 py-1.5 text-sm font-medium rounded-md border border-ee-teal/30 text-ee-header bg-white transition-colors"
                      aria-label={`Increase quantity of ${entry.item.title}`}
                    >
                      +
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>

          {entries.length > 0 && (
            <footer className="shrink-0 border-t border-ee-stone text-white px-4 py-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-white/90">Cart total</span>
                <span className="text-lg font-bold">£{totalPrice.toFixed(2)}</span>
              </div>
            </footer>
          )}
        </div>
      </aside>
    </>
  );
}