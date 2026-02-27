import { ReactNode } from "react";
import { ShoppingCart } from "lucide-react";

interface Props {
  children: ReactNode;
  onCartClick: () => void;
  totalItems: number;
}

export default function Layout({ children, onCartClick, totalItems }: Props) {
  return (
    <div className="min-h-screen bg-white">
      <header
        className="bg-header text-white px-6 py-4 flex justify-between items-center shadow-sm"
        role="banner"
      >
        <h1 className="text-lg font-semibold tracking-tight">
          Equal Experts Store
        </h1>

        <button
          type="button"
          onClick={onCartClick}
          aria-label={`Open cart with ${totalItems} items`}
          className="flex items-center gap-2 bg-header text-white px-4 py-2 rounded-md font-medium hover:opacity-90 transition-opacity"
        >
          <ShoppingCart className="w-5 h-5" aria-hidden />
          <span>Cart ({totalItems})</span>
        </button>
      </header>

      <main
        className="max-w-6xl mx-auto px-6 py-8"
        role="main"
      >
        {children}
      </main>
    </div>
  );
}