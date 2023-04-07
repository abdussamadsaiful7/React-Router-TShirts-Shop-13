import React from 'react';

const Friend = ({ring}) => {
    return (
        <div style={{border:'2px solid blue', padding:'10px', borderRadius:'10px'}}>
            <h3>Friend</h3>
            {
                ring && <p><small>Ring: {ring}</small></p>
            }
        </div>
    );
};

export default Friend;