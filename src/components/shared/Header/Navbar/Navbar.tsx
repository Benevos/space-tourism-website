import React from 'react'

import { Barlow_Condensed } from 'next/font/google'; 
import NavbarItem from './NavbarItem';


const barlowCondensed = Barlow_Condensed({ 
    weight:['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin'] 
})

function Navbar() 
{
    return (
        <nav className={`pr-[10%] h-[65px] pl-[100px] glass ${barlowCondensed.className} z-[1]
                           max-[1320px]:pl-[30px] max-[1320px]:pr-[50px]
                           max-sm:hidden`}>
            
            <ul className='flex gap-12 h-full tracking-[2.7px] text-base
                            max-[1320px]:gap-8'>

                <NavbarItem title='HOME' index={0} expectedPathname='/'/>
                <NavbarItem title='DESTINATION' index={1} expectedPathname='/destination'/>
                <NavbarItem title='CREW' index={2} expectedPathname='/crew'/>
                <NavbarItem title='TECHNOLOGY' index={3} expectedPathname='/technology'/>
         
            </ul>
        </nav>
    )
}

export default Navbar