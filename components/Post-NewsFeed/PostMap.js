/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useId, useState } from 'react';
import Comment_textarea from '../Comment/Comment_textarea';
import { useRouter, withRouter } from 'next/router';
import styles from './PostMap.module.css'
import EditDeleteComponentMenu from './EditPostByUserAndAdmin/EditDeleteComponentMenu';
import useAdminCheck from '../hooks/checkUser/useAdminCheck';
import useUserCheck from '../hooks/checkUser/useUserCheck';

const PostMap = ({ post, refetch }) => {
    const { _id, category, image, postBody, postRefMode, post_id, post_title, short_description, sort, thumbnail, time, userID } = post
    const router = useRouter();

    const { admin } = useAdminCheck();
    const { user } = useUserCheck()
    console.log(admin.admin)
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

    // -----------------------------------------------for iframe -----------------------------------------

    const [fullIframeShow, setFullIframeShow] = useState(false);

    const heightHandle = async (id) => {
        try {
            const iframe = document.getElementById('previewIframeHeight' + id);
            // console.log(iframe.contentDocument.documentElement.scrollHeight)
            const darkMode = window.localStorage.getItem('dark')

            let link = document.createElement("link");
            link.href = "/api/styleIframe.css";      /**** your CSS file ****/
            // link.href = "/_next/static/css/73d1bb86bcd5bddc.css";      /**** your CSS file ****/
            link.rel = "stylesheet";
            link.type = "text/css";

            /**** 0 is an index of your iframe ****/
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
                    if (count === 3) {
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
    const onloadIframeHeightStylesHandle = (e) => {
        let link = document.createElement("link");
        link.href = "/api/styleIframe.css";
        link.rel = "stylesheet";
        link.type = "text/css";
        e.target.contentDocument.head.append(link);

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
        e.target.contentDocument.head.append(darkStyle);
    }
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
                                <img
                                    src="https://api.lorem.space/image/face?hash=3174"
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
                                <button className='link-primary link-hover ' onClick={() => navigate(`?cat=${category?.name}`)}>
                                    {
                                        category?.name
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
                                    height='200'
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

                            <div className='mx-auto' id='videoPost'>


                                {/* ---------post body ----------------- */}
                                <div className={styles.postMap + ' w-full h-fit transition-all text-justify'} id={'postBody' + post_id} >

                                    <div>
                                        {
                                            short_description?.slice(0, 1000)
                                        }
                                    </div>
                                    {/* <div
                                        dangerouslySetInnerHTML={{ __html: short_description }}

                                    >
                                    </div> */}
                                    <iframe
                                        onLoad={onloadIframeHeightStylesHandle}
                                        src='/api/preview'
                                        srcDoc={postBody}
                                        id={'previewIframeHeight' + post_id}
                                        frameBorder="0"
                                        scrolling="no"
                                        className={styles.iframeAutoHightTransition + '  w-full'}
                                    >
                                    </iframe>
                                </div>

                                {/* ------------see more -------------------- */}

                                <div className="card-actions justify-end">
                                    <button className="link-primary font-semibold link-hover text-xs" onClick={() => heightHandle(post_id)}>
                                        See {fullIframeShow ? 'Less' : 'More'}
                                    </button>
                                </div>


                                {/* ----thumbnail------------ */}
                                {
                                    thumbnail &&
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