import React from 'react'
import Logo from '../Logo';

import { HiMiniBars3 } from "react-icons/hi2";
import Navbar from './Navbar/Navbar';



function Header() {
    return (
        <header className='h-[75px] mt-[25px] flex items-center justify-between
                           max-home-md:mt-0'>
            
          <button className='h-full  pl-[30px]'>
            <div className='w-[40px] h-[40px]'>
                <Logo/>
            </div>
              
          </button>

          <Navbar/>

          <button className='hidden text-4xl pr-5 max-sm:inline'> 
            <HiMiniBars3/>
          </button>
          

        </header>
    )
}

export default Header