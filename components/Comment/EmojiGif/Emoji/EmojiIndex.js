/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import Emoji from './Emoji';

import emoji from '../../../../public/emojis/emojis/emoji1/2.png'
import emoji1 from '../../../../public/emojis/emoji-1/emoji (1).jpg'
import emoji2 from '../../../../public/emojis/emoji-2/1.webp'
import emoji3 from '../../../../public/emojis/emoji-3/1.webp'
import smiles from '../../../../public/emojis/smiles/5.webp'
import funnyBaby from '../../../../public/emojis/funny_baby/1.webp'
import kolobanga from '../../../../public/emojis/kolobanga/1.webp'
import dogEmoji from '../../../../public/emojis/dogEmoji/1.webp'
import handEmoji from '../../../../public/emojis/handEmoji/1.webp'
import spongbob from '../../../../public/emojis/spongbob/1.webp'
import pape from '../../../../public/emojis/pepe/1.webp'

import EmojiSmiles from './EmojiSmiles';
import FunnyBaby from './FunnyBaby';
import KoloBangaEmoji from './KoloBangaEmoji';
import DogEmoji from './DogEmoji';
import HandEmoji from './HandEmoji';
import Spongbob from './Spongbob';
import Emoji1 from './Emoji1';
import Emoji2 from './Emoji2';
import Emoji3 from './Emoji3';
import Pape from './Pape';

const EmojiIndex = ({ props: { selectEmoji, setSelectEmoji, closeCloseSectionHandle } }) => {

    const [emojiView, setEmojiView] = useState('emoji');
    const viewEmojiHandle = (show) => {
        setEmojiView(show)
    }
    return (
        <div>
            <div className='flex gap-2 p-4 flex-wrap '>

                <span
                    className={(emojiView == 'emoji' ? 'btn-disabled bg-primary text-white' : 'btn-outline ') + " btn btn-primary btn-xs "}
                    onClick={() => viewEmojiHandle('emoji')}
                >
                    <img src={emoji?.src} alt="" className='h-full' />
                </span>

                <span
                    className={(emojiView == 'emoji1' ? 'btn-disabled bg-primary text-white' : 'btn-outline ') + " btn btn-primary btn-xs "}
                    onClick={() => viewEmojiHandle('emoji1')}
                >
                    <img src={emoji1?.src} alt="" className='h-full' />
                </span>
                <span
                    className={(emojiView == 'emoji2' ? 'btn-disabled bg-primary text-white' : 'btn-outline ') + " btn btn-primary btn-xs "}
                    onClick={() => viewEmojiHandle('emoji2')}
                >
                    <img src={emoji2?.src} alt="" className='h-full' />
                </span>

                <span
                    className={(emojiView == 'emoji3' ? 'btn-disabled bg-primary text-white' : 'btn-outline ') + " btn btn-primary btn-xs "}
                    onClick={() => viewEmojiHandle('emoji3')}
                >
                    <img src={emoji3?.src} alt="" className='h-full' />
                </span>

                <span
                    className={(emojiView == 'kolobanga' ? 'btn-disabled bg-primary text-white' : 'btn-outline ') + " btn btn-primary btn-xs "}
                    onClick={() => viewEmojiHandle('kolobanga')}
                >
                    <img src={kolobanga?.src} alt="" className='h-full' />
                </span>

                <span
                    className={(emojiView == 'smiles' ? 'btn-disabled bg-primary text-white' : 'btn-outline ') + " btn btn-primary btn-xs "}
                    onClick={() => viewEmojiHandle('smiles')}
                >
                    <img src={smiles?.src} alt="" className='h-full' />
                </span>

                <span
                    className={(emojiView == 'dogEmoji' ? 'btn-disabled bg-primary text-white' : 'btn-outline ') + " btn btn-primary btn-xs "}
                    onClick={() => viewEmojiHandle('dogEmoji')}
                >
                    <img src={dogEmoji?.src} alt="" className='h-full' />
                </span>

                <span
                    className={(emojiView == 'handEmoji' ? 'btn-disabled bg-primary text-white' : 'btn-outline ') + " btn btn-primary btn-xs "}
                    onClick={() => viewEmojiHandle('handEmoji')} 
                >
                    <img src={handEmoji?.src} alt="" className='h-full' />
                </span>
                <span
                    className={(emojiView == 'pape' ? 'btn-disabled bg-primary text-white' : 'btn-outline ') + " btn btn-primary btn-xs "}
                    onClick={() => viewEmojiHandle('pape')} 
                >
                    <img src={pape?.src} alt="" className='h-full' />
                </span>
                <span
                    className={(emojiView == 'spongbob' ? 'btn-disabled bg-primary text-white' : 'btn-outline ') + " btn btn-primary btn-xs "}
                    onClick={() => viewEmojiHandle('spongbob')} 
                >
                    <img src={spongbob?.src} alt="" className='h-full' />
                </span>
                <span
                    className={(emojiView == 'funnyBaby' ? 'btn-disabled bg-primary text-white' : 'btn-outline ') + " btn btn-primary btn-xs "}
                    onClick={() => viewEmojiHandle('funnyBaby')}
                >
                    <img src={funnyBaby?.src} alt="" className='h-full' />
                </span>


                <span
                    className='btn btn-xs text-white bg-red-600 hover:bg-red-500'
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
                    emojiView == 'emoji1' &&
                    <Emoji1 props={{ selectEmoji, setSelectEmoji }} />
                }
                {
                    emojiView == 'emoji2' &&
                    <Emoji2 props={{ selectEmoji, setSelectEmoji }} />
                }
                {
                    emojiView == 'emoji3' &&
                    <Emoji3 props={{ selectEmoji, setSelectEmoji }} />
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
                {
                    emojiView === 'pape' &&
                    <Pape props={{ selectEmoji, setSelectEmoji }} />
                }
                {
                    emojiView === 'handEmoji' &&
                    <HandEmoji props={{ selectEmoji, setSelectEmoji }} />
                }
                {
                    emojiView === 'spongbob' &&
                    <Spongbob props={{ selectEmoji, setSelectEmoji }} />
                }
            </div>

        </div>
    );
};

export default EmojiIndex;