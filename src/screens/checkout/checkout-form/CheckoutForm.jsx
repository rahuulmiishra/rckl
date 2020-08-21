import React, { useState } from "react";

import "./_checkoutForm.scss";

const FormModel = [
  {
    error: "",
    id: "fname",
    isValid: true,
    isRequired: true,
    label: "Name",
    name: "name",
    value: "",
  },
  {
    error: "",
    id: "email",
    isValid: true,
    isRequired: true,
    label: "Email",
    name: "email",
    value: "",
  },
  {
    error: "",
    id: "mobile",
    isValid: true,
    isRequired: true,
    label: "Mobile",
    name: "mobile",
    value: "",
  },
];

const CheckoutForm = (props) => {
  const { handleSubmit } = props;
  const [inputs, updateInputs] = useState(FormModel);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const formParams = {};
    inputs.forEach((input) => {
      const { name = "", value = "" } = input;
      formParams[name] = value;
    });
    handleSubmit(formParams);
  };

  const onChange = (index) => {
    return (event) => {
      const { target = {} } = event;
      const { value = "" } = target;

      const existingModel = [...inputs];
      existingModel[index].value = value;
      updateInputs(existingModel);
    };
  };

  const getInputControls = () => {
    return inputs.map((input, index) => {
      const {
        error = "",
        id = "",
        isValid = true,
        label = "",
        name = "",
        isRequired = false,
        value = "",
      } = input;
      return (
        <div key={id}>
          <input
            onChange={onChange(index)}
            type="text"
            id={id}
            name={name}
            placeholder={label}
            required={isRequired}
            value={value}
          />
          {!isValid && <span>{error}</span>}
        </div>
      );
    });
  };

  return (
    <form className="checkout-form" onSubmit={handleFormSubmit}>
      {getInputControls()}
      <input type="submit" value="Checkout" />
    </form>
  );
};

export default CheckoutForm;
