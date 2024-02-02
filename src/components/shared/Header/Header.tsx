import React from 'react'
import Logo from '../Logo';


import Navbar from './Navbar/Navbar';
import OpenMobileMenuButton from './Navbar/OpenMobileMenuButton';

function Header() 
{

    return (
        <header className='h-[75px] mt-[25px] flex items-center justify-between
                           max-home-md:mt-0'>
            
          <button className='h-full  pl-[30px]'>
            <div className='w-[40px] h-[40px]'>
                <Logo/>
            </div>
              
          </button>

          <Navbar/>

          
          <OpenMobileMenuButton/>

        </header>
    )
}

export default Header