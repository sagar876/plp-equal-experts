import { useEffect } from "react";
import { CartProps } from "../types/cart";


export default function Cart({
  isOpen,
  onClose,
  cartItems,
  totalPrice,
  onIncrease,
  onDecrease
}: CartProps) {

  return (
    <>
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black bg-opacity-40 ${
          isOpen ? "block" : "hidden"
        }`}
      />

      <aside
        role="dialog"
        aria-modal="true"
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform transition-transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 flex flex-col h-full">
          <div className="flex justify-between mb-6">
            <h2 className="text-lg font-semibold">Cart</h2>
            <button onClick={onClose}>X</button>
          </div>

          <ul className="flex-1 overflow-y-auto space-y-4">
            {cartItems.length === 0 && (
              <li className="text-gray-500">
                Cart is empty.
              </li>
            )}

            {cartItems.map((item) => (
              <li key={item.id} className="border-b pb-3">
                <p>{item.title}</p>
                <p>
                  £ {item.price} × {item.quantity} = £ {item.price * item.quantity}
                </p>

                <div className="flex gap-3 mt-2">
                  <button
                    onClick={() => onDecrease(item.id)}
                    className="px-2 border rounded"
                  >
                    -
                  </button>
                <span>{item.quantity}</span>
                  <button
                    onClick={() => onIncrease(item.id)}
                    className="px-2 border rounded"
                  >
                    +
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-6 font-semibold">
            Total: £ {totalPrice}
          </div>
        </div>
      </aside>
    </>
  );
}