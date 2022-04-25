import axios from "axios";
import { useQuery } from "react-query";

const useProduct = (id: string) => {
  const fetchProduct = (productId: string) =>
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => res.data);
  return useQuery(["product", id], () => fetchProduct(id));
};

export default useProduct;
