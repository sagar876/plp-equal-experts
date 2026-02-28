import { renderHook, waitFor } from "@testing-library/react";
import { useProductsFeed } from "../useProducts";

const mockProducts = [
  {
    id: "1",
    title: "Test Product",
    price: 10,
    description: "Test description",
    image: "test.jpg"
  }
];

describe("useProductsFeed", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  test("fetches and sets products successfully", async () => {
    jest.spyOn(global, "fetch").mockResolvedValue({
      ok: true,
      json: async () => mockProducts
    } as Response);

    const { result } = renderHook(() => useProductsFeed());

    // Initially loading
    expect(result.current.loadingState).toBe(true);

    await waitFor(() => {
      expect(result.current.loadingState).toBe(false);
    });

    expect(result.current.records).toEqual(mockProducts);
    expect(result.current.errorState).toBeNull();
  });

  test("handles non-ok response", async () => {
    jest.spyOn(global, "fetch").mockResolvedValue({
      ok: false
    } as Response);

    const { result } = renderHook(() => useProductsFeed());

    await waitFor(() => {
      expect(result.current.loadingState).toBe(false);
    });

    expect(result.current.records).toEqual([]);
    expect(result.current.errorState).toBe("Unable to load products.");
  });

  test("handles fetch throwing error", async () => {
    jest.spyOn(global, "fetch").mockRejectedValue(
      new Error("Network error")
    );

    const { result } = renderHook(() => useProductsFeed());

    await waitFor(() => {
      expect(result.current.loadingState).toBe(false);
    });

    expect(result.current.records).toEqual([]);
    expect(result.current.errorState).toBe("Unable to load products.");
  });
});