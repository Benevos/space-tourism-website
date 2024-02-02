'use client';

import React from 'react';

import Image from 'next/image';

import { Bellefair } from 'next/font/google'; 

import 'swiper/css'

import { Destination } from '@/types/data';
import PlanetCarouselControllers from './PlanetCarouselControllers';

const bellefair = Bellefair({ weight:['400'], subsets: ['latin']});

interface PlanetItemProps {
    slideIndex: number,
    destinations: Destination[],
    currentDestination: Destination,
}

function PLanetItem(props: PlanetItemProps) 
{
    const { destinations, currentDestination, slideIndex } = props;

    return (
        <div className='w-full min-h-[500px] flex items-center justify-center gap-40
                        dest-md:flex-col dest-md:justify-around
                        dest-md:gap-0'>

            <div className='h-full flex items-center justify-center'>
                <div className='w-[350px] h-[350px]
                                max-[1100]:w-[280px] dest-md:h-[280px]
                                max-sm:w-[200px] max-sm:h-[200px]'>
                    <Image alt='planet.png' width={500} height={500} src={currentDestination.images.png}/>
                </div>
            </div>
            
            <div className='w-[30%] 
                            dest-md:w-[80%] dest-md: mt-8
                            max-sm:w-[90%] max-sm:px-5 max-sm:mt-4'>
                                
                <PlanetCarouselControllers destinations={destinations} currentDestination={currentDestination} slideIndex={slideIndex}/>

                <h1 className={`text-[80px] ${bellefair.className}
                                dest-md:text-center dest-md:w-full
                                max-sm:text-[60px]`}>
                    {currentDestination.name.toLocaleUpperCase()}
                </h1>

                <p className='leading-7 text-[#D0D6F9]
                              dest-md:text-center dest-md:w-full'>
                    {currentDestination.description}
                </p>

                <hr className='mt-12 mb-6 border-[rgba(255,255,255,0.3)]'/>

                <div className='w-full flex justify-between 
                                max-sm:flex-col max-sm:items-center max-sm:gap-7'>

                    <div className='w-1/2 
                                    dest-md:w-full dest-md:flex dest-md:flex-col dest-md:items-center 
                                    dest-md:text-center'>

                        <h2 className='text-[13px] tracking-[2.36px] text-[#D0D6F9]'>AVG. DISTANCE</h2>
                        <label className={`mt-1 text-[26px] ${bellefair.className}`}>{currentDestination.distance.toUpperCase()}</label>
                    </div>

                    <div className='w-1/2
                                    dest-md:w-full dest-md:flex dest-md:flex-col dest-md:items-center
                                    dest-md:text-center'>

                        <h2 className='text-[13px] tracking-[2.36px] text-[#D0D6F9]'>EST. TRAVEL TIME</h2>
                        <label className={`mt-1 text-[26px] ${bellefair.className}`}>{currentDestination.travel.toUpperCase()}</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PLanetItem