import { ADD_TO_CART, REMOVE_FROM_CART } from "./cartTypes";

export const addToCart = (data) => {
  return { type: ADD_TO_CART, payload: data };
};

export const removeFromCart = (productId) => {
  return { type: REMOVE_FROM_CART, payload: productId };
};
