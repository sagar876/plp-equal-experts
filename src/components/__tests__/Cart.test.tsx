import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Cart from "../Cart";
import { CartItem } from "../../types/product";

const mockCartItems: CartItem[] = [
  {
    id: "1",
    title: "Test Product",
    price: 10,
    description: "Test description",
    image: "test.jpg",
    quantity: 2
  },
  {
    id: "2",
    title: "Another Product",
    price: 25.5,
    description: "Another description",
    image: "another.jpg",
    quantity: 1
  }
];

const defaultProps = {
  isOpen: true,
  onClose: jest.fn(),
  cartItems: [] as CartItem[],
  totalPrice: 0,
  onIncrease: jest.fn(),
  onDecrease: jest.fn()
};

describe("Cart", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders Cart heading and close button when open", () => {
    render(<Cart {...defaultProps} />);

    expect(screen.getByRole("dialog")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /cart/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /x/i })).toBeInTheDocument();
  });

  test("shows empty state when cart has no items", () => {
    render(<Cart {...defaultProps} />);

    expect(screen.getByText("Cart is empty.")).toBeInTheDocument();
  });

  test("renders cart items with title, price, quantity and line total", () => {
    render(
      <Cart
        {...defaultProps}
        cartItems={mockCartItems}
        totalPrice={45.5}
      />
    );

    expect(screen.getByText("Test Product")).toBeInTheDocument();
    expect(screen.getByText("Another Product")).toBeInTheDocument();
    expect(screen.getByText(/£ 10 × 2 = £ 20/)).toBeInTheDocument();
    expect(screen.getByText(/£ 25.5 × 1 = £ 25.5/)).toBeInTheDocument();
    expect(screen.getByText("Total: £ 45.5")).toBeInTheDocument();
  });

  test("calls onClose when overlay is clicked", async () => {
    const onClose = jest.fn();
    render(<Cart {...defaultProps} onClose={onClose} />);

    const overlay = screen.getByTestId("cart-overlay");
    await userEvent.click(overlay);

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  test("calls onClose when X button is clicked", async () => {
    const onClose = jest.fn();
    render(<Cart {...defaultProps} onClose={onClose} />);

    await userEvent.click(screen.getByRole("button", { name: /x/i }));

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  test("calls onIncrease when + button is clicked for an item", async () => {
    const onIncrease = jest.fn();
    render(
      <Cart
        {...defaultProps}
        cartItems={mockCartItems}
        onIncrease={onIncrease}
      />
    );

    const plusButtons = screen.getAllByRole("button", { name: "+" });
    await userEvent.click(plusButtons[0]);

    expect(onIncrease).toHaveBeenCalledWith("1");
  });

  test("calls onDecrease when - button is clicked for an item", async () => {
    const onDecrease = jest.fn();
    render(
      <Cart
        {...defaultProps}
        cartItems={mockCartItems}
        onDecrease={onDecrease}
      />
    );

    const minusButtons = screen.getAllByRole("button", { name: "-" });
    await userEvent.click(minusButtons[0]);

    expect(onDecrease).toHaveBeenCalledWith("1");
  });

  test("dialog has correct accessibility attributes", () => {
    render(<Cart {...defaultProps} />);

    const dialog = screen.getByRole("dialog");
    expect(dialog).toHaveAttribute("aria-modal", "true");
  });
});
