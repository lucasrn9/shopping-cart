/* eslint-disable @typescript-eslint/default-param-last */
import { GetProductsPayload } from "../actions/products.actions";

interface GetProductsAction {
  type: string;
  payload: GetProductsPayload;
}

const initialState = [
  {
    title: "",
    price: 0,
    image: "#",
    id: 0,
  },
];

const productsReducer = (state = initialState, action: GetProductsAction) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return action.payload;
    default:
      return state;
  }
};

export default productsReducer;
