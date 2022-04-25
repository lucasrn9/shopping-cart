import axios from "axios";
import { useDispatch } from "react-redux";
import { useQuery } from "react-query";
import { getProducts } from "../redux/actions/products.actions";

const useProducts = () => {
  const dispatch = useDispatch();
  const fetcher = async () => {
    const response = await axios.get(
      "https://fakestoreapi.com/products?limit=16"
    );
    const productsList = response.data;
    dispatch(getProducts(productsList));
    return productsList;
  };
  return useQuery("posts", fetcher, {
    staleTime: 60000,
  });
};

export default useProducts;
