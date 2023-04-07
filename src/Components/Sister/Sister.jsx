import React, { useContext } from 'react';
import { MoneyContext } from '../Grandpa/Grandpa';

const Sister = () => {
    const [money, setMoney] = useContext(MoneyContext);
    return (
        <div style={{border:'2px solid blue', padding:'10px', borderRadius:'10px'}}>
            <h2>Sister</h2>
            <p><small>Grandpa Money: {money}</small></p>
        </div>
    );
};

export default Sister;