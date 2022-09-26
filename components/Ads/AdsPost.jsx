import React, { useState } from 'react';
import bg from '../../public/loginBg.jpg'
import Info from '../ReactRSIcon/icon/Info/Info';
const AdsStory = () => {
    const addShow = [true, false, true, false, true, false, true]
    const getShowState = addShow[Math.floor(Math.random() * addShow.length)]
    const [hideAds, setHideAds] = useState(false);

    const ads = {
        title: 'Install Apps and Quick Access',
        thumbnail: '',
        url: '/profile',
        html: '',
        details: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, inventore repellendus. Eius corporis, similique aspernatur saepe, magni illo ipsa rerum provident ducimus suscipit, ut quo nisi consequuntur! Asperiores, repellendus voluptasm ipsum dolor sit amet consectetur adipisicing elit. Dolorem, inventore repellendus. Eius corporis, similique aspernatur saepe, magni illo ipsa rerum provident ducimus suscipit, ut quo nisi consequuntur! Asperiores, repellendus voluptas..'
    }
    const [fullDetails, setFullDetails] = useState(null)
    return (
        <div>
            {
                (getShowState && !hideAds) &&
                <div
                    className='relative rounded-sm bg-base-200'
                // style={{ backgroundImage: `url('${bg?.src}')`, backgroundSize: 'cover', backgroundPosition: '100% 100% ' }}

                >
                    <div className='w-full h-20  mb-1 rounded-md relative text-primary '>
                        <div className='absolute right-2 top-1 flex items-center'>
                            <button
                                onClick={() => setHideAds(true)}
                                className=" btn btn-ghost btn-xs"
                            >
                                X
                            </button>
                            <button
                                onClick={() => setFullDetails(true)}
                                className=' btn btn-ghost btn-xs text-info '
                            >
                                <Info size='13' />
                            </button>
                        </div>
                        {
                            fullDetails &&
                            <div className='bg-base-200 absolute bottom-[85px] rounded-sm  p-4 w-full'>
                                <button
                                    onClick={() => setFullDetails(null)}
                                    className="btn btn-sm btn-warning text-white absolute right-1 -top-[16px]"
                                >
                                    X
                                </button>
                                <div className='text-justify'>
                                    {ads?.details}
                                </div>
                                <a href={ads?.url} target='_blank' rel="noreferrer" className='btn capitalize  btn-xs link link-hover '>
                                    visit
                                </a>
                            </div>
                        }
                        <a href={ads?.url} target='_blank' rel="noreferrer" >
                            <div className='flex items-center h-full w-full gap-2'>
                                <div className='h-full overflow-hidden max-w-[130px] w-full'>
                                    <img src='/ads/ads1.png' alt="" className='h-full p-1 border-base-300' />
                                </div>
                                <div>

                                    <h1 className='font-sans sm:text-lg'>
                                        {ads?.title}
                                    </h1>
                                    <p className=' text-xs  overflow-hidden whitespace-pre-wrap'>
                                        {
                                            ads?.details?.slice(0, 100) + "..."
                                        }
                                    </p>
                                </div>
                                {/* <div className='cursor-pointer'>
                                <h1 className='text-xl  font-mono font-light cursor-pointer'>All is good ..Some Special feature coming</h1>
                            </div> */}
                            </div>
                        </a>
                    </div>
                </div>
            }

            {
                (hideAds && getShowState) &&
                <div>
                    <button
                        className='btn btn-ghost btn-xs capitalize'
                        onClick={() => setHideAds(false)}
                    >
                        Show Ads
                    </button>
                </div>
            }
        </div >
    );
};

export default AdsStory;