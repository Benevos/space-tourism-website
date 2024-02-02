import React from 'react'

import { Bellefair, Barlow_Condensed } from 'next/font/google';
import ExploreButton from './ExploreButton';

const bellefair = Bellefair({ weight:['400'], subsets: ['latin']});

const barlowCondensed = Barlow_Condensed({ 
  weight:['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'] 
});

function Explore() 
{
    return (
        <section className='h-[calc(100dvh-100px)] max-h-[1100px] flex items-center justify-center overflow-hidden
                              max-[1320px]:min-h-[900px] max-[1320px]:h-[calc(100dvh-75px)]
                              max-sm:min-h-[500px]'>

          <div className='w-full flex items-end justify-around 
                          max-[1320px]:h-full max-[1320px]:flex-col max-[1320px]:items-center'>
                            
                            <div className='w-[490px] text-pretty
                            max-[1320px]:text-center max-[1320px]:w-[420px]
                            max-sm:w-[300px]'>
              <h1>
                <div className={`text-[23px] text-[#D0D6F9] tracking-[4.72px] ${barlowCondensed.className}
                                 max-sm:text-[15px]`}>
                  SO, YOU WANT TO TRAVEL TO 
                </div>
                <div className={`text-[130px] ${bellefair.className}
                                 max-sm:text-[95px]`}>
                  SPACE
                </div>
              </h1>
              <p className='text-[17px] text-[#D0D6F9] leading-9
                            max-[1320px]:leading-7
                            max-sm:text-[14px] max-sm:leading-6'>

                {"Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!"}
              </p>
            </div>

            <ExploreButton/>
          </div>

        </section>
    )
}

export default Explore