/* eslint-disable jsx-a11y/control-has-associated-label */
import React from "react";
import "./productCardCart.scss";
import { CartHandlers } from "../../pages/cart/Cart";

interface Props {
  title: string;
  price: number;
  image: string;
  id: number;
  amount: number;
  removeFromCartHandler: CartHandlers;
  removeUnitHandler: CartHandlers;
  addUnitHandler: CartHandlers;
}

const ProductCardCart = ({
  title,
  price,
  image,
  id,
  amount,
  removeFromCartHandler,
  removeUnitHandler,
  addUnitHandler,
}: Props) => (
  <div className="container-cart" id={`container-cart-${id}`}>
    <img className="product-image" src={image} alt="product" />
    <div className="wrapper-infos">
      <div className="product-info">
        <h2 className="product-name" data-testid="product-name">
          {title}
        </h2>
        <span className="product-unit-value" data-testid="price">
          $ {price.toFixed(2)}
        </span>
      </div>
      <div className="amount-wrapper">
        <h2>amount</h2>
        <span className="amount">{amount}x</span>
        <button
          type="button"
          className="unit-button"
          onClick={() => removeUnitHandler(title, price, image, id, amount)}
        >
          -
        </button>
        <button
          type="button"
          className="unit-button"
          onClick={() => addUnitHandler(title, price, image, id, amount)}
        >
          +
        </button>
        <button
          type="button"
          onClick={() => removeFromCartHandler(title, price, image, id, amount)}
        >
          Remove from cart
        </button>
      </div>
      <div className="subtotal-wrapper">
        <h2>subtotal</h2>
        <span className="subtotal" data-testid="subtotal">
          $ {(amount * price).toFixed(2)}
        </span>
      </div>
    </div>
  </div>
);

export default ProductCardCart;
