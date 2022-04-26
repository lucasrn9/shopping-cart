import React from "react";
import axios from "axios";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { QueryClientProvider, QueryClient } from "react-query";
import Details from "../details/Details";
import Cart from "./Cart";
import store from "../../redux/store/store";

describe("cart page", () => {
  test("Check if cart page renders a ProductCardCart component with the correct informations, for each product added to redux cart store", async () => {
    jest.spyOn(axios, "get").mockReturnValueOnce(
      Promise.resolve({
        data: {
          category: "eletronics",
          description: "product description test",
          id: 1,
          image: "#",
          price: 10,
          rating: {
            rate: 0,
            count: 0,
          },
          title: "product title test",
        },
      })
    );

    const queryClient = new QueryClient();

    render(
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <Details />
        </Provider>
      </QueryClientProvider>
    );

    const addToCartBtn = await screen.findByText("Add to cart");
    fireEvent.click(addToCartBtn);

    render(
      <Provider store={store}>
        <Cart />
      </Provider>
    );
    expect(screen.getByTestId("product-name").textContent).toBe(
      "product title test"
    );
    expect(screen.getByTestId("price").textContent).toBe("$ 10.00");
    expect(screen.getByTestId("subtotal").textContent).toBe("$ 10.00");
    expect(screen.getByText("amount")).toBeInTheDocument();
    expect(screen.getByText("1x")).toBeInTheDocument();
  });

  test("check if ProductCardCart's amount buttons changes the redux's cart store amount", () => {
    render(
      <Provider store={store}>
        <Cart />
      </Provider>
    );
    const removeUnitBtn = screen.getByText("-");
    const addUnitBtn = screen.getByText("+");
    fireEvent.click(addUnitBtn);
    fireEvent.click(addUnitBtn);
    expect(screen.getByText("3x")).toBeInTheDocument();
    fireEvent.click(removeUnitBtn);
    fireEvent.click(removeUnitBtn);
    expect(screen.getByText("1x")).toBeInTheDocument();
  });

  test("Check if total is being calculated correctly", () => {
    render(
      <Provider store={store}>
        <Cart />
      </Provider>
    );
    const removeUnitBtn = screen.getByText("-");
    const addUnitBtn = screen.getByText("+");
    expect(screen.getByRole("math").textContent).toBe("Total: $10.00");
    fireEvent.click(addUnitBtn);
    fireEvent.click(addUnitBtn);
    expect(screen.getByRole("math").textContent).toBe("Total: $30.00");
    fireEvent.click(removeUnitBtn);
    fireEvent.click(removeUnitBtn);
    expect(screen.getByRole("math").textContent).toBe("Total: $10.00");
  });

  test("check if remove from cart button remove a product from redux products store", () => {
    render(
      <Provider store={store}>
        <Cart />
      </Provider>
    );
    const removeFromCartBtn = screen.getByText("Remove from cart");
    fireEvent.click(removeFromCartBtn);
    const emptyCartMessage = screen.getByText("Your cart is empty :(");
    expect(emptyCartMessage).toBeInTheDocument();
  });
});
