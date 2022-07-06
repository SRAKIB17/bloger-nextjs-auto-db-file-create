import React, { useEffect, useState } from 'react';
import Comment_textarea from '../Comment/Comment_textarea';
import { useRouter, withRouter } from 'next/router';
import styles from './PostMap.module.css'
import EditDeleteComponentMenu from './EditPostByUserAndAdmin/EditDeleteComponentMenu';

const PostMap = ({ post, refetch }) => {
    const { _id, category, image, postBody, postRefMode, post_id, post_title, short_description, sort, thumbnail, time, userID } = post
    const router = useRouter();


    const navigate = (path) => {
        router.push(path)
        router.prefetch(path)
        refetch()
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


    // -----------------------------------------------for iframe -----------------------------------------

    const [fullIframeShow, setFullIframeShow] = useState(false);
    useEffect(() => {
        const darkMode = window.localStorage.getItem('dark')

    }, [])
    const heightHandle = (id) => {
        try {
            const iframe = document.getElementById('previewIframeHeight' + id);
            // console.log(iframe.contentDocument.documentElement.scrollHeight)
            const darkMode = window.localStorage.getItem('dark')

            let link = document.createElement("link");
            link.href = "/_next/static/css/73d1bb86bcd5bddc.css";      /**** your CSS file ****/
            link.rel = "stylesheet";
            link.type = "text/css";
            
            /**** 0 is an index of your iframe ****/
            let doc = iframe.contentDocument;
            if (darkMode) {
                doc.body.style.color = '#A9C5EF'

            }
            else {
                doc.body.style.color = ''
            }
            
            iframe.contentDocument.head.append(link);

            // window.onload = function() {
            //     let frameElement = document.getElementById("myiFrame");
            //     let doc = frameElement.contentDocument;
            //     doc.body.innerHTML = doc.body.innerHTML + '<style>.bar {width:45%;}</style>';
            //   }
            // window.onload = function() {
            //     let link = document.createElement("link");
            //     link.href = "style.css";      /**** your CSS file ****/ 
            //     link.rel = "stylesheet"; 
            //     link.type = "text/css"; 
            //     frames[0].document.head.appendChild(link); /**** 0 is an index of your iframe ****/ 
            //   }
            if (fullIframeShow) {
                iframe.style.height = 0 + 'px';
                setFullIframeShow(false)
            }
            else {
                iframe.style.height = iframe.contentWindow.document.documentElement.scrollHeight + 'px';
                setFullIframeShow(true)
            }
        }
        catch {

        }

    }
    return (
        <div data-post={post_id}>
            <div className=" card w-full bg-base-100 shadow-md md:rounded-md mt-2 rounded-none" data-post={post_id}>
                {/* -------------------------------------- for user configure --------------------------------------------- */}
                <div className='flex justify-between  border-b-[1px] m-3 items-center'>
                    <div className='flex gap-2 justify-start items-center ' data-post={post_id}>
                        <div className='avatar p-2 mb-1' data-post={post_id}>
                            {/* --------------------------------------for profile avatar--------------------------------------- */}
                            <div className="w-10 h-10 rounded-full ring ring-inherit ring-offset-base-100 ring-offset-1" data-post={post_id}>
                                <img src="https://api.lorem.space/image/face?hash=3174" alt='' data-post={post_id} />
                            </div>
                        </div>
                        <div data-post={post_id}>
                            <h2 className="card-title" data-post={post_id}>Shoes!</h2>
                            <h1 className='text-xs' data-post={post_id}>
                                {
                                    time
                                }
                                <b> | </b>
                                <button className='link-primary link-hover' onClick={() => navigate(`?cat=${category?.name}`)}>
                                    {
                                        category?.name
                                    }
                                </button>
                            </h1>
                        </div>
                    </div>

                    {
                        // post_id?.split('-')[0] === userID &&
                        <EditDeleteComponentMenu post_id={post_id} />
                    }
                </div>
                {/* --------------------------------------------------------------------------------------------------- */}
                <div className='card-body pb-2 pt-3 p-5' data-post={post_id}>
                    <h2 className="card-title" data-post={post_id}>{post_title}</h2>

                    {/* ---------------------------------------for video body--------------------------------- */}
                    {
                        postRefMode === 'video' && <>
                            <div className='text-justify mb-2' data-post={post_id}>
                                {
                                    shortDescriptionVideo
                                }
                                {
                                    shortDescriptionVideo?.length <= 100 && <>.....</>
                                }
                                {/* -------------see more short description----------- */}
                                {
                                    short_description?.length >= 100 &&
                                    <div className="card-actions justify-end" data-post={post_id}>
                                        <button className="link-primary font-semibold link-hover" onClick={moreShortDescriptionVideoHandle} data-post={post_id}>
                                            See {seeMorePostShow ? 'Less' : 'More'}
                                        </button>
                                    </div>
                                }
                            </div>

                            {/*----------------------------- for video code --------------------- */}
                            <div className='mx-auto' id='videoPost' data-post={post_id} >
                                <div className='w-full' dangerouslySetInnerHTML={{ __html: postBody }} data-post={post_id}>

                                </div>
                            </div>
                        </>
                    }
                    {/* ------------------------------------------------------------------------------------------------------------- */}
                    {/* -----------------------------------------------for Text/Html body----------------------------------------- */}

                    {
                        postRefMode === 'text' &&
                        <>

                            <div className='mx-auto' id='videoPost' data-post={post_id}>


                                {/* ---------post body ----------------- */}
                                <div className={styles.postMap + ' w-full h-fit transition-all text-justify'} id={'postBody' + post_id} >

                                    <div
                                        dangerouslySetInnerHTML={{ __html: short_description }}
                                        data-post={post_id}
                                    >
                                    </div>
                                    <iframe
                                        src='/api/preview'
                                        srcDoc={postBody}
                                        id={'previewIframeHeight' + post_id}
                                        frameBorder="0"
                                        scrolling="no"
                                        className={styles.iframeAutoHightTransition + 'text-white w-full h-0'}
                                    >
                                    </iframe>
                                    {/* <iframe
                                        id={'previewIframeHeight' + post_id}
                                        height='0'
                                        scrolling="no"
                                        src={"/api/preview/" + post_id}
                                        frameBorder="0"
                                        className={styles.iframeAutoHightTransition + 'text-white w-full'} >
                                    </iframe> */}
                                </div>

                                {/* ------------see more -------------------- */}

                                <div className="card-actions justify-end" data-post={post_id}>
                                    <button className="link-primary font-semibold link-hover text-xs" onClick={() => heightHandle(post_id)} data-post={post_id}>
                                        See {fullIframeShow ? 'Less' : 'More'}
                                    </button>
                                </div>


                                {/* ----thumbnail------------ */}
                                {
                                    thumbnail &&
                                    <div className='mt-4 mb-4' data-post={post_id}>
                                        <figure data-post={post_id}>
                                            <img src={thumbnail} alt="" className='w-full h-[255px] lg:h-[270px] rounded-md' data-post={post_id} />
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