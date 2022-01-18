import React from "react";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import ProductCardCart from "./ProductCardCart";

afterEach(() => {
  cleanup();
});

describe("Product card cart", () => {
  const removeFromCartHandler = jest.fn();
  const removeUnitHandler = jest.fn();
  const addUnitHandler = jest.fn();

  test("Check if ProductCardCart component renders a product using the passed props properly", () => {
    render(
      <ProductCardCart
        title="Product card cart title test"
        price={10}
        image="#"
        id={1}
        amount={1}
        removeFromCartHandler={removeFromCartHandler}
        removeUnitHandler={removeUnitHandler}
        addUnitHandler={addUnitHandler}
      />
    );
    expect(
      screen.getByText("Product card cart title test")
    ).toBeInTheDocument();
    expect(screen.getAllByText("$ 10.00")).toHaveLength(2);
    expect(screen.getByText("1x")).toBeInTheDocument(); // amount/qtd
  });

  test("Check if ProductCardCart component calls the handlers functions properly", () => {
    render(
      <ProductCardCart
        title="Product card cart title test"
        price={10}
        image="#"
        id={1}
        amount={1}
        removeFromCartHandler={removeFromCartHandler}
        removeUnitHandler={removeUnitHandler}
        addUnitHandler={addUnitHandler}
      />
    );

    const clickButtonAndCheckCallsAndParams = (
      buttonName: string,
      functionToBeChecked: typeof jest.fn
    ) => {
      fireEvent.click(screen.getByRole("button", { name: buttonName }));
      expect(functionToBeChecked).toHaveBeenCalledTimes(1);
      expect(functionToBeChecked).toHaveBeenCalledWith(
        "Product card cart title test",
        10,
        "#",
        1,
        1
      );
    };

    clickButtonAndCheckCallsAndParams("-", removeUnitHandler);
    clickButtonAndCheckCallsAndParams("+", addUnitHandler);
    clickButtonAndCheckCallsAndParams(
      "Remove from cart",
      removeFromCartHandler
    );
  });
});
