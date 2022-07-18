/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useId, useState } from 'react';
import Comment_textarea from '../Comment/Comment_textarea';
import { useRouter, withRouter } from 'next/router';
import styles from './PostMap.module.css'
import EditDeleteComponentMenu from './EditPostByUserAndAdmin/EditDeleteComponentMenu';
import maleAvatar from '../../public/maleAvatar.png'
import femaleAvatar from '../../public/femaleAvatar.png'
import { useQuery } from 'react-query'
import axios from 'axios';
const PostMap = ({ post, refetch }) => {
    const { _id, category, image, postBodyCss, postBodyJs, postBody, postRefMode, post_id, post_title, short_description, sort, thumbnail, time, userID } = post
    const router = useRouter();

    const navigate = (path) => {
        router.push(path)
        router.prefetch(path)
        refetch()
    }
    const profileNavigate = (path) => {
        router.push(path)
        router.prefetch(path)
    }


    const [seeMorePostShow, setSeeMorePostShow] = useState(false)
    // --------------------------------------------- for video -------------------------------------------------//
    const [shortDescriptionVideo, setShortDescriptionVideo] = useState('')
    useEffect(() => {
        setShortDescriptionVideo(short_description?.slice(0, 100))
    }, [post, short_description])

    const moreShortDescriptionVideoHandle = () => {
        setSeeMorePostShow(!seeMorePostShow)
        if (shortDescriptionVideo.length <= 100) {
            setShortDescriptionVideo(short_description)
        }
        else {
            setShortDescriptionVideo(short_description?.slice(0, 100))
        }
    }
    const videoPostIframeAutoOnloadHandle = (e) => {
        e.target.height = e.target.contentWindow.document.documentElement.scrollHeight + 'px'
        let link = document.createElement("link");
        link.href = "/api/styleIframe.css?video=video";
        link.rel = "stylesheet";
        link.type = "text/css";
        e.target.contentDocument.head.append(link);
    }

    //********************************************************************************* */
    // FOR MORE INFO /FULL POST SHOW BY ONCLICK AND.
    //********************************************************************************** */
    const [fullIframeShow, setFullIframeShow] = useState(false);
    const heightHandle = async (id) => {

        try {
            const iframe = document.getElementById('previewIframeHeight' + id);
            // console.log(iframe.contentDocument.documentElement.scrollHeight)
            const darkMode = window.localStorage.getItem('dark')

            let link = document.createElement("link");
            link.href = "/api/styleIframe.css";
            link.rel = "stylesheet";
            link.type = "text/css";
            let doc = await iframe.contentDocument;

            if (darkMode) {
                doc.body.style.color = '#A9C5EF'
            }
            else {
                doc.body.style.color = ''
            }

            if (fullIframeShow) {
                iframe.style.height = 0 + 'px';
                setFullIframeShow(false)
            }
            else {
                let count = 0
                const showIframe = setInterval(() => {
                    iframe.contentDocument.head.append(link);
                    iframe.style.height = iframe.contentWindow.document.documentElement.scrollHeight + 'px';
                    if (count === 6) {
                        clearInterval(showIframe)
                    }
                    count++
                }, 100);
                setFullIframeShow(true)
            }

        }
        catch {

        }

    }
    //****************************************************************************************** */
    //*WHEN IFRAME LOAD / PAGE RELOAD THEN AUTO MATIC THIS FUNCTION RUN AND HEADER ADD CSS STYLES
    //*1. VIDEO, DARK, LIGHT, (API/LINK/ BY POST ID)
    //****************************************************************************************** */
    const onloadIframeHeightStylesHandle = (e) => {
        let link = document.createElement("link");
        link.href = "/api/styleIframe.css";
        link.rel = "stylesheet";
        link.type = "text/css";
        e.target.contentDocument.head.append(link);


        //****************FOR JS COPY CODE ************* */
        const script = document.createElement("script");
        script.src = "/api/styleIframe.js?js=code-copy";
        script.async = true;
        console.log(script)
        e.target.contentDocument.head.append(script);
        e.target.contentDocument.body.append(script);

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
        let count = 0
        const iframe = e.target

        const showIframe = setInterval(() => {
            try {
                iframe.contentDocument.head.append(link);
            }
            catch {

            }
            if (count === 6) {
                try {
                    iframe.style.height = iframe.contentWindow.document.documentElement.scrollHeight + 'px';
                    iframe.style.display = 'none'
                }
                catch {

                }
                clearInterval(showIframe)
            }
            count++
        }, 100);
        e.target.contentDocument.head.append(darkStyle);
    }

    //************************************************************************************ */
    //********************FOR COMMENT AUTO SHOW AND SHOW********************************** */
    //************************************************************************************ */
    const showCommentHandle = (id) => {
        try {

            const showComment = document.getElementById('commentShow' + id)
            const commentForm = document.getElementById('commentForm' + id)
            const showCommentButton = document.getElementById('showCommentButton' + id)

            if (showComment.offsetHeight <= 2 && !fullIframeShow) {
                commentForm.style.height = '100%'
                try {
                    commentForm.childNodes[0].childNodes[0].style.borderTopWidth = '1px'
                }
                catch {

                }
                showComment.style.height = '500px'
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
    useEffect(() => {
        window.onresize = (e) => {
            const iframes = document.getElementsByTagName('iframe')
            for (const iframe of iframes) {
                try {
                    iframe.style.height = iframe.contentWindow.document.documentElement.scrollHeight + 'px';
                }
                catch {

                }
            }
        }
    }, [])
    const iframePostFullBody = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="/api/styleIframe.css" rel="stylesheet" type="text/css">
        <link href="/api/styleIframe.css?video=video" rel="stylesheet" type="text/css">
        <style>
        ${postBodyCss}
        </style>
    </head>
    <body>
        ${postBody}
        <script>
            ${postBodyJs}
        </script>
        <script src="/api/styleIframe.js?js=code-copy"></script>
    </body>
    </html>
    `
    // // postBody: textareaRef.current.value,
    // // postBodyCss: cssTextareaRef.current.value,
    // // postBodyJs: jsTextareaRef.current.value,

    const showIframeDisplayHandle = (id) => {
        const iframe = document.getElementById('previewIframeHeight' + id);
        setFullIframeShow(!fullIframeShow)
        showCommentHandle(id)
        if (fullIframeShow) {
            iframe.style.display = 'none';
        }
        else {
            iframe.style.display = 'block';
        }


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
    }

    const unloadIframeHandle = () => {
        alert('54543')
    }


    const userInfo = useQuery(['public_profile', userID], () => axios.get(`/api/public_user_details/${userID}`,
        {
            headers: { access_token: sessionStorage.getItem('accessAutoG') }
        }));
    const user_details = userInfo?.data?.data?.user_details;
    return (
        <div>
            <div className=" card w-full bg-base-100 shadow-md md:rounded-md mt-2 rounded-none" id={'postMap' + post_id}>
                {/* -------------------------------------- for user configure --------------------------------------------- */}
                <div className='flex justify-between  border-b-[1px] m-3 items-center'>
                    <div className='flex gap-2 justify-start items-center '>
                        <div className='avatar p-2 mb-1'>
                            {/* --------------------------------------for profile avatar--------------------------------------- */}
                            <div
                                onClick={() => profileNavigate(`/profile/${userID}`)}
                                className="w-10 cursor-pointer h-10 rounded-full ring ring-inherit ring-offset-base-100 ring-offset-1"
                            >
                                {/* **********PROFILE AVATAR */}
                                {
                                    (user_details?.profile == '' || !user_details?.profile) ?
                                        <img
                                            src={user_details?.gender == 'Female' ? femaleAvatar.src : maleAvatar?.src}
                                            alt=''
                                            className='w-full bg-base-100'
                                        />
                                        :
                                        <img
                                            src={user_details?.profile}
                                            alt=''
                                        />
                                }
                            </div>
                        </div>
                        <div>
                            <h2
                                onClick={() => profileNavigate(`/profile/${userID}`)}
                                className="card-title cursor-pointer text-xl mb-1"
                            >
                                {
                                    user_details?.name || 'User'
                                }
                            </h2>
                            <h1 className='text-xs'>
                                {
                                    time
                                }
                                <b> | </b>
                                <button className='link-primary link-hover ' onClick={() => navigate(`? cat = ${category} `)}>
                                    {
                                        category
                                    }
                                </button>
                            </h1>
                        </div>
                    </div>

                    {
                        <EditDeleteComponentMenu post={post} />
                    }
                </div>
                {/* --------------------------------------------------------------------------------------------------- */}
                <div className='card-body pb-2 pt-3 p-5'>
                    <h2 className="card-title">{post_title}</h2>

                    {/* ---------------------------------------for video body--------------------------------- */}
                    {
                        postRefMode === 'video' && <>
                            <div className='text-justify mb-2'>
                                {
                                    shortDescriptionVideo
                                }
                                {
                                    shortDescriptionVideo?.length <= 100 && <>.....</>
                                }
                                {/* -------------see more short description----------- */}
                                {
                                    short_description?.length >= 100 &&
                                    <div className="card-actions justify-end text-xs">
                                        <button className="link-primary font-semibold link-hover" onClick={moreShortDescriptionVideoHandle}>
                                            See {seeMorePostShow ? 'Less' : 'More'}
                                        </button>
                                    </div>
                                }
                            </div>

                            {/*----------------------------- for video code --------------------- */}
                            <div className='mx-auto' id='videoPost' >

                                <iframe
                                    onLoad={videoPostIframeAutoOnloadHandle}
                                    src='/api/preview'
                                    srcDoc={postBody}
                                    id={'previewIframeHeight' + post_id}
                                    frameBorder="0"
                                    scrolling="no"
                                    height='250'
                                    className={' w-full'}
                                >
                                </iframe>
                            </div>
                        </>
                    }
                    {/* ------------------------------------------------------------------------------------------------------------- */}
                    {/* -----------------------------------------------for Text/Html body----------------------------------------- */}

                    {
                        postRefMode === 'text' &&
                        <>

                            <div className='mx-auto' id={'textPost' + post_id}>


                                {/* ---------post body ----------------- */}
                                <div className={styles.postMap + ' w-full h-fit transition-all text-justify'} id={'postBody' + post_id} >
                                    <div>
                                        {
                                            short_description?.slice(0, 1000)
                                        }
                                    </div>
                                    {
                                        fullIframeShow &&
                                        <div className="card-actions justify-end">
                                            <button className="link-primary font-semibold link-hover text-xs" onClick={() => showIframeDisplayHandle(post_id)}>
                                                See Less
                                            </button>
                                        </div>
                                    }

                                    <iframe
                                        // onUnload={unloadIframeHandle}
                                        srcDoc={iframePostFullBody}
                                        onLoad={onloadIframeHeightStylesHandle}
                                        src={'/api/preview/' + post_id}
                                        id={'previewIframeHeight' + post_id}
                                        frameBorder="0"
                                        scrolling="no"
                                        className={'  w-full'}
                                    >
                                    </iframe>
                                </div>

                                {/* ------------see more -------------------- */}
                                {/* 
                                <div className="card-actions justify-end">
                                    <button className="link-primary font-semibold link-hover text-xs" onClick={() => profileNavigate('/story/' + post_id)}>
                                        See More
                                    </button>
                                </div> */}

                                <div className="card-actions justify-end">
                                    <button className="link-primary font-semibold link-hover text-xs" onClick={() => showIframeDisplayHandle(post_id)}>
                                        See {fullIframeShow ? 'Less' : 'More'}
                                    </button>
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
                        </>

                    }

                    <div className='relative bg-base-100'>
                        <Comment_textarea post_id={post_id} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostMap;

// <h2
//                                 onClick={() => profileNavigate(`/story/${post_id}`)}
//                                 className="card-title text-xl mb-1 cursor-pointer"
//                             >
//                                 {post_title}
//                             </h2>
//                             {/* </h2> */}
//                             <h1 className='text-xs font-extralight'>
//                                 <button
//                                     className='link-primary link-hover '
//                                     onClick={() => profileNavigate(`/profile/${userID}`)}
//                                 >
//                                     {
//                                         user_details?.name || 'loading'
//                                     }
//                                 </button>
//                                 <b> | </b>
//                                 {
//                                     time
//                                 }
//                                 <b> | </b>
//                                 <button className='link-primary link-hover ' onClick={() => navigate(`? cat = ${category} `)}>
//                                     {
//                                         category
//                                     }
//                                 </button>
//                             </h1>