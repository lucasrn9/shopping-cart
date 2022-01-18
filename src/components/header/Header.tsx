import React from "react";
import "./header.scss";
import CartIcon from "../cartIcon/CartIcon";

const Header = () => (
  <header className="header" data-testid="header">
    <CartIcon />
  </header>
);

export default Header;
