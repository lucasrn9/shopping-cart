import React from "react";
import "./addToCartBtn.scss";

interface Props {
  title: string;
  price: number;
  image: string;
  id: number;
  addToCartHandler: (
    title: string,
    price: number,
    image: string,
    id: number
  ) => void; // a function that should add a product to the redux cart store
}

const AddToCartBtn = ({ title, price, image, id, addToCartHandler }: Props) => (
  <button
    type="button"
    className="add-to-cart-btn"
    onClick={() => addToCartHandler(title, price, image, id)}
  >
    Add to cart <i className="fas fa-shopping-cart" />
  </button>
);

export default AddToCartBtn;
