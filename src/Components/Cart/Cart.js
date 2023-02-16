import React from 'react';
import './Cart.css';

const Cart = ({cart,handleremoveitem}) => {

let message;
    if(cart.length===0){
        message=<p>please buy one item</p>
    }
    else{
        message=<p>Thanks for buying</p>
    }



    return (
        <div>
            <h2 className={cart.length >=2 ? 'orenge':'red'}>Order summary {cart.length}</h2>
            <h5 className={`bold ${cart.length >3 ?'yellow':'green'}`}>hi from cart</h5>
            {
                cart.map(tshirt=> <p
                key={tshirt._id}>
                {tshirt.name}
                <button onClick={()=>handleremoveitem(tshirt)}>X</button>
                </p>)
               
            }
             {
                    message
                }
                {
                    cart.length ===3? <p>Tin jon ke diba?</p>:<p>Taratari Kino</p>
                }
        </div>
    );
};

export default Cart;