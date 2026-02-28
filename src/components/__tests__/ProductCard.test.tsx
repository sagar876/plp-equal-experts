import { render, screen, fireEvent } from "@testing-library/react";
import ProductCard from "../ProductCard";

const mockProduct = {
  id: "1",
  title: "Test Item",
  price: 10,
  description: "Test description",
  image: ""
};

describe("ProductCard (array cart)", () => {
  test("renders Add to Cart when not in cart", () => {
    render(
      <ProductCard
        productUnit={mockProduct}
        cartItems={[]}
        onAdd={jest.fn()}
        onIncrease={jest.fn()}
        onDecrease={jest.fn()}
      />
    );

    expect(screen.getByText("Add to Cart")).toBeInTheDocument();
  });

  test("calls onAdd when clicked", () => {
    const mockHandler = jest.fn();

    render(
      <ProductCard
        productUnit={mockProduct}
        cartItems={[]}
        onAdd={mockHandler}
        onIncrease={jest.fn()}
        onDecrease={jest.fn()}
      />
    );

    fireEvent.click(screen.getByText("Add to Cart"));
    expect(mockHandler).toHaveBeenCalledWith(mockProduct);
  });

  test("renders + and - when item exists in cart", () => {
    render(
      <ProductCard
        productUnit={mockProduct}
        cartItems={[
          { ...mockProduct, quantity: 2 }
        ]}
        onAdd={jest.fn()}
        onIncrease={jest.fn()}
        onDecrease={jest.fn()}
      />
    );

    expect(screen.getByText("2")).toBeInTheDocument();
    expect(screen.getByText("+")).toBeInTheDocument();
    expect(screen.getByText("-")).toBeInTheDocument();
  });
});