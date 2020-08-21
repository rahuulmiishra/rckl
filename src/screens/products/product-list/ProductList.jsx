import React from "react";

import ProductListItem from "./product-list-item/ProductListItem";

import "./_productList.scss";

const ProductList = (props) => {
  const { handleProductChange, isViewMode = false, products = [] } = props;
  return (
    <ul className="product_list">
      {products.map((product, index) => {
        const { id = "" } = product;
        return (
          <ProductListItem
            handleProductChange={handleProductChange}
            isViewMode={isViewMode}
            key={id}
            product={product}
            productIndex={index}
          />
        );
      })}
    </ul>
  );
};

export default ProductList;
