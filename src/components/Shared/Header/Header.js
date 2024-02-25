import React from 'react';

const Header = () => {
    return (
        <div>
           <div className='flex  mt-10'>
             <div>
             <h1 className=' lg:ml-10 md:w-80 md:text-3xl lg:text-3xl lg:w-full w-40  text-xl ml-10 md:mr-24 mr-0 '>Welcome to fauget music services</h1>
             </div>

            <div className='flex   '><button className='bg-black pl-4 pr-4 rounded-xl pt-2 pb-2  lg:ml-[500px]   h-14 mt-5 text-white  text-sm ml-5' >Sing Up</button>
            <button className='bg-black pl-4 pr-4 rounded-xl lg:pt-2 pt-0 ml-6 lg:pb-2 h-14 mt-5   text-white text-sm'>Sing In</button></div>
            </div>
        </div>
    );
};

export default Header;