import React, { useState } from 'react';

const AdsStory = () => {
    const addShow = [true, false, true, false, true, false, true]
    const getShowState = addShow[Math.floor(Math.random() * addShow.length)]
    const [hideAds, setHideAds] = useState(true)
    return (
        <div>
            {
                // 
                (getShowState && hideAds) &&
                <div className='relative'>


                    <div className='w-full h-16  mb-1 rounded-md relative'>
                        <div>
                            <button className='absolute right-2 top-1 btn btn-xs w-[5px] h-[5px] outline-primary text-white  btn-outline' onClick={() => setHideAds(null)}>
                                X
                            </button>
                        </div>
                        <div className='cursor-pointer'>
                            <h1 className='text-3xl  font-mono font-light border-dotted border-2 cursor-pointer'>All is good ..Some Special feature coming</h1>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default AdsStory;