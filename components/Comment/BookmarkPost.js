import React, { useContext, useEffect, useId, useState } from 'react';
import { UserFullInfoProvider } from '../../pages/_app';
import { BookmarkStar } from '../ReactRSIcon';
import { useRouter } from 'next/router';
import axios from 'axios';

const BookmarkPost = ({ post, refetch }) => {
    const { user, user_details } = useContext(UserFullInfoProvider);

    const router = useRouter()
    const navigate = (path) => {
        router.push(path)
        router.prefetch(path)
    }
    // console.log(post_id?.split('-')?.[1])
    // console.log(post)
    const [checkBookmarkPost, setCheckBookmarkPost] = useState(null)
    const userID = user_details?.userID
    const post_id = post?.post_id
    const bookmarkUserID = post?.bookmarkUserID?.includes(userID)

    useEffect(() => {
        if (bookmarkUserID) {
            setCheckBookmarkPost(true)
        }
        else {
            setCheckBookmarkPost(false)
        }
    }, [bookmarkUserID, userID])
    const [bookmarkLoading, setBookmarkLoading] = useState(false)
    const bookmarkPostHandle = async (id) => {
        setBookmarkLoading(true)
        if (user?.user) {
            const bookmarkPost = {
                post_id: id,
                userID: userID,
                bookmark: '',
                date: new Date(),
            }
            checkBookmarkPost ? (bookmarkPost.bookmark = false) : (bookmarkPost.bookmark = true);

            setCheckBookmarkPost(!checkBookmarkPost);
            try {
                const { data } = await axios.put(`/api/bookmark/bookmark-post?email=${user_details?.email}&post_id=${post_id}`, bookmarkPost,
                    {
                        headers: {
                            access_token: sessionStorage.getItem('accessAutoG'),
                            token: localStorage.getItem('token')
                        }
                    });
                console.log(data)
                if (data?.message === 'success') {
                    refetch()
                    setBookmarkLoading(false)
                    if (data?.result?.acknowledged) {
                        refetch()
                        setBookmarkLoading(false)
                    }
                }
                else if (data?.message === 'error') {
                    alert('something is wrong')
                    setBookmarkLoading(false)
                }

                // console.log(data)

            }
            finally {
                setBookmarkLoading(false)

            }
            setBookmarkLoading(false)
        }
        else {
            navigate('/login')
        }

    }
    return (
        <>{
            bookmarkLoading ?

                <button
                    title='Comment'
                    id={'showCommentButton' + post_id}
                    className={(checkBookmarkPost ? 'bg-purple-600 text-white ' : 'btn-outline ') + ' relative btn-primary btn btn-xs  ml-2 h-5 w-8 '}


                >
                    <p className='absolute animate-spin border-b-2 border-r-2 w-4 h-4 rounded-[50%]'>
                    </p>
                    <BookmarkStar size='18' />
                </button>
                :
                <button
                    title='Comment'
                    onClick={() => bookmarkPostHandle(post_id)}
                    id={'showCommentButton' + post_id}
                    className={(checkBookmarkPost ? 'bg-purple-600 text-white ' : 'btn-outline ') + ' btn-primary btn btn-xs  ml-2 h-5 w-8 '}


                >
                    <BookmarkStar size='18' />
                </button>
        }
        </>
    );
};

export default BookmarkPost;