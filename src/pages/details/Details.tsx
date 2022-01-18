/* eslint-disable @typescript-eslint/no-shadow */
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/cart.actions";
import { ProductDetails } from "../../components";
import { ProductDetailsSkeleton } from "../../skeletons";

interface Product {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: { rate: number; count: number };
  title: string;
}

const Details = () => {
  const { id } = useParams();

  const [product, setProduct] = useState<Product>({
    category: "",
    description: "",
    id: 0,
    image: "",
    price: 0,
    rating: {
      rate: 0,
      count: 0,
    },
    title: "",
  });

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => setProduct(res.data));
  }, [id]);

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

  return (
    <div>
      {product.id === 0 ? (
        <ProductDetailsSkeleton />
      ) : (
        <ProductDetails
          image={product?.image}
          title={product?.title}
          description={product?.description}
          price={product?.price}
          productId={product?.id}
          addToCartHandler={addToCartHandler}
        />
      )}
    </div>
  );
};

export default Details;
