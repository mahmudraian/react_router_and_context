import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import TShirt from '../TShirt/TShirt';
import './Home.css';

const Home = () => {
    const tshirts= useLoaderData();
    const[cart,setCart]=useState([])
    const handdletshirt=(tshirt)=>{
        const exist= cart.find(ts=>ts._id===tshirt._id);
        if(exist){
            alert("add done already")
        }
        else{

            const newcart=[...cart,tshirt]
            setCart(newcart);
        }
     }
     const handleremoveitem=tshirt=>{
        const remaining=cart.filter(ts=>ts._id !== tshirt._id);
        setCart(remaining);

    }
   
    return (
        <div className='home-container'>
        <div className="tshirt-container">
        {
            tshirts.map(tshirt=> <TShirt
            key={tshirt._id}
            tshirt={tshirt}
            handdletshirt={handdletshirt}

            ></TShirt>)
        }

        </div>
        <div className="cart-container">
        <Cart
         cart={cart}
         handleremoveitem={handleremoveitem}
         ></Cart>

        </div>
        </div>
    );
};

export default Home;