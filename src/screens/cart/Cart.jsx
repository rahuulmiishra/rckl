import React from "react";

import ProductList from "../products/product-list/ProductList";

const Cart = (props) => {
  const { products = [] } = props;
  return (
    <div>
      <h1>Cart</h1> <ProductList isViewMode={true} products={products} />
    </div>
  );
};

export default Cart;
