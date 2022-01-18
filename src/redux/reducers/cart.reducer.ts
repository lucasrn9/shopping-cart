/* eslint-disable @typescript-eslint/default-param-last */

interface CartAction {
  type: string;
  payload: {
    title: string;
    price: number;
    image: string;
    id: number;
    amount: number;
  };
}

interface CartReducerState {
  title: string;
  price: number;
  image: string;
  id: number;
  amount: number;
}

const cartReducer = (state: CartReducerState[] = [], action: CartAction) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const productExistPos = state.findIndex(
        (product) => product.id === action.payload.id
      );
      if (productExistPos !== -1) {
        const newState = state;
        newState[productExistPos].amount += 1;
        return [...newState];
      }
      return [...state, action.payload];
    }
    case "REMOVE_FROM_CART": {
      return state.filter((product) => product.id !== action.payload.id);
    }
    case "REMOVE_UNIT": {
      const productIndex = state.findIndex(
        (product) => product.id === action.payload.id
      );
      if (state[productIndex].amount > 1) {
        const newState = state;
        newState[productIndex].amount -= 1;
        return [...newState];
      }
      return state;
    }

    case "ADD_UNIT": {
      const productIndex = state.findIndex(
        (product) => product.id === action.payload.id
      );
      const newState = state;
      newState[productIndex].amount += 1;
      return [...newState];
    }
    default: {
      return state;
    }
  }
};

export default cartReducer;
