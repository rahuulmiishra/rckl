import { UPDATE_PRODUCTS, UPDATE_PRODUCT_LOADING_STATE } from "./productTypes";
import axios from "axios";

const PRODUCT_URL =
  "https://gist.githubusercontent.com/sandeepdillerao/edb372a95d6cf1a2a49b79577d023281/raw/24906c5560f4747b8363c138e33efd1a99093ba5/product.json";

export const getProducts = () => {
  return (dispatch) => {
    dispatch(updateProductLoader(true));
    axios
      .get(PRODUCT_URL)
      .then((data) => {
        dispatch(updateProductLoader(false));
        dispatch(updateProducts(data.data));
      })
      .catch((error) => {
        dispatch(updateProductLoader(false));
      });
  };
};

export const updateProducts = (products) => {
  return {
    type: UPDATE_PRODUCTS,
    payload: products,
  };
};

export const updateProductLoader = (value) => {
  return {
    type: UPDATE_PRODUCT_LOADING_STATE,
    payload: value,
  };
};
