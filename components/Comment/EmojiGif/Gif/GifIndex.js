/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import EmojiGif from './EmojiGif';
import OtherEmojiGif from './OtherEmojiGif';

const GifIndex = ({ props: { selectEmoji, setSelectEmoji, closeCloseSectionHandle } }) => {

    const [gifView, setGifView] = useState('emoji');
    const viewGifHandle = (view) => {
        setGifView(view)
    }
    return (
        <div >
            <div className='flex gap-2 p-4 '>
                <span
                    className={(gifView == 'emoji' ? 'btn-disabled bg-primary text-white' : 'btn-outline ') + " btn btn-primary btn-sm "}
                    onClick={() => viewGifHandle('emoji')}
                >
                    <img src='/_next/static/media/0.f5ccf354.gif' alt="" className='h-full' />
                </span>
                <span
                    className={(gifView == 'others' ? 'btn-disabled bg-primary text-white' : 'btn-outline ') + " btn btn-primary btn-sm "}
                    onClick={() => viewGifHandle('others')}
                >
                    <img src='/_next/static/media/others%20(1).26ce2553.gif' alt="" className='h-full' />
                </span>

                <span
                    className='btn btn-sm text-white bg-red-600 hover:bg-red-500'
                    onClick={closeCloseSectionHandle}
                >
                    X
                </span>

            </div>
            <div className='h-[300px] overflow-auto bg-base-100 border-2 rounded-md p-1 max-w-sm absolute top-[-310px] w-full z-20'>
                {
                    gifView == 'emoji' && <EmojiGif props={{ selectEmoji, setSelectEmoji }} />
                }
                {
                    gifView == 'others' && <OtherEmojiGif props={{ selectEmoji, setSelectEmoji }} />
                }
            </div>


        </div>
    );
};

export default GifIndex;