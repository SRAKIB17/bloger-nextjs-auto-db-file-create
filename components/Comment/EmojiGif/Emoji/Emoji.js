/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import styles from './emoji.module.css'
const Emoji = ({ props: { selectEmoji, setSelectEmoji } }) => {
    const selectEmojiHandle = (path) => {
        console.log(path)
        setSelectEmoji(path)
    }
    return (
        <div>
            <div className={styles?.emoji}>
                {
                    [...Array(21).keys()].map((index) => < EmojiShowImg index={index} key={index} selectEmoji={selectEmoji} selectEmojiHandle={selectEmojiHandle} />)
                }
            </div>
        </div>
    );
};

const EmojiShowImg = ({ index, selectEmoji, selectEmojiHandle }) => {

    const images = require.context('../../../../public/emojis', true);
    let emoji = images(`./emoji${index + 1}/2.png`);
    return (
        <div>
            <button
                className={(selectEmoji == emoji?.default?.src ? "border-primary btn-disabled " : " border-grey-300") + " border-2 p-1"}
                onClick={() => selectEmojiHandle(emoji?.default?.src)}
            >
                <img src={emoji?.default?.src} alt="" />
            </button>
        </div>
    )
}


export default Emoji;