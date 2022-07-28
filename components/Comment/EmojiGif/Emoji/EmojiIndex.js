import React from 'react';
import Emoji from './Emoji';

const EmojiIndex = ({ props: { selectEmoji, setSelectEmoji } }) => {
    return (
        <div>
            <div className='h-[300px] overflow-auto border-2 rounded-md p-1 max-w-sm absolute top-[-310px] w-full z-20'>
                <Emoji props={{ selectEmoji, setSelectEmoji }}/>
            </div>

        </div>
    );
};

export default EmojiIndex;