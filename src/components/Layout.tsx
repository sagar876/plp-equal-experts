import { ReactNode } from "react";
import { ShoppingCart } from "lucide-react";

interface Props {
  children: ReactNode;
  totalItems: number;
  onCartClick: () => void;
}

export default function Layout({
  children,
  totalItems,
  onCartClick
}: Props) {
  return (
    <div className="min-h-screen bg-white">
      <header
        className="bg-secondary text-white px-6 py-4 flex justify-between"
        role="banner"
      >
        <h1 className="flex items-center">
          <img
            src="/2024-Logo.svg"
            alt="Equal Experts Store"
            className="h-8 w-auto"
          />
        </h1>

        <button
          type="button"
          onClick={onCartClick}
          className="bg-white text-primary px-4 py-2 rounded font-medium flex items-center gap-2"
        >
          <ShoppingCart size={20} />
          Cart ({totalItems})
        </button>
      </header>

      <main
        role="main"
        className="mx-auto px-6 py-8"
      >
        {children}
      </main>
    </div>
  );
}