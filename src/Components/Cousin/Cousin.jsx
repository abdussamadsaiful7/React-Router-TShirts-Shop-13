import React from 'react';
import Friend from '../Friend/Friend';

const Cousin = ({children, hasFriend, ring}) => {
    return (
        <div style={{border:'2px solid blue', padding:'10px', borderRadius:'10px'}}>
            <h2>Cousin</h2>
            <p><small>{children}</small></p>
            {
               hasFriend && <Friend ring={ring}></Friend>
            }
        </div>
    );
};

export default Cousin;