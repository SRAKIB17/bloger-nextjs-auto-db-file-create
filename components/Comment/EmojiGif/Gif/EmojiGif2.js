/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import styles from './gifEmoji.module.css'
const EmojiGif2 = ({ props: { selectEmoji, setSelectEmoji } }) => {

    const selectEmojiHandle = (path) => {
        console.log(path)
        setSelectEmoji(path)
    }

    const cache = []
    const getM = require.context('../../../../public/gif/emoji 2', true, /\.(htm|html|js|css|gif|png)$/, 'sync');
    getM.keys().forEach(element => {
        const moduleEmoji = getM(element)
        cache.push(moduleEmoji)
    });
    return (
        <div>
            <div className={styles?.emojiGif}>
                {
                    cache?.map((moduleEmoji, index) =>
                        <div key={index}>
                            <span
                                className={(selectEmoji == moduleEmoji?.default?.src ? "btn btn-disabled bg-primary" : " btn btn-primary btn-outline")}
                                onClick={() => selectEmojiHandle(moduleEmoji?.default?.src)}
                            >
                                <img src={moduleEmoji?.default?.src} alt="" className='h-full' />
                            </span>
                        </div>
                    )
                }
            </div>
        </div>
    );
};




export default EmojiGif2;