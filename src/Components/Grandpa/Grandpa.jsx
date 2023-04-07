import React, { createContext, useState } from 'react';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';
import './Grandpa.css'
import Father from '../Father/Father';

export const RingContext = createContext('Golden');
export const MoneyContext = createContext(0);
const Grandpa = () => {
    const [money, setMoney] = useState(0);
    const ring = 'diamond';
    return (
        <div className='grandpa'>
            <h2 style={{ textAlign: 'center' }}>GRANDPA</h2>
            <p>Has Money : {money}</p>
            <MoneyContext.Provider value={[money, setMoney]}>
                <RingContext.Provider value='golden ring'>
                    <div className='flex'>
                        <Father ring={ring}></Father>
                        <Uncle></Uncle>
                        <Aunty ring={ring}></Aunty>
                    </div>
                </RingContext.Provider>
            </MoneyContext.Provider>
        </div>
    );
};

export default Grandpa;

/**
 * 1. create a context export,
 * 2. create a provider and pass a value,
 * use context to receive the value,
*/