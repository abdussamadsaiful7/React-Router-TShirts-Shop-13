import React from 'react';
import './TShirt.css'

const TShirt = ({tShirt, handleAddToCart}) => {
    const {picture, name, price} = tShirt;
    return (
        <div className='t-shirt'>
            <img className='t-shirt-img' src={picture} alt="picture"/>
            <h4>{name}</h4>
            <p>Price: ${price}</p>
            <button onClick={()=>handleAddToCart(tShirt)} className='btn'>Buy Now</button>
        </div>
    );
};

export default TShirt;