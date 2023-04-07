import React from 'react';

const Cart = ({cart}) => {
    return (
        <div>
            <h2>Order summary: {cart.length}</h2>
            {
                cart.map(tshirt =><p 
                    key ={tshirt._id}>{tshirt.name}
                    <button>X</button>
                    </p>)
            }
        </div>
    );
};

export default Cart;