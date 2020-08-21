import React from "react";

const ProductHeader = (props) => {
    const { title = "" } = props;

    return <h2>Products of {title}</h2>;
};

export default ProductHeader;
