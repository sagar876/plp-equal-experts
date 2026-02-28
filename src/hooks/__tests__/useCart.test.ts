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
  test("adds product to cart", () => {
    const { result } = renderHook(() => useCart());

    act(() => {
      result.current.addProductToCart(mockProduct);
    });

    expect(result.current.cartItems.length).toBe(1);
    expect(result.current.cartItems[0].quantity).toBe(1);
  });

  test("increases product quantity", () => {
    const { result } = renderHook(() => useCart());

    act(() => {
      result.current.addProductToCart(mockProduct);
      result.current.increaseProductQuantity("1");
    });

    const item = result.current.cartItems.find(
      item => item.id === "1"
    );

    expect(item?.quantity).toBe(2);
  });

  test("decreases product quantity", () => {
    const { result } = renderHook(() => useCart());

    act(() => {
      result.current.addProductToCart(mockProduct);
      result.current.increaseProductQuantity("1");
      result.current.decreaseProductQuantity("1");
    });

    const item = result.current.cartItems.find(
      item => item.id === "1"
    );

    expect(item?.quantity).toBe(1);
  });

  test("removes product when quantity becomes zero", () => {
    const { result } = renderHook(() => useCart());

    act(() => {
      result.current.addProductToCart(mockProduct);
      result.current.decreaseProductQuantity("1");
    });

    expect(result.current.cartItems.length).toBe(0);
  });

  test("calculates total units and total price correctly", () => {
    const { result } = renderHook(() => useCart());

    act(() => {
      result.current.addProductToCart(mockProduct);
      result.current.increaseProductQuantity("1");
    });

    expect(result.current.totalUnitsInCart).toBe(2);
    expect(result.current.totalCartPrice).toBe(20);
  });

  test("controls cart drawer state", () => {
    const { result } = renderHook(() => useCart());

    act(() => {
      result.current.setIsCartDrawerOpen(true);
    });

    expect(result.current.isCartDrawerOpen).toBe(true);
  });
});