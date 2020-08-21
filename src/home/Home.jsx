import React, { useEffect } from "react";
import { connect } from "react-redux";

import Products from "../screens/products/Products";
import Cart from "../screens/cart/Cart";

import { useHistory } from "react-router";

import { getProducts, addToCart, removeFromCart } from "../redux";

import "./_home.scss";

const BRAND_NAME = "React Products";
const CHECKOUT_PATH = "/checkout";

const Home = (props) => {
  const {
    isLoadingProducts = false,
    products = [],
    productInCart = [],
    fetchProducts,
  } = props;

  const history = useHistory();

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleClickOnCheckout = () => {
    history.push(CHECKOUT_PATH);
  };

  const handleProductChange = (data) => {
    const { index, quantity } = data;
    const productWithQuantiy = products[index];
    productWithQuantiy.quantity = quantity;

    if (quantity > 0) {
      props.addToCart(productWithQuantiy);
    } else {
      props.removeFromCart(productWithQuantiy.id);
    }
  };

  return (
    <div className="home">
      <div className="home__content">
        {isLoadingProducts && <h1>Loading Products...</h1>}
        {!isLoadingProducts && (
          <Products
            brandName={BRAND_NAME}
            handleProductChange={handleProductChange}
            products={products}
          />
        )}
        <div className="home__cart">
          <Cart products={productInCart} />
        </div>
      </div>

      <h1 onClick={handleClickOnCheckout}>Go to checkout</h1>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.product.products,
    isLoadingProducts: state.product.isLoadingProducts,
    productInCart: state.cart.productInCart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProducts: () => dispatch(getProducts()),
    addToCart: (productWithQuantiy) => dispatch(addToCart(productWithQuantiy)),
    removeFromCart: (id) => dispatch(removeFromCart(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
