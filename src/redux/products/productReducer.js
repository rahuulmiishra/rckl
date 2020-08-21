import {
  UPDATE_PRODUCTS,
  GET_PRODUCTS,
  UPDATE_PRODUCT_LOADING_STATE,
} from "./productTypes";

const initialState = {
  isLoadingProducts: false,
  products: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS: {
      return { ...state, products: [1, 2, 3] };
    }

    case UPDATE_PRODUCTS: {
      return { ...state, products: action.payload };
    }

    case UPDATE_PRODUCT_LOADING_STATE: {
      return { ...state, isLoadingProducts: action.payload };
    }

    default:
      return state;
  }
};

export default productReducer;
