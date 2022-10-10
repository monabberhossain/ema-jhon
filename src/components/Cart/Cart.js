import React from 'react';
import './Cart.css'

const Cart = (props) => {

    const {cart} = props;

    let totalPrice = 0;
    let totalShippingCost = 0;
    let totalQuantity = 0;

    for(const product of cart){
        totalQuantity += product.quantity;
        totalPrice += product.price * product.quantity;
        totalShippingCost += product.shipping * product.quantity;
    }

    const totalTax = parseFloat((totalPrice * 0.1).toFixed(2));
    const grandTotal = totalPrice + totalShippingCost + totalTax;
    return (
        <div className='cart'>
            <h2 className='cart-header'>Order Summary</h2>
            {/* <h4>Cart Products: {cart.length}</h4> */}
            <h4>Cart Items: {totalQuantity}</h4>
            <h4>Total Price: ${totalPrice}</h4>
            <h4>Total Shipping: ${totalShippingCost}</h4>
            <h4>Tax: ${totalTax}</h4>
            <h3>Grand Total: ${grandTotal.toFixed(2)}</h3>
        </div>
    );
};

export default Cart;