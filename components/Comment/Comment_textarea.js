import React, { useEffect, useRef, useState } from 'react';
import classTagShortcutInput from '../hooks/hooks/useFindClassAttr';
import styles from '../hooks/TextArea.module.css';
import CommentList from './CommentList';
const Comment_textarea = ({ id }) => {
    const textareaRef = useRef();

    const commentBody = [
        {
            _id: 3,
            name: 'rakib',
            post_id: 13,
            email: "Russel.Parker@kameron.io",
            userID: 42342343,
            comment: 'wow so godhdfgfdgfdgfgfdgdfgdfgdfgdfgdfgdfgfsdsdfsdfsdfsdfdsfsdfdsfsdfsdfsdfsdfsdfsdfsdfdfdfsdfdfddfdfsdfopskfsd sfsflo slfsdflsdfsdfljsdl;f sdfdf dsfood',
            time: Date(),
            sort: ''
        },
        {
            _id: 4,
            name: 'rakib',
            post_id: 13,
            email: "Russel.Parker@kameron.io",
            userID: 42342343,
            comment: 'wow so gooooood',
            time: Date(),
            sort: ''
        },
        {
            _id: 5,
            name: 'rakib',
            post_id: 13,
            email: "Russel.Parker@kameron.io",
            userID: 42342343,
            comment: 'wow so gooooood',
            time: Date(),
            sort: ''
        },
    ]

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
            <div>
                <div>
                   {
                    commentBody?.map(comment=> <CommentList key={comment._id} comment={comment}/>)
                   }
                </div>
                <div className='relative flex mt-1'>
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
        </div>
    );
};

export default Comment_textarea;
