import { combineReducers } from "redux";
import productsReducer from "./products.reducer";
import cartReducer from "./cart.reducer";
import { GetProductsPayload } from "../actions/products.actions";
import { Product } from "../actions/cart.actions";

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
});

export default rootReducer;

export interface RootState {
  products: GetProductsPayload;
  cart: Product[];
}
