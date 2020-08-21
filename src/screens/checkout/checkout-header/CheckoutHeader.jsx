
import React from 'react';


const CheckoutHeader = (props) => {
    const { numOfItems = 0, total = 0 } = props;
    return <div>
        <div>Total number of items: {`{${numOfItems}}`}</div>
        <div>Grand Total: {`{${total}}`}</div>
    </div>
}

export default CheckoutHeader;