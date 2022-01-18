import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "../../redux/reducers";
import CartIcon from "./CartIcon";

describe("Header component", () => {
  test("Check if cart icon renders", () => {
    render(
      <Provider store={createStore(rootReducer)}>
        <BrowserRouter>
          <CartIcon />
        </BrowserRouter>
      </Provider>
    );
    expect(screen.getByRole("menu")).toBeInTheDocument();
  });
});
