import React from "react";
import "./productCard.scss";

interface Props {
  title: string;
  price: number;
  image: string;
  id: number;
  tabIndex: number;
  onClick: (id: number) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLDivElement>, id: number) => void;
}

const ProductCard = ({
  title,
  price,
  image,
  id,
  tabIndex,
  onClick,
  onKeyDown,
}: Props) => (
  <div
    role="presentation"
    tabIndex={tabIndex}
    onClick={() => onClick(id)}
    onKeyDown={(e) => onKeyDown(e, id)}
    className="container"
  >
    <img className="product-image" src={image} alt="game" />
    <div className="product-infos">
      <span className="product-name">{title}</span>
      <span className="product-price" data-testid="product-price">
        $ {price.toFixed(2)}
      </span>
    </div>
  </div>
);

export default ProductCard;
