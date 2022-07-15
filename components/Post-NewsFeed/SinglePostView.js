/* eslint-disable @next/next/no-img-element */
import React, { useContext, useEffect, useId, useState } from 'react';
import Comment_textarea from '../Comment/Comment_textarea';
import { useRouter, withRouter } from 'next/router';
import styles from './PostMap.module.css'
import EditDeleteComponentMenu from './EditPostByUserAndAdmin/EditDeleteComponentMenu';
import useAdminCheck from '../hooks/checkUser/useAdminCheck';
import maleAvatar from '../../public/maleAvatar.png'
import femaleAvatar from '../../public/femaleAvatar.png'
import { UserFullInfoProvider } from '../../pages/_app';

const PostMap = ({ post, refetch }) => {
    const { _id, category, image, postBodyCss, postBodyJs, postBody, postRefMode, post_title, short_description, sort, thumbnail, time, userID } = post
    const router = useRouter();
    const { post_id } = router.query;
    const { admin } = useAdminCheck();
    const { user, user_details, isLoading } = useContext(UserFullInfoProvider)

    const navigate = (path) => {
        router.push(path)
        router.prefetch(path)
        refetch()
    }
    const profileNavigate = (path) => {
        router.push(path)
        router.prefetch(path)
    }



    // -----------------------------------------------for iframe -----------------------------------------


    const onloadIframeHeightStylesHandle = (e) => {

        try {
            const iframe = document.getElementById('PreviewFullStory')
            iframe.contentDocument.head.append(link);



            let link = document.createElement("link");
            link.href = "/api/styleIframe.css";
            link.rel = "stylesheet";
            link.type = "text/css";
            iframe.contentDocument.head.append(link);

            let darkStyle = document.createElement("link");
            const darkMode = window.localStorage.getItem('dark')
            if (darkMode) {
                darkStyle.href = "/api/styleIframe.css?dark=true";
            }
            else {
                darkStyle.href = "/api/styleIframe.css?dark=false";
            }
            darkStyle.rel = "stylesheet";
            darkStyle.type = "text/css";
            iframe.contentDocument.head.append(darkStyle);

            //************************************ */ for video iframe embed object ********************************
            iframe.height = iframe.contentWindow.document.documentElement.scrollHeight + 'px'
            let videosCssLink = document.createElement("link");
            videosCssLink.href = "/api/styleIframe.css?video=video";
            videosCssLink.rel = "stylesheet";
            videosCssLink.type = "text/css";
            iframe.contentDocument.head.append(videosCssLink);
            showCommentHandle(post_id)
            const count = 0;
            const click = setInterval(() => {
                iframe.style.height = iframe.contentWindow.document.documentElement.scrollHeight + 'px';
                if (count === 6) {
                    clearTimeout(click)
                }
                count++
            }, 100);
        }
        catch {

        }
    }

    //************************************************************************************ */
    //********************FOR COMMENT AUTO SHOW AND SHOW********************************** */
    //************************************************************************************ */
    const showCommentHandle = (id) => {
        try {

            const showComment = document.getElementById('commentShow' + id)
            const commentForm = document.getElementById('commentForm' + id)
            const showCommentButton = document.getElementById('showCommentButton' + id)

            if (showComment.offsetHeight <= 2) {
                commentForm.style.height = '100%'
                try {
                    commentForm.childNodes[0].childNodes[0].style.borderTopWidth = '1px'
                }
                catch {

                }
                showComment.style.height = '500px'
                document.getElementById('commentTextArea' + id).focus()
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
            <div className=" card w-full bg-base-100 shadow-md md:rounded-md mt-2 rounded-none h-[100vh] overflow-auto hideScrollBar " id={'postMap' + post_id}>
                {/* -------------------------------------- for user configure --------------------------------------------- */}
                <div className='flex justify-between  border-b-[1px] m-3 items-center'>
                    <div className='flex gap-2 justify-start items-center '>
                        <div className='avatar p-2 mb-1'>
                            {/* --------------------------------------for profile avatar--------------------------------------- */}
                            <div
                                onClick={() => profileNavigate(`/profile/${userID}`)}
                                className="w-10 cursor-pointer h-10 rounded-full ring ring-inherit ring-offset-base-100 ring-offset-1"
                            >
                                <img
                                    src={femaleAvatar?.src}
                                    alt=''
                                />
                            </div>
                        </div>
                        <div>
                            <h2
                                onClick={() => profileNavigate(`/profile/${userID}`)}
                                className="card-title cursor-pointer"
                            >
                                Shoes
                            </h2>
                            <h1 className='text-xs'>
                                {
                                    time
                                }
                                <b> | </b>
                                <button className='link-primary link-hover ' onClick={() => navigate(`?cat=${category}`)}>
                                    {
                                        category
                                    }
                                </button>
                            </h1>
                        </div>
                    </div>

                    {
                        // post_id?.split('-')[0] === userID 
                        (admin?.admin && user?.user) &&
                        <EditDeleteComponentMenu post_id={post_id} />
                    }
                </div>
                {/* --------------------------------------------------------------------------------------------------- */}
                <div className='card-body pb-2 pt-3 p-5'>
                    <h2 className="card-title">{post_title}</h2>

                    <div className='mx-auto' id='videoPost'>


                        {/* ---------post body ----------------- */}
                        <div className={styles.postMap + ' w-full h-fit transition-all text-justify'} id={'postBody' + post_id} >

                            <div>
                                {
                                    short_description?.slice(0, 1000)
                                }
                            </div>

                            <iframe
                                onLoad={onloadIframeHeightStylesHandle}
                                src={'/api/preview/' + post_id}
                                id={'PreviewFullStory'}
                                frameBorder="0"
                                scrolling="no"
                                className={styles.iframeAutoHightTransition + '  w-full'}
                            >
                            </iframe>
                        </div>

                        {/* ----thumbnail------------ */}
                        {
                            (postRefMode === 'text' && thumbnail) &&
                            <div className='mt-4 mb-4'>
                                <figure>
                                    <img src={thumbnail} alt="" className='w-full h-[200px] lg:h-[240px] rounded-md' />
                                </figure>
                            </div>
                        }
                    </div>

                    <div className='relative bg-base-100 '>
                        <Comment_textarea post_id={post_id} />
                    </div>
                </div>
            </div>
        </div >
    );
};

export default PostMap;
