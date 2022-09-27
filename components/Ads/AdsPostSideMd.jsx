/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import bg from '../../public/loginBg.jpg'
import Info from '../ReactRSIcon/icon/Info/Info';
const AdsPostSideMd = ({ ads }) => {
    const addShow = [true, false, true, false, true, false, true]
    const getShowState = addShow[Math.floor(Math.random() * addShow.length)]
    const [hideAds, setHideAds] = useState(false);

    const [fullDetails, setFullDetails] = useState(null)
    return (
        <div>
            {
                // (getShowState && !hideAds) &&
                <div
                    className='relative rounded-none bg-base-200'
                // style={{ backgroundImage: `url('${bg?.src}')`, backgroundSize: 'cover', backgroundPosition: '100% 100% ' }}

                >
                    <div className='w-full mb-1 rounded-md relative text-white'>
                        <div className='absolute right-2 z-[5] -top-2 flex items-center'>
                            <span
                                onClick={() => setHideAds(true)}
                                className=" btn btn-xs btn-info text-white rounded-none rounded-l-md"
                            >
                                X
                            </span>
                            <span
                                onClick={() => setFullDetails(!fullDetails)}
                                className=' btn btn-xs text-white btn-info rounded-none rounded-r-md'
                            >
                                <Info size='13' />
                            </span>
                        </div>

                        {
                            fullDetails &&
                            <div
                                className='max-w-[660px] max-h-[360px] h-full bg-base-200 absolute w-full z-[4]'
                            >
                                <div className=' blur-2xl absolute -z-10 h-full w-full'
                                    style={{ backgroundImage: `url('${ads?.thumbnail}')`, backgroundSize: 'cover', backgroundPosition: '100% 100% ' }}
                                >
                                </div>

                                <div className='p-4 text-primary'>
                                    <div className='text-justify overflow-scroll h-full max-h-[235px]'>
                                        {ads?.details}
                                    </div>
                                    <a href={ads?.url} target='_blank' rel="noreferrer" className='btn capitalize  btn-xs link link-hover '>
                                        visit
                                    </a>
                                </div>
                            </div>
                        }

                        <a href={ads?.url} target='_blank' rel="noreferrer" >
                            <div className='max-w-[660px] max-h-[360px]'>
                                <img src={ads?.thumbnail} alt="" className='h-full w-full p-1 border-base-300' />
                            </div>
                        </a>
                    </div>
                </div>
            }

            {
                (hideAds && getShowState) &&
                <div>
                    <span
                        className='btn btn-ghost btn-xs capitalize'
                        onClick={() => setHideAds(false)}
                    >
                        Show Ads
                    </span>
                </div>
            }
        </div >
    );
};

export default AdsPostSideMd;