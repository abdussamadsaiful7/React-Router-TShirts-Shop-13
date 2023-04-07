import React from 'react';

const Special = ({ring}) => {
    return (
        <div style={{border:'2px solid blue', padding:'5px', borderRadius:'10px'}}>
            <h2>Special person</h2>
            <p>Ring: {ring}</p>
        </div>
    );
};

export default Special;