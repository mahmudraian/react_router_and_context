import React, { useContext } from 'react';
import { RingContext } from '../Granpa/Granpa';

const Spacial = ({gift}) => {
    const ring1=useContext(RingContext)
    return (
        <div>
            <h1>special</h1>
            <p><small>gift={gift}</small></p>
            <p><small>gift from context={ring1}</small></p>
        </div>
    );
};

export default Spacial;