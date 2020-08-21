import React from "react";

import IncrementControl from "./increment-control/IncrementControl";

import "./_productListItem.scss";

const ProductListItem = (props) => {
  const {
    product = {},
    productIndex: index = 0,
    isViewMode = false,
    handleProductChange,
  } = props;
  const { name = "", price = "", icon = "", quantity = 0 } = product;

  const handleIncrementChange = (quantity) => {
    handleProductChange({ index, quantity });
  };

  return (
    <li className="product-list-item">
      <img alt={name} src={icon} />
      <div>
        <div>{name}</div>
        {!isViewMode && <ProductView price={price} />}
        {isViewMode && <CartView price={price} quantity={quantity} />}
      </div>
      {!isViewMode && (
        <IncrementControl handleIncrementChange={handleIncrementChange} />
      )}
    </li>
  );
};

const ProductView = ({ price = 0 }) => {
  return <div>Price: {price} </div>;
};

const CartView = ({ price = 0, quantity = 0 }) => {
  return (
    <div>
      Quantity {quantity} Total {quantity * price}{" "}
    </div>
  );
};

export default ProductListItem;
