import { ADD_TO_CART, REMOVE_FROM_CART } from "./cartTypes";

const initialState = {
  productInCart: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const product = action.payload;
      const products = [...state.productInCart];

      const productIndex = products.findIndex(({ id }) => {
        return id === product.id;
      });

      if (productIndex >= 0) {
        products[productIndex].quantity = product.quantity;
      } else {
        products.push(product);
      }
      return {
        ...state,
        productInCart: products,
      };
    }

    case REMOVE_FROM_CART: {
      const idToRemove = action.payload;
      const existingProductInCart = [...state.productInCart].filter(
        ({ id }) => id !== idToRemove
      );
      return {
        ...state,
        productInCart: existingProductInCart,
      };
    }

    default:
      return state;
  }
};

export default cartReducer;
