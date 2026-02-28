import { render, screen } from "@testing-library/react";
import ProductList from "../ProductList";

const mockItems = [
  {
    id: "1",
    title: "Item One",
    price: 10,
    description: "",
    image: ""
  },
  {
    id: "2",
    title: "Item Two",
    price: 20,
    description: "",
    image: ""
  }
];

describe("ProductList", () => {
  test("renders all products", () => {
    render(
      <ProductList
        items={mockItems}
        cartItems={[]}
        onAdd={jest.fn()}
        onIncrease={jest.fn()}
        onDecrease={jest.fn()}
      />
    );

    expect(screen.getByText("Item One")).toBeInTheDocument();
    expect(screen.getByText("Item Two")).toBeInTheDocument();
  });
});