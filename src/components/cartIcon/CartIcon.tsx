/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import "./cartIcon.scss";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { RootState } from "../../redux/reducers";

const CartIcon = () => {
  const navigate = useNavigate();

  let amount = 0;
  const productsInCart = useSelector((state: RootState) => state.cart);
  if (productsInCart[0]) {
    productsInCart.map((product) => (amount += product.amount));
  }

  const setAmountCounterDisplay = () => ({
    display: productsInCart[0] ? "flex" : "none",
  });

  return (
    <div
      role="menu"
      tabIndex={0}
      onClick={() => navigate("/cart")}
      className="shopping-cart-icon"
    >
      <i className="fas fa-shopping-cart" />
      <div
        className="amount-counter"
        style={setAmountCounterDisplay()}
        data-testid="amount-counter"
      >
        {amount}
      </div>
    </div>
  );
};
export default CartIcon;
