import React, { useState } from 'react';
import { Emoji, GifText } from '../../ReactRSIcon';
import EmojiIndex from './Emoji/EmojiIndex';
import GifIndex from './Gif/GifIndex';

const EmojiGifIndex = ({ props: { selectEmoji, setSelectEmoji, showEmojiGifSection, setShowEmojiGifSection } }) => {

    const viewEmojiSectionHandle = (view) => {
        setShowEmojiGifSection(view)
    }

    const closeCloseSectionHandle = () => {
        setShowEmojiGifSection(null)
    }
    return (
        <div className='relative'>
            <div className='m-2'>
                <div className='flex  items-center gap-2'>
                    <span
                        className='btn btn-xs h-8 btn-outline btn-info'
                        onClick={() => viewEmojiSectionHandle('emoji')}
                    >
                        <Emoji size='22' />
                    </span>
                    <span
                        className='btn btn-xs h-8 btn-outline btn-info'
                        onClick={() => viewEmojiSectionHandle('gif')}
                    >
                        <GifText size='24' />
                    </span>
                </div>
            </div>

            <div className='bg-base-300'>
              
                {
                    showEmojiGifSection == 'emoji' &&
                    <EmojiIndex props={{ selectEmoji, setSelectEmoji, closeCloseSectionHandle }} />
                }
                {
                    showEmojiGifSection == 'gif' &&
                    <GifIndex props={{ selectEmoji, setSelectEmoji, closeCloseSectionHandle }} />
                }
            </div>
        </div>
    );
};

export default EmojiGifIndex;