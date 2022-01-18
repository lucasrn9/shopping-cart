export type GetProductsPayload = {
  category: string;
  description: string;
  id: number;
  image: string;
  rating: { rate: number; count: number };
  title: string;
  price: number;
}[];

export const getProducts = (payload: GetProductsPayload) => ({
  type: "GET_PRODUCTS",
  payload,
});
