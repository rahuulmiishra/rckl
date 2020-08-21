import React, { useState } from "react";

import "./_incrementControl.scss";

const DEFAULT_QUANTITY = 0;

const IncrementControl = (props) => {
  const { handleIncrementChange } = props;
  const [quantity, updateQuantity] = useState(DEFAULT_QUANTITY);

  const handleIncrement = () => {
    const updatedQuantity = quantity + 1;
    updateQuantity(updatedQuantity);
    handleIncrementChange(updatedQuantity);
  };

  const handleDecrement = () => {
    if (quantity === 0) {
      return;
    }
    const updatedQuantity = quantity - 1;
    updateQuantity(updatedQuantity);
    handleIncrementChange(updatedQuantity);
  };

  const handleChange = (event) => {
    const { target = {} } = event;
    const { value = "" } = target;
    const newQty = value !== "" && !isNaN(value) ? parseInt(value) : 0;
    updateQuantity(newQty);
    handleIncrementChange(newQty);
  };

  return (
    <div className="increment-control">
      <h3 onClick={handleDecrement}>-</h3>
      <input type="text" onChange={handleChange} value={quantity} />
      <h3 onClick={handleIncrement}>+</h3>
    </div>
  );
};

export default IncrementControl;
