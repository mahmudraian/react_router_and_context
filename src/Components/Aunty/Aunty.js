import React, { useContext } from 'react';
import Cousin from '../Cousin/Cousin';
import { MoneyContext } from '../Granpa/Granpa';

const Aunty = ({house}) => {
    const [money,setMoney]=useContext(MoneyContext)
    return (
        <div>
            <h3>Aunty  house={house}</h3>
            <button onClick={()=>{setMoney(money+1)}}>Takadaw</button>
            <section className='flex'>
                <Cousin  house={house}></Cousin>
                <Cousin  house={house}></Cousin>
                
            </section>
        </div>
    );
};

export default Aunty;