import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Special = ({ring}) => {
    const angti =useContext(RingContext)
    return (
        <div style={{border:'2px solid blue', padding:'5px', borderRadius:'10px'}}>
            <h2>Special person</h2>
            <p>Ring: {angti}</p>
        </div>
    );
};

export default Special;