import React from 'react';
import img1 from './../../../../src/assist/Group 16.png'
import Image from 'next/image';
import {DeleteIcon} from '@mui/icons-material/Delete';
import HomeIcon from '@mui/icons-material/Home';
import MediaBluetoothOnIcon from '@mui/icons-material/MediaBluetoothOn';
import SettingsIcon from '@mui/icons-material/Settings';
import QueueMusicIcon from '@mui/icons-material/QueueMusic';


const Navber = () => {
    return (
        <div>
            
            <Image className=' mt-7 ml-3' src={img1} alt='logo'/>
            <h1 className='lg:text-2xl text-xl  text-white ml-2.5 mt-7'>Menu</h1>
           <div className='text-white mt-5 lg:text-xl text-sm'><HomeIcon className='text-white lg:mr-3 mr-2 lg:ml-3 ml-2 lg:h-10 h-6 w-7'></HomeIcon><span >Home</span></div>
           <div className='text-white mt-5 lg:text-xl text-sm'><MediaBluetoothOnIcon className='text-white lg:mr-3 mr-2 lg:ml-3 ml-2 lg:h-10 h-6 w-7'></MediaBluetoothOnIcon><span >Podcast</span></div>
           <div className='text-white mt-5 lg:text-xl text-sm'><SettingsIcon className='text-white lg:mr-3 mr-2 lg:ml-3 ml-2 lg:h-10 h-6 w-7'></SettingsIcon><span >Settings</span></div>

           <div>
            <h1  className='lg:text-2xl text-xl  text-white mt-32 ml-2.5'>My Playlist      ______</h1>

            <div className='text-white mt-5 lg:text-xl text-sm'><QueueMusicIcon className='text-white lg:mr-3 mr-2 lg:ml-3 ml-2 lg:h-10 h-6 w-7'></QueueMusicIcon><span >Playlist #A</span></div>
            
            <div className='text-white mt-5 lg:text-xl text-sm'><QueueMusicIcon className='text-white lg:mr-3 mr-2 lg:ml-3 ml-2 lg:h-10 h-6 w-7'></QueueMusicIcon><span >Playlist #B</span></div>
            
            <div className='text-white mt-5 lg:text-xl text-sm'><QueueMusicIcon className='text-white lg:mr-3 mr-2 lg:ml-3 ml-2 lg:h-10 h-6 w-7'></QueueMusicIcon><span >Playlist #C</span></div>
            
            <div className='text-white mt-5 lg:text-xl text-sm'><QueueMusicIcon className='text-white lg:mr-3 mr-2 lg:ml-3 ml-2 lg:h-10 h-6 w-7'></QueueMusicIcon><span >Add New +</span></div>
            
           </div>

           
            
        </div>
    );
};

export default Navber;