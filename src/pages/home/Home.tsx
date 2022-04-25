import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { RootState } from "../../redux/reducers";
import { ProductCard } from "../../components";
import { ProductCardSkeleton } from "../../skeletons";
import "./Home.scss";
import useProducts from "../../hooks/useProducts";

const Home = () => {
  const navigate = useNavigate();
  const products = useSelector((state: RootState) => state.products);

  const productsQuery = useProducts();

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
      {productsQuery.isLoading ? (
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
