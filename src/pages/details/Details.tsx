/* eslint-disable @typescript-eslint/no-shadow */
import React from "react";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/cart.actions";
import { ProductDetails } from "../../components";
import { ProductDetailsSkeleton } from "../../skeletons";
import useProduct from "../../hooks/useProduct";

const Details = () => {
  const { id } = useParams() as { id: string };

  const productQuery = useProduct(id);

  const dispatch = useDispatch();

  const addToCartHandler = (
    title: string,
    price: number,
    image: string,
    id: number
  ) => {
    dispatch(
      addToCart({
        title,
        price,
        image,
        id,
        amount: 1,
      })
    );
  };

  if (productQuery.isLoading) {
    return <ProductDetailsSkeleton />;
  }

  return (
    <div>
      <ProductDetails
        image={productQuery.data.image}
        title={productQuery.data.title}
        description={productQuery.data.description}
        price={productQuery.data.price}
        productId={productQuery.data.id}
        addToCartHandler={addToCartHandler}
      />
    </div>
  );
};

export default Details;
