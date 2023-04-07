import React from 'react';
import './Cart.css'

const Cart = ({ cart, handleRemoveCart }) => {
    //conditional rendering start,
    let message;
    if (cart.length === 0) {
        message = <p>Please add some Product!</p>
    } else {
        message = <p>Thanks for selected product!</p>
    }
    //conditional rendering end,
    return (
        <div className='summary'>

            <h2 id='title' className={cart.length === 1 ? 'red' : 'blue'}>Order summary: {cart.length}</h2>
            <p className={`bold ${cart.length === 3 ? 'yellow': 'blue'}`}>Something</p>
            {/* //ternary: condition */}
            {
                cart.length > 2 ?
                    <span className='green'>Thanks for your feedback!!!</span>
                    : <span>Welcome</span>
            }
            {message}
            {
                cart.map(tshirt => <p
                    key={tshirt._id}>{tshirt.name}
                    <button className='x-btn' onClick={() => handleRemoveCart(tshirt._id)}>X</button>
                </p>)
            }
            {
                cart.length === 2 && <p>You got amazing gift!</p>
            }
            {
                cart.length === 3 || <p>Not to be Three!!</p>
            }

        </div>
    );
};

export default Cart;

/**
 * conditional rendering,
 * 1. if , else to set a variable that will contain an element, components,
 * 2.ternary: condition ? 'true': 'false',
 * 3.Logical && : if the condition is true then the next thing will be displayed.
 *4.Logical || (or) if  the condition is false then the next thing will be displayed.
 */
/**
 * Conditional css class,
 * use ternary
 * ternary inside string, 
 */