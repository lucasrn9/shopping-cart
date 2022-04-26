import React from "react";
import { screen, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import * as redux from "react-redux";
import { QueryClientProvider, QueryClient } from "react-query";
import axios from "axios";
import rootReducer from "../../redux/reducers";
import Home from "./Home";
import products from "../../mocks/products";

describe("Home page", () => {
  test("Check if Home page renders a ProductCard component with the correct informations, for each product in redux products store", async () => {
    jest.spyOn(redux, "useSelector").mockReturnValue(products);

    jest.spyOn(axios, "get").mockReturnValueOnce(
      Promise.resolve({
        data: products,
      })
    );

    const queryClient = new QueryClient();
    render(
      <QueryClientProvider client={queryClient}>
        <Provider store={createStore(rootReducer)}>
          <BrowserRouter>
            <Home />
          </BrowserRouter>
        </Provider>
      </QueryClientProvider>
    );
    const productCards = await screen.findAllByRole("presentation");
    expect(productCards).toHaveLength(2);
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
