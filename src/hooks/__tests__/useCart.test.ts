import { renderHook, act } from "@testing-library/react";
import { useCart } from "../useCart";

const mockProduct = {
  id: "1",
  title: "Test Item",
  price: 10,
  description: "",
  image: ""
};

describe("useCart", () => {
  test("adds item to cart", () => {
    const { result } = renderHook(() => useCart());

    act(() => {
      result.current.addItem(mockProduct);
    });

    expect(result.current.cartState["1"].quantity).toBe(1);
  });

  test("increments quantity if item already exists", () => {
    const { result } = renderHook(() => useCart());

    act(() => {
      result.current.addItem(mockProduct);
      result.current.incrementItem("1");
    });

    expect(result.current.cartState["1"].quantity).toBe(2);
  });

  test("calculates totalUnits correctly", () => {
    const { result } = renderHook(() => useCart());

    act(() => {
      result.current.addItem(mockProduct);
      result.current.incrementItem("1");
    });

    expect(result.current.totalUnits).toBe(2);
  });

  test("calculates totalPrice correctly", () => {
    const { result } = renderHook(() => useCart());

    act(() => {
      result.current.addItem(mockProduct);
      result.current.incrementItem("1");
    });

    expect(result.current.totalPrice).toBe(20);
  });

  test("controls drawer state", () => {
    const { result } = renderHook(() => useCart());

    act(() => {
      result.current.setDrawerOpen(true);
    });

    expect(result.current.drawerOpen).toBe(true);
  });
});