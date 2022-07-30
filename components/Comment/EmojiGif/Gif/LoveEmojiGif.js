/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import styles from './gifEmoji.module.css'
const LoveEmojiGif = ({ props: { selectEmoji, setSelectEmoji } }) => {

    const selectEmojiHandle = (path) => {
        console.log(path)
        setSelectEmoji(path)
    }
    return (
        <div>
            <div className={styles?.emojiGif}>
                {
                    [...Array(42).keys()].map((index) => < EmojiShowImg index={index} key={index} selectEmoji={selectEmoji} selectEmojiHandle={selectEmojiHandle} />)
                }
            </div>
        </div>
    );
};

const EmojiShowImg = ({ index, selectEmoji, selectEmojiHandle }) => {

    const images = require.context('../../../../public/gif/love emoji', true);
    let emojiGif = images(`./love (${index + 1}).gif`);
    return (
        <div>
            <span
                className={(selectEmoji == emojiGif?.default?.src ? "btn btn-disabled bg-primary" : " btn btn-primary btn-outline")}
                onClick={() => selectEmojiHandle(emojiGif?.default?.src)}
            >
                <img src={emojiGif?.default?.src} alt="" className='h-full' />
            </span>
        </div>
    )
}


export default LoveEmojiGif;