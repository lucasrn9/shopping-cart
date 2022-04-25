/* eslint-disable @typescript-eslint/no-shadow */
import React from "react";
import "./productDetails.scss";
import AddToCartBtn from "../addToCartBtn/AddToCartBtn";

interface Props {
  image: string;
  title: string;
  description: string;
  price: number;
  productId: number;
  addToCartHandler: (
    title: string,
    price: number,
    image: string,
    id: number
  ) => void;
}

const ProductDetails = ({
  image,
  title,
  description,
  price,
  productId,
  addToCartHandler,
}: Props) => (
  <div className="product-details-container">
    <div className="image-wrapper">
      <img className="product-image" src={image} alt={title} />
    </div>
    <div className="product-info-wrapper">
      <h2 className="product-title">{title}</h2>
      <span className="product-description">{description}</span>
      <span className="product-price">${price?.toFixed(2)}</span>
      <AddToCartBtn
        title={title}
        price={price}
        image={image}
        id={productId}
        addToCartHandler={addToCartHandler}
      />
    </div>
  </div>
);

export default ProductDetails;
