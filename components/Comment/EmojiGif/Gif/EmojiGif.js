/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import styles from './gifEmoji.module.css'
const EmojiGif = ({ props: { selectEmoji, setSelectEmoji } }) => {

    const selectEmojiHandle = (path) => {
        console.log(path)
        setSelectEmoji(path)
    }
    return (
        <div>
            <div className={styles?.emojiGif}>
                {
                    [...Array(35).keys()].map((index) => < EmojiShowImg index={index} key={index} selectEmoji={selectEmoji} selectEmojiHandle={selectEmojiHandle} />)
                }
            </div>
        </div>
    );
};

const EmojiShowImg = ({ index, selectEmoji, selectEmojiHandle }) => {

    const images = require.context('../../../../public/gif/emoji', true);
    let emojiGif = images(`./${index}.gif`);
    return (
        <div>
            <button
                className={(selectEmoji == emojiGif?.default?.src ? " border-primary btn-disabled " : " border-grey-300") + " border-2 p-1 rounded-md"}
                onClick={() => selectEmojiHandle(emojiGif?.default?.src)}
            >
                <img src={emojiGif?.default?.src} alt="" />
            </button>
        </div>
    )
}


export default EmojiGif;