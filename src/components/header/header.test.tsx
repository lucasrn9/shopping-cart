import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "../../redux/reducers";
import Header from "./Header";

describe("Header component", () => {
  test("Check if header renders", () => {
    render(
      <Provider store={createStore(rootReducer)}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>
    );
    expect(screen.getByTestId("header")).toBeInTheDocument();
  });
});
