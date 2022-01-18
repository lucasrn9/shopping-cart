import React from "react";
import "./productCardSkeleton.scss";

interface Props {
  amount: number;
}

const ProductCardSkeleton = ({ amount = 1 }: Props) => {
  const renderSkeleton: number[] = [];
  for (let index = 0; index < amount; index += 1) {
    renderSkeleton.push(index);
  }

  return (
    <>
      {renderSkeleton.map((item) => (
        <div key={item} className="container-skeleton">
          <div className="product-image-skeleton" />
          <div className="product-infos-skeleton">
            <span className="product-name-skeleton" />
            <span className="product-price-skeleton" />
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductCardSkeleton;
