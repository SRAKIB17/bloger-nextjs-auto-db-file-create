/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Camera } from '../../../ReactRSIcon';

const ShortDescription = ({ postRefMode, thumbnail, short_description }) => {
    return (
        <div className='p-5 text-justify'>
            <div className='w-full'>
                <div className='sm:float-left'>
                    {/* ----thumbnail------------ */}
                    {
                        (postRefMode === 'text' && thumbnail) ?
                            <div className='sm:mr-4'>
                                <figure>
                                    <img
                                        src={thumbnail}
                                        alt=""
                                        className='w-full max-w-full  sm:max-w-[200px] h-[200px] md:max-w-[250px] md:h-[160px] rounded-md border-2'
                                    />
                                </figure>
                            </div>
                            :
                            <div className='mr-4'>
                                <Camera size='150' className="border-2 rounded-md" />
                            </div>
                    }
                </div>
                {/* style={{ width: '100%', wordWrap: "break-word", whiteSpace: 'pre-line' }} */}
                <div className='clear-both pt-4 sm:pt-0 sm:clear-none'>
                    {
                        short_description?.slice(0, 1000)
                    }
                </div>
                <div className='clear-both'>

                </div>
            </div>
        </div>
    );
};

export default ShortDescription;