import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Brother = () => {
    const ring = useContext(RingContext);
    return (
        <div style={{border:'2px solid blue', padding:'10px', borderRadius:'10px'}}>
            <h2>Brother</h2>
            <p><small>{ring}</small></p>
        </div>
    );
};

export default Brother;