import React, { useEffect, useRef, useState } from 'react';
import classTagShortcutInput from '../hooks/hooks/useFindClassAttr';
import styles from '../hooks/TextArea.module.css';
const Comment_textarea = () => {
    const textareaRef = useRef();



    const shortcutKeyboard = (e) => {
        // classTagShortcutInput(e, textareaRef)
    }
    const onchangeInput = (e) => {
        heightAutoHandle(e)
        classTagShortcutInput(e, textareaRef)
    }
    const heightAutoHandle = (e) => {
        e.target.style.height = 'auto';
        if (e.target.scrollHeight < 200) {
            e.target.style.height = e.target.scrollHeight + 'px'
        }
        else {
            e.target.style.height = 200 + 'px'
        }
    }

    return (
        <div className='m-3'>
            <div className='relative flex'>
                <textarea ref={textareaRef}
                    id='textForm'
                    className='input input-success w-[50%] font-mono'
                    name="postBody"
                    onBlur={onchangeInput}
                    onKeyUp={(e) => shortcutKeyboard(e)}
                    onChange={onchangeInput}
                    onInput={onchangeInput}
                    onCut={heightAutoHandle}
                    onPaste={heightAutoHandle}
                    onDrop={heightAutoHandle}
                    onKeyDown={heightAutoHandle}
                >
                </textarea>
                <div className='align-bottom absolute left-[50%] bottom-0'>
                    <button className='btn btn-sm btn-primary ml-2 text-xs'>Comment</button>
                </div>
            </div>
        </div>
    );
};

export default Comment_textarea;
