/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import styles from './emoji.module.css'
const Emoji1 = ({ props: { selectEmoji, setSelectEmoji } }) => {
    const selectEmojiHandle = (path) => {
        setSelectEmoji(path)
    }
    return (
        <div>
            <div className={styles?.emoji}>
                {
                    [...Array(23).keys()].map((index) => < EmojiShowImg index={index} key={index} selectEmoji={selectEmoji} selectEmojiHandle={selectEmojiHandle} />)
                }
            </div>
        </div>
    );
};

const EmojiShowImg = ({ index, selectEmoji, selectEmojiHandle }) => {

    const images = require.context('../../../../public/emojis/emoji-1', true);
    let emoji = images(`./emoji (${index + 1}).jpg`);
    return (
        <div>
            <span
                className={(selectEmoji == emoji?.default?.src ? "btn btn-disabled bg-primary" : " btn btn-primary btn-outline")}
                onClick={() => selectEmojiHandle(emoji?.default?.src)}
            >
                <img src={emoji?.default?.src} alt="" className='h-full' />
            </span>
        </div>
    )
}


export default Emoji1;