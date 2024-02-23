import React from 'react';
import './Navber.css'
import img1 from './../../../../src/assist/Group 16.png'
import Image from 'next/image';

const Navber = () => {
    return (
        <div>
            
            <Image className='img1' src={img1} alt='logo'/>
           
            
        </div>
    );
};

export default Navber;