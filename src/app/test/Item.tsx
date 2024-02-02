'use client'

import React from 'react'
import { useSwiper } from 'swiper/react';

import { v4 as uuid } from 'uuid';

interface ItemProps {
    dummyArray: number[],
    slideIndex: number,
}

function Item(props: ItemProps) {
    const { dummyArray, slideIndex } = props;

    const swiper = useSwiper();

    const handleClick = (index: number) => {
        swiper.slideToLoop(index)
    }

    return (
        <div className='h-full flex flex-col items-center justify-center'>
            Slide {slideIndex+1}

            <div className='flex gap-4'>

                {dummyArray.map((elem, index) => // This is actually another component but it is this way here due to simplicity
                    <button key={uuid()} onClick={() => handleClick(index)}>
                        Go to slide {index+1}
                    </button>
                )}

            </div>

        </div>
    )
}

export default Item