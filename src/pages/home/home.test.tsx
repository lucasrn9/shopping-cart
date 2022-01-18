import React from "react";
import { screen, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import * as redux from "react-redux";
import rootReducer from "../../redux/reducers";
import Home from "./Home";

describe("Home page", () => {
  test("Check if Home page renders a ProductCard component with the correct informations, for each product in redux products store", () => {
    const productsMock = jest.spyOn(redux, "useSelector");
    productsMock.mockReturnValue([
      {
        id: 1,
        title: "Product title test 1",
        price: 10,
        description: "product description test 1",
        category: "test",
        image: "#",
        rating: { rate: 0, count: 0 },
      },
      {
        id: 2,
        title: "Product title test 2",
        price: 20,
        description: "product description test 2",
        category: "test",
        image: "#",
        rating: { rate: 0, count: 0 },
      },
    ]);
    render(
      <BrowserRouter>
        <Provider store={createStore(rootReducer)}>
          <Home />
        </Provider>
      </BrowserRouter>
    );
    expect(screen.getAllByRole("presentation")).toHaveLength(2);

    expect(screen.getByText("Product title test 1")).toBeInTheDocument();
    expect(screen.getAllByTestId("product-price")[0].textContent).toBe(
      "$ 10.00"
    );
    expect(screen.getByText("Product title test 2")).toBeInTheDocument();
    expect(screen.getAllByTestId("product-price")[1].textContent).toBe(
      "$ 20.00"
    );
  });
});
