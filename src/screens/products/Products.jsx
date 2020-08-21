import React from "react";

import ProductHeader from './product-header/ProductHeader';
import ProductList from './product-list/ProductList';

const Products = (props) => {
    const { brandName = "", handleProductChange, products = [] } = props;

    return <div>
        <ProductHeader title={brandName} />
        <ProductList handleProductChange={handleProductChange} products={products} />
    </div>
};

export default Products;
