import React, { useEffect, useRef, useState } from 'react';
import classTagShortcutInput from '../hooks/hooks/useFindClassAttr';
import styles from './Comment.module.css'
import LikeLoveFavorite from './LikeLoveFevorite/LikeLoveFavorite';
import CommentList from './CommentList';
const Comment_textarea = ({ post_id }) => {
    const textareaRef = useRef();

    const commentBody = [
        {
            _id: 3,
            post_id: 13,
            userID: 42342343,
            comment: 'wing elit. Ipsa tenetur, vel, architecto unde ex quos, distinctio vero et commodi quia expedita pariatur? Eveniet, quod nostrum impedit illo earum exercitationem consequuntur?Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt laborum aliquid nihil, architecto quod fugit, hic cumque ex',
            time: Date(),
            sort: '',
            comment_id: 45345455435435
        },
        {
            _id: 4,
            post_id: 13,
            userID: 42342343,
            comment: 'wow so gooooood',
            time: Date(),
            sort: '',
            comment_id: 45345455435435
        },
        {
            _id: 5,
            post_id: 13,
            userID: 42342343,
            comment: 'wow so gooooood',
            time: Date(),
            sort: '',
            comment_id: 45345455435435
        },
        {
            _id: 6,
            post_id: 13,
            userID: 42342343,
            comment: 'wow so gooooood',
            time: Date(),
            sort: '',
            comment_id: 45345455435435
        },
        {
            _id: 7,
            post_id: 13,
            userID: 42342343,
            comment: 'wow so gooooood',
            time: Date(),
            sort: '',
            comment_id: 45345455435435
        },
        {
            _id: 74,
            post_id: 13,
            userID: 42342343,
            comment: 'wow so gooooood',
            time: Date(),
            sort: '',
            comment_id: 45345455435435
        },
        {
            _id: 67,
            post_id: 13,
            userID: 42342343,
            comment: 'wow so gooooood',
            time: Date(),
            sort: '',
            comment_id: 45345455435435
        },
        {
            _id: 77,
            post_id: 13,
            userID: 42342343,
            comment: 'wow so gooooood',
            time: Date(),
            sort: '',
            comment_id: 45345455435435
        },
        {
            _id: 9,
            post_id: 13,
            userID: 42342343,
            comment: 'wow so gooooood',
            time: Date(),
            sort: '',
            comment_id: 45345455435435
        },
        {
            _id: 8,
            post_id: 13,
            userID: 42342343,
            comment: 'wow so gooooood',
            time: Date(),
            sort: '',
            comment_id: 45345455435435
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
    const [showComment, setShowCommentSection] = useState(false);
    const showCommentHandle = (id) => {
        try {

            const showComment = document.getElementById('commentShow' + id)
            const commentForm = document.getElementById('commentForm' + id)
            const showCommentButton = document.getElementById('showCommentButton' + id)
            //---------------------------------for like comment hide =============-----------------------
            const showLikeUnlikeUser = document.getElementById('showLikeUnlikeUser' + id);
            showLikeUnlikeUser.style.height = '0px'
            showLikeUnlikeUser.style.overflow = 'hidden'
            showLikeUnlikeUser.style.borderTopWidth = '0px'
            //----------------------------------------------------------------------------------
            if (showComment.offsetHeight <= 2) {
                commentForm.style.height = '100%'
                commentForm.childNodes[0].childNodes[0].style.borderTopWidth = '1px'
                showComment.style.height = '400px'
                showCommentButton.className = 'btn-primary btn btn-xs  ml-2 '
            }
            else {
                showComment.style.height = '0px'
                commentForm.style.height = '0px'
                commentForm.childNodes[0].childNodes[0].style.borderTopWidth = '0px'
                showCommentButton.className = ' btn-outline btn btn-xs btn-primary ml-2 '
            }
        }
        catch {

        }
    }

    return (
        <div>
            <div className='mb-1'>
                {/* -------------------------------------like unlike and show user who like this post---------------------------- */}
                <LikeLoveFavorite props={{ showCommentHandle, post_id }} />
            </div>

            {/* =--------------------------------------------for comment list and reply component---------------------------- */}
            <div id={'commentShow' + post_id} className={styles.showComment + ' overflow-auto'}>
                <div className=' p-3 overflow-auto'>
                    {
                        commentBody?.map(comment => <CommentList key={comment._id} comment={comment} />)
                    }
                </div>
            </div>

            {/* -----------------------------for comment form and comment auto hight----------------------------- */}
            <div id={'commentForm' + post_id} className={styles.showComment}>

                <form >
                    <div className='relative flex items-end  pt-4 mb-4 pl-3 mt-1'>
                        <textarea ref={textareaRef}
                            id='textForm'
                            className='input input-success w-full font-mono'
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
                        <div className='align-bottom left-[50%] bottom-0'>
                            <button className='btn btn-sm btn-primary ml-2 text-xs'>Comment</button>
                        </div>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default Comment_textarea;
