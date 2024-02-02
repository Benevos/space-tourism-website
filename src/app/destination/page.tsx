import React from 'react';

import { Barlow_Condensed } from 'next/font/google'; 

import Header from '@/components/shared/Header/Header'
import PlanetCarousel from '@/components/destinations/PlanetCarousel';
import { promises as fs } from 'fs';
import { DataJson } from '@/types/data';

const barlowCondensed = Barlow_Condensed({ 
    weight:['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin'] 
})

async function DestinationPage() 
{
    const file = await fs.readFile(process.cwd() + '/src/assets/data.json', 'utf-8');
    const data: DataJson = JSON.parse(file);
    const destinations = data.destinations;

    return (
        <div className='min-h-[100dvh] w-full flex justify-center destination-background'>
            <div className='w-full max-w-[1536px] min-h-full'>
                <Header/>

                <main className='pt-4'>

                    <div className={`text-[25px] tracking-[4.72px] px-28 mb-8 ${barlowCondensed.className}
                                     max-dest-md:px-12 max-dest-md:mt-4 max-dest-md:mb-12 max-dest-md:text-[23px]
                                     max-sm:text-base max-sm:px-0 max-sm:flex max-sm:justify-center max-sm:items-center max-sm:text-center
                                     max-sm:mb-8 max-sm:mt-0`}>

                        <h2 className='flex gap-3'>
                            <label className='text-[rgba(255,255,255,0.4)]'>
                                02
                            </label>
                            <label>
                                PICK YOUR DESTINATION
                            </label>
                        </h2>
                    </div>

                    <PlanetCarousel destinations={destinations}/>
                </main>
            </div>
        </div>
    )
}

export default DestinationPage