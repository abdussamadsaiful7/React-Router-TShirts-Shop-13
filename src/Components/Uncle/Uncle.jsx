import React, { useContext } from 'react';
import Cousin from '../Cousin/Cousin';
import { MoneyContext } from '../Grandpa/Grandpa';

const Uncle = () => {
    const [money, setMoney] = useContext(MoneyContext);
    return (
        <div style={{border:'2px solid blue', padding:'10px', borderRadius:'10px'}}>
            <h2>Uncle</h2>
            <p><small>Grandpa Money: {money}</small></p>
            <button style={{marginTop:'4px', marginBottom:'4px'}} onClick={()=>setMoney(money+10000)}>Send 10000 tk</button>
            <section className='flex'>
                <Cousin>Nabil</Cousin>
                <Cousin>Nabila</Cousin>

            </section>
        </div>
    );
};

export default Uncle;