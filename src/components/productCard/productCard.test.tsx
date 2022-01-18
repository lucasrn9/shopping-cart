import React from "react";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import ProductCard from "./ProductCard";

afterEach(() => {
  cleanup();
});

describe("ProductCard component", () => {
  test("Check if ProductCard component renders a product properly", () => {
    const onClick = jest.fn();
    const onKeyDown = jest.fn();
    render(
      <ProductCard
        title="product card title test"
        price={5}
        image="#"
        id={1}
        tabIndex={0}
        onClick={onClick}
        onKeyDown={onKeyDown}
      />
    );
    expect(screen.getByText("product card title test")).toBeInTheDocument();
    expect(screen.getByText("$ 5.00")).toBeInTheDocument();
  });

  test("Check if ProductCard component functions onClick and onKeyDown are called properly", () => {
    const onClick = jest.fn((id) => {
      expect(id).toBe(1);
    });
    const onKeyDown = jest.fn((e, id) => {
      expect(e.key).toBe("Enter");
      expect(id).toBe(1);
    });
    render(
      <ProductCard
        title="product card title test"
        price={5}
        image="#"
        id={1}
        tabIndex={0}
        onClick={onClick}
        onKeyDown={onKeyDown}
      />
    );
    fireEvent.click(screen.getByText("product card title test"));
    fireEvent.keyDown(screen.getByText("product card title test"), {
      key: "Enter",
    });

    expect(onClick).toBeCalledTimes(1);
    expect(onKeyDown).toBeCalledTimes(1);
  });
});
