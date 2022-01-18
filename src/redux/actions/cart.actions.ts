export interface Product {
  title: string;
  price: number;
  image: string;
  id: number;
  amount: number;
}

export const addToCart = (payload: Product) => ({
  type: "ADD_TO_CART",
  payload,
});

export const removeFromCart = (payload: Product) => ({
  type: "REMOVE_FROM_CART",
  payload,
});

export const removeUnit = (payload: Product) => ({
  type: "REMOVE_UNIT",
  payload,
});
export const addUnit = (payload: Product) => ({
  type: "ADD_UNIT",
  payload,
});
