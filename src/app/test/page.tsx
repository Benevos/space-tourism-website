'use client';

import React from 'react'
import { Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';


function TestPage() 
{
    const dummyArrary = [...Array(3).keys()];
    const colors = ['red', 'green', 'blue'];

    return (
        <div className='h-[500px] overflow-hidden'>
            <Swiper direction='vertical'
                
                    height={500}
                    >
                
                { dummyArrary.map((elem, index) =>
                    <SwiperSlide className='h-[500px]' key={'slide'+index}>

                        <div style={{width: '100%', height: '500px', backgroundColor: colors[index]}}>
                            Slide {index+1}
                        </div>

                    </SwiperSlide>
                )}

            </Swiper>
        </div>
    )
}

export default TestPage