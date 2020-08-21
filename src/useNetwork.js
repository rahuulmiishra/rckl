import React, { useState, useEffect } from "react";

const PRODUCT_URL = "https://gist.githubusercontent.com/sandeepdillerao/edb372a95d6cf1a2a49b79577d023281/raw/24906c5560f4747b8363c138e33efd1a99093ba5/product.json";

const useNetwork = () => {

    const [productList, updateProductList] = useState([]);

    useEffect(() => {
        getProducts();
        ;
    }, []);

    const getProducts = () => {
        fetch(PRODUCT_URL).then(data => data.json()).then(data => {
            updateProductList(data);
        }).catch(e => {
            console.log(e);
        })
    }

    return { getProducts, productList }

}

export default useNetwork;