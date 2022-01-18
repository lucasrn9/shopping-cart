import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ProductCardCart } from "../../components";
import { RootState } from "../../redux/reducers";
import "./Cart.scss";
import {
  removeFromCart,
  removeUnit,
  addUnit,
} from "../../redux/actions/cart.actions";

export type CartHandlers = (
  title: string,
  price: number,
  image: string,
  id: number,
  amount: number
) => void;

const Cart = () => {
  const cartProducts = useSelector((state: RootState) => state.cart);
  let total = 0;
  cartProducts.map(({ amount, price }) => (total += amount * price));

  const dispatch = useDispatch();

  const removeFromCartHandler: CartHandlers = (
    title,
    price,
    image,
    id,
    amount
  ) => {
    dispatch(
      removeFromCart({
        title,
        price,
        image,
        id,
        amount: 1,
      })
    );
  };

  const removeUnitHandler: CartHandlers = (title, price, image, id, amount) => {
    dispatch(
      removeUnit({
        title,
        price,
        image,
        id,
        amount,
      })
    );
  };

  const addUnitHandler: CartHandlers = (title, price, image, id, amount) => {
    dispatch(
      addUnit({
        title,
        price,
        image,
        id,
        amount,
      })
    );
  };

  return (
    <>
      {cartProducts.map(({ id, title, price, image, amount }) => (
        <ProductCardCart
          key={id}
          title={title}
          price={price}
          image={image}
          id={id}
          amount={amount}
          removeFromCartHandler={removeFromCartHandler}
          removeUnitHandler={removeUnitHandler}
          addUnitHandler={addUnitHandler}
        />
      ))}
      {cartProducts[0] ? (
        <div className="total" role="math">
          Total: ${total.toFixed(2)}
        </div>
      ) : (
        <h1 className="empty-cart">Your cart is empty :( </h1>
      )}
    </>
  );
};

export default Cart;
