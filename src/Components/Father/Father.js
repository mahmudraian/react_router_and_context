import React from 'react';
import Brother from '../Brother/Brother';
import Myself from '../Myself/Myself';
import Sister from '../Sister/Sister';

const Father = ({house,gift}) => {
    return (
        <div >
            <h3>Father :{house}</h3>
            <section className='flex'>
            <Myself house={house} gift={gift}></Myself>
            <Brother house={house}></Brother>
            <Sister  house={house}></Sister>

            </section>
        </div>
    );
};

export default Father;