import React, { useContext } from 'react';
import { MoneyContext } from '../Granpa/Granpa';

const Sister = ({house}) => {
    const money=useContext(MoneyContext)
    return (
        <div>
            <h4>Sister</h4>
            <p><small> house={house}</small></p>
            <p><small>Money:{money}</small></p>
        </div>
    );
};

export default Sister;