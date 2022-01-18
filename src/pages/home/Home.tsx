import React, { useCallback, useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { RootState } from "../../redux/reducers";
import { getProducts } from "../../redux/actions/products.actions";
import { ProductCard } from "../../components";
import { ProductCardSkeleton } from "../../skeletons";
import "./Home.scss";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.products);

  const fetchProducts = useCallback(async () => {
    const response = await axios.get(
      "https://fakestoreapi.com/products?limit=16"
    );
    const productsList = response.data;
    dispatch(getProducts(productsList));
  }, [dispatch]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const redirectToDetails = (id: number) => {
    navigate(`/details/${id}`);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>, id: number) => {
    if (e.key === "Enter") {
      redirectToDetails(id);
    }
  };

  return (
    <div className="product-list">
      {products[0].id === 0 ? (
        <ProductCardSkeleton amount={12} />
      ) : (
        products.map((product, i) => (
          <ProductCard
            key={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
            id={product.id}
            tabIndex={i}
            onClick={redirectToDetails}
            onKeyDown={onKeyDown}
          />
        ))
      )}
    </div>
  );
};

export default Home;
