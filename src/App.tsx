import Layout from "./components/Layout";
import ProductList from "./components/ProductList";
import ProductSkeleton from "./components/ProductSkeleton";
import Cart from "./components/Cart";
import { useProductsFeed } from "./hooks/useProducts";
import { useCart } from "./hooks/useCart";

const SKELETON_COUNT = 8;

export default function App() {
  const { records, loadingState, errorState } = useProductsFeed();

  const {
    cartItems,
    isCartDrawerOpen,
    setIsCartDrawerOpen,
    addProductToCart,
    increaseProductQuantity,
    decreaseProductQuantity,
    totalUnitsInCart,
    totalCartPrice
  } = useCart();

  return (
    <>
      <Layout
        totalItems={totalUnitsInCart}
        onCartClick={() => setIsCartDrawerOpen(true)}
      >
        {loadingState && (
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {Array.from({ length: SKELETON_COUNT }).map((_, i) => (
              <ProductSkeleton key={i} />
            ))}
          </div>
        )}
        {errorState && <p>{errorState}</p>}

        {!loadingState && !errorState && (
          <ProductList
            items={records}
            cartItems={cartItems}
            onAdd={addProductToCart}
            onIncrease={increaseProductQuantity}
            onDecrease={decreaseProductQuantity}
          />
        )}
      </Layout>

      <Cart
        isOpen={isCartDrawerOpen}
        onClose={() => setIsCartDrawerOpen(false)}
        cartItems={cartItems}
        totalPrice={totalCartPrice}
        onIncrease={increaseProductQuantity}
        onDecrease={decreaseProductQuantity}
      />
    </>
  );
}