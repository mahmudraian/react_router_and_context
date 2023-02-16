import React from 'react';
import './TShirt.css';

const TShirt = ({tshirt,handdletshirt}) => {
    const {picture,name,price}=tshirt;
    return (
        <div className='tshirt'>
           
            <img src={picture} alt=''></img>
            <p>{name}</p>
            <p>{price}</p>
            <button onClick={()=>handdletshirt(tshirt)} >Buy this</button>

        </div>
    );
};

export default TShirt;