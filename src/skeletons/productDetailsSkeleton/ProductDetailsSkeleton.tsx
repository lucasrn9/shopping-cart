import React from "react";
import "./productDetailsSkeleton.scss";

const ProductDetailsSkeleton = () => (
  <div className="product-details-container-skeleton">
    <div className="product-image-skeleton" />
    <div className="product-info-skeleton">
      <div className="product-title-skeleton" />
      <div className="product-description-skeleton" />
      <div className="product-description-skeleton" />
      <div className="product-description-skeleton" />
      <div className="product-price-skeleton-wrapper">
        <div className="product-price-skeleton" />
      </div>
    </div>
  </div>
);

export default ProductDetailsSkeleton;
