import React from 'react';
import Cousin from '../Cousin/Cousin';

const Aunty = ({ring}) => {
    return (
        <div style={{ border: '2px solid blue', padding: '10px', borderRadius: '10px' }}>
            <h2>Aunty</h2>
            <section className='flex'>
                <Cousin>Abir</Cousin>
                <Cousin hasFriend={true} ring={ring}>Nibir</Cousin>
            </section>
        </div>
    );
};

export default Aunty;