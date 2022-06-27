import React, { useEffect, useState } from 'react';
import Comment_textarea from '../Comment/Comment_textarea';
import { useRouter, withRouter } from 'next/router';
import LikeLoveFavorite from '../Comment/LikeLoveFevorite/LikeLoveFevorite';

const PostMap = ({ post }) => {
    const { category, image, postBody, postRefMode, post_id, post_title, short_description, sort, tags, thumbnail, time, userID } = post
    const router = useRouter();


    const navigate = (path) => {
        router.push(path)
        router.prefetch(path)
    }


    const [seeMorePostShow, setSeeMorePostShow] = useState(false)
    // -------------------------------------for video -------------------------------------------------//
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
    // -----------------------------for text or html -----------------------------------------------//
    const [textHtml, setTextHtml] = useState('')
    useEffect(() => {
        setTextHtml(postBody?.slice(0, 500));
    }, [postBody])

    const handleSeeMorePost = () => {
        setSeeMorePostShow(!seeMorePostShow)
        if (textHtml.length <= 500) {
            setTextHtml(postBody)
        }
        else {
            setTextHtml(postBody?.slice(0, 500))
        }
    }

    const handleLikePost = () => {

    }
    return (
        <div data-post={post_id}>
            <div className="card w-full bg-base-100 shadow-md md:rounded-md mt-2 rounded-none" data-post={post_id}>
                <div className='flex gap-2 justify-start items-center border-b-[1px] m-3 ' data-post={post_id}>
                    <div className='avatar p-2 mb-1' data-post={post_id}>
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
                            <button className='link-primary link-hover' onClick={() => navigate(`/story?cat=${category}`)}>
                                {
                                    category
                                }
                            </button>
                        </h1>
                    </div>
                </div>

                <div className='card-body pb-2 pt-3 p-5' data-post={post_id}>
                    <h2 className="card-title" data-post={post_id}>{post_title}</h2>




                    {/* ---------------------------------------for video body--------------------------------- */}
                    {
                        postRefMode === 'video' && <>
                            <div onClick={() => { short_description?.length >= 100 && moreShortDescriptionVideoHandle() }} className='text-justify mb-2' data-post={post_id}>
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
                            {/* <p className='text-justify mb-2' data-post={post_id}>
                                {
                                    postBody
                                }
                            </p> */}
                            <div className='mx-auto' id='videoPost' data-post={post_id}>

                                {/* ----thumbnail------------ */}
                                {
                                    thumbnail &&
                                    <div className='mt-4 mb-4' data-post={post_id}>
                                        <figure data-post={post_id}>
                                            <img src={thumbnail} alt="" className='w-full rounded-md' data-post={post_id} />
                                        </figure>z
                                    </div>
                                }
                                {/* ---------post body ----------------- */}
                                <div className='w-full text-justify' onClick={() => { postBody?.length >= 500 && handleSeeMorePost() }} dangerouslySetInnerHTML={{ __html: textHtml }} data-post={post_id}>
                                </div>

                                {/* ------------see more -------------------- */}
                                {
                                    postBody?.length >= 500 &&
                                    <div className="card-actions justify-end" data-post={post_id}>
                                        <button className="link-primary font-semibold link-hover" onClick={handleSeeMorePost} data-post={post_id}>
                                            See {seeMorePostShow ? 'Less' : 'More'}
                                        </button>
                                    </div>
                                }
                            </div>
                        </>

                    }

                    <div className='relative'>
                        <Comment_textarea post_id={post_id} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostMap;