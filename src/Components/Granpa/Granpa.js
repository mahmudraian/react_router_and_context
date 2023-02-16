import React, { createContext, useState } from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import './Granpa.css';

export const RingContext =createContext('matir ring')
export const MoneyContext =createContext(5555)

const Granpa = () => {
    const house=7;
    const gift='diamond ring';
    const [money,setMoney]=useState(555)

    return (
    <RingContext.Provider value='Gold ring'>
    <MoneyContext.Provider value={[money,setMoney]}>
        
    <div className='granpa'>
            <h2>This is granpa</h2>
            <section className='flex'>
            <Father house={house} gift={gift}></Father>
            <Uncle house={house}></Uncle>
            <Aunty house={house}></Aunty>
            </section>
        </div>

    </MoneyContext.Provider>
        </RingContext.Provider>
    );
};

export default Granpa;