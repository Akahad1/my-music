import React from 'react';

const Showdata = async () => {
   const res =await fetch('https://api.lyrics.ovh/suggest/e')
   const musicInformation= await res.json()
  
   const data =musicInformation.data.slice(0,5)
   console.log(data)
    return (
        <div className='grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 '>
            {
                data.map((item)=>(
                    <img className='ml-10 rounded-lg mt-10' key={item.id} src={item.album.cover} alt=''/>
                ))
            }
            
        </div>
    );
};

export default Showdata;