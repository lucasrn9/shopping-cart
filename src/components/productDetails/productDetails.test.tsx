import React from "react";
import { render, screen } from "@testing-library/react";
import ProductDetails from "./ProductDetails";

describe("Product details component", () => {
  test("Check if ProductDetails component renders a product properly", () => {
    render(
      <ProductDetails
        image="#"
        title="product title test"
        description="product description test"
        price={10}
        productId={1}
        addToCartHandler={jest.fn()}
      />
    );
    expect(screen.getByText("product title test")).toBeInTheDocument();
    expect(screen.getByText("product description test")).toBeInTheDocument();
    expect(screen.getByText("$10.00")).toBeInTheDocument();
  });
});
