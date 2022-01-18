import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import AddToCartBtn from "./AddToCartBtn";

describe("addToCartBtn component", () => {
  test("Check if button calls the addToCartHandler function with the correct parameters", () => {
    const addToCartHandler = jest.fn();
    render(
      <AddToCartBtn
        title="test"
        price={10}
        image="#"
        id={1}
        addToCartHandler={addToCartHandler}
      />
    );
    fireEvent.click(screen.getByText("Add to cart"));
    expect(addToCartHandler).toHaveBeenCalledTimes(1);
    expect(addToCartHandler).toHaveBeenCalledWith("test", 10, "#", 1);
  });
});
