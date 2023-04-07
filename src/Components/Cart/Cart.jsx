import React from 'react';

const Cart = ({cart, handleRemoveCart}) => {
    let message ;
    if(cart.length === 0){
        message = <p>Please add some Product!</p>
    }
    return (
        <div>
            <h2>Order summary: {cart.length}</h2>
            {message}
            {
                cart.map(tshirt =><p 
                    key ={tshirt._id}>{tshirt.name}
                    <button onClick={()=>handleRemoveCart(tshirt._id)}>X</button>
                    </p>)
            }
        </div>
    );
};

export default Cart;

/**
 * 
 */