import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onCartClick: () => void;
  totalItems: number;
}

export default function Layout({ children, onCartClick, totalItems }: Props) {
  return (
    <div className="min-h-screen bg-white">
      <header
        className="bg-brandRed text-white px-6 py-4 flex justify-between"
        role="banner"
      >
        <h1 className="text-lg font-semibold">
          Equal Experts Store
        </h1>

        <button
          type="button"
          onClick={onCartClick}
          aria-label={`Open cart with ${totalItems} items`}
          className="bg-white text-brandRed px-4 py-2 rounded font-medium"
        >
          Cart ({totalItems})
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