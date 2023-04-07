import React from 'react';
import Special from '../Special/Special';

const Myself = ({ring}) => {
    return (
        <div style={{border:'2px solid blue', padding:'10px', borderRadius:'10px'}}>
            <h2>Myself</h2>
            <Special ring={ring}></Special>
        </div>
    );
};

export default Myself;