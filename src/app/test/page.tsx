'use client'

import React from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import { v4 as uuid } from 'uuid';

import 'swiper/css'
import Item from './Item';

function TestPage() 
{
    const dummyArray = [...Array(3).keys()];

    return (
        <div className='w-full h-[100dvh]'>
            <Swiper loop className='h-full'>

                {dummyArray.map((elem, index) =>

                 <SwiperSlide className='h-full' key={uuid()}> 
                    <Item dummyArray={dummyArray} slideIndex={index}/>
                 </SwiperSlide>
                 
                )}

            </Swiper>
        </div>
    )
}

export default TestPage