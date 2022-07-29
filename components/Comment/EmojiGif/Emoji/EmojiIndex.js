/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import Emoji from './Emoji';

import emoji from '../../../../public/emojis/emojis/emoji1/2.png'
import smiles from '../../../../public/emojis/smiles/5.webp'
import funnyBaby from '../../../../public/emojis/funny_baby/1.webp'
import kolobanga from '../../../../public/emojis/kolobanga/1.webp'
import dogEmoji from '../../../../public/emojis/dogEmoji/1.webp'

import EmojiSmiles from './EmojiSmiles';
import FunnyBaby from './FunnyBaby';
import KoloBangaEmoji from './KoloBangaEmoji';
import DogEmoji from './DogEmoji';

const EmojiIndex = ({ props: { selectEmoji, setSelectEmoji, closeCloseSectionHandle } }) => {

    const [emojiView, setEmojiView] = useState('emoji');
    const viewEmojiHandle = (show) => {
        setEmojiView(show)
    }
    return (
        <div>
            <div className='flex gap-2 p-4 '>

                <span
                    className={(emojiView == 'emoji' ? 'btn-disabled bg-primary text-white' : 'btn-outline ') + " btn btn-primary btn-sm "}
                    onClick={() => viewEmojiHandle('emoji')}
                >
                    <img src={emoji?.src} alt="" className='h-full' />
                </span>

                <span
                    className={(emojiView == 'kolobanga' ? 'btn-disabled bg-primary text-white' : 'btn-outline ') + " btn btn-primary btn-sm "}
                    onClick={() => viewEmojiHandle('kolobanga')}
                >
                    <img src={kolobanga?.src} alt="" className='h-full' />
                </span>

                <span
                    className={(emojiView == 'smiles' ? 'btn-disabled bg-primary text-white' : 'btn-outline ') + " btn btn-primary btn-sm "}
                    onClick={() => viewEmojiHandle('smiles')}
                >
                    <img src={smiles?.src} alt="" className='h-full' />
                </span>

                <span
                    className={(emojiView == 'dogEmoji' ? 'btn-disabled bg-primary text-white' : 'btn-outline ') + " btn btn-primary btn-sm "}
                    onClick={() => viewEmojiHandle('dogEmoji')}
                >
                    <img src={dogEmoji?.src} alt="" className='h-full' />
                </span>
                <span
                    className={(emojiView == 'funnyBaby' ? 'btn-disabled bg-primary text-white' : 'btn-outline ') + " btn btn-primary btn-sm "}
                    onClick={() => viewEmojiHandle('funnyBaby')}
                >
                    <img src={funnyBaby?.src} alt="" className='h-full' />
                </span>


                <span
                    className='btn btn-sm text-white bg-red-600 hover:bg-red-500'
                    onClick={closeCloseSectionHandle}
                >
                    X
                </span>
            </div>
            <div className='bg-base-100 h-[300px] overflow-auto border-2 rounded-md p-1 max-w-sm absolute top-[-310px] w-full z-20'>
                {
                    emojiView == 'emoji' &&
                    <Emoji props={{ selectEmoji, setSelectEmoji }} />
                }
                {
                    emojiView === 'smiles' &&
                    <EmojiSmiles props={{ selectEmoji, setSelectEmoji }} />
                }
                {
                    emojiView === 'funnyBaby' &&
                    <FunnyBaby props={{ selectEmoji, setSelectEmoji }} />
                }
                {
                    emojiView === 'kolobanga' &&
                    <KoloBangaEmoji props={{ selectEmoji, setSelectEmoji }} />
                }
                {
                    emojiView === 'dogEmoji' &&
                    <DogEmoji props={{ selectEmoji, setSelectEmoji }} />
                }
            </div>

        </div>
    );
};

export default EmojiIndex;