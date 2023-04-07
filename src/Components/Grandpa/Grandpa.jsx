import React from 'react';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';
import './Grandpa.css'
import Father from '../Father/Father';

const Grandpa = () => {
    const ring = 'diamond';
    return (
        <div className='grandpa'>
            <h2 style={{ textAlign: 'center' }}>GRANDPA</h2>
            <div className='flex'>
                <Father ring={ring}></Father>
                <Uncle></Uncle>
                <Aunty ring={ring}></Aunty>
            </div>
        </div>
    );
};

export default Grandpa;