import React from "react";
import axios from "axios";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { BrowserRouter } from "react-router-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import rootReducer from "../../redux/reducers";
import Details from "./Details";
import Header from "../../components/header/Header";

describe("Details page", () => {
  test("Check if cart icon component updates, when a new product is added to the cart", async () => {
    jest.spyOn(axios, "get").mockReturnValueOnce(
      Promise.resolve({
        data: {
          category: "eletronics",
          description: "details page description test",
          id: 1,
          image: "#",
          price: 10,
          rating: {
            rate: 0,
            count: 0,
          },
          title: "details page title test",
        },
      })
    );
    render(
      <Provider store={createStore(rootReducer)}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
        <Details />
      </Provider>
    );
    const amountCounter = await screen.findByTestId("amount-counter");
    const AddToCartButton = await screen.findByText("Add to cart");
    expect(amountCounter).not.toBeVisible();
    fireEvent.click(AddToCartButton);
    fireEvent.click(AddToCartButton);
    expect(amountCounter).toBeVisible();
    expect(amountCounter).toHaveTextContent("2");
  });
});
