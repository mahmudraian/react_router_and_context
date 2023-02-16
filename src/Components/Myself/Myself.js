import React from 'react';
import Spacial from '../Spacial/Spacial';

const Myself = ({house ,gift}) => {
    
    return (
        <div>
            <h4>Myself  {house}</h4>
            <Spacial gift={gift}></Spacial>
        </div>
    );
};

export default Myself;