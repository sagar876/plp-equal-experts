import Layout from "./components/Layout";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import { useProductsFeed } from "./hooks/useProducts";
import { useCart } from "./hooks/useCart";

export default function App() {
  const { records, loadingState, errorState } = useProductsFeed();

  const {
    cartState,
    drawerOpen,
    setDrawerOpen,
    addItem,
    incrementItem,
    decrementItem,
    totalUnits,
    totalPrice
  } = useCart();

  return (
    <>
      <Layout
        totalItems={totalUnits}
        onCartClick={() => setDrawerOpen(true)}
      >
        {loadingState && <p>Loading...</p>}
        {errorState && <p>{errorState}</p>}
        {!loadingState && !errorState && (
          <ProductList
            items={records}
            cartState={cartState}
            onAdd={addItem}
            onIncrement={incrementItem}
            onDecrement={decrementItem}
          />
        )}
      </Layout>

      <Cart
        openFlag={drawerOpen}
        onCloseDrawer={() => setDrawerOpen(false)}
        cartState={cartState}
        totalPrice={totalPrice}
        onIncrement={incrementItem}
        onDecrement={decrementItem}
      />
    </>
  );
}