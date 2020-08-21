
import React from 'react';

import CheckoutForm from './checkout-form/CheckoutForm';


const Checkout = () => {

    const handleCheckoutSubmit = (data) => {
        console.log(data);
    }

    return <div>
        <CheckoutForm handleSubmit={handleCheckoutSubmit} />
    </div>
}

export default Checkout;