import React, { useEffect, useState } from 'react';
import Comment_textarea from '../Comment/Comment_textarea';

const PostMap = ({ post }) => {
    const { category, image, postBody, postRefMode, post_id, post_title, short_description, sort, tags, thumbnail, time, userID } = post

    const [seeMorePostShow, setSeeMorePostShow] = useState('')


    const handleSeeMorePost = () => {
        setSeeMorePostShow(!seeMorePostShow)
    }
    return (
        <div data-post={post_id}>
            <div className="card w-full bg-base-100 shadow-xl mt-2 rounded-none" data-post={post_id}>
                <div className='flex gap-2 justify-start items-center border-b-[1px] m-3 ' data-post={post_id}>
                    <div className='avatar p-2 mb-1' data-post={post_id}>
                        <div className="w-10 h-10 rounded-full ring ring-inherit ring-offset-base-100 ring-offset-1" data-post={post_id}>
                            <img src="https://api.lorem.space/image/face?hash=3174" alt='' data-post={post_id}/>
                        </div>
                    </div>
                    <div data-post={post_id}>
                        <h2 className="card-title" data-post={post_id}>Shoes!</h2>
                        <h1 className='text-xs' data-post={post_id}>dec 15, 2021 | tech</h1>
                    </div>
                </div>

                <div className='card-body pb-2 pt-3 p-5' data-post={post_id}>
                    <h2 className="card-title" data-post={post_id}>{post_title}</h2>



                    {/* --------------------------------for video body------------------------- */}
                    {
                        postRefMode === 'video' && <>
                            <p className='text-justify mb-2' data-post={post_id}>
                                {
                                    short_description
                                }
                            </p>
                            <div className='mx-auto' id='videoPost' data-post={post_id} >
                                <div className='w-full' dangerouslySetInnerHTML={{ __html: postBody }} data-post={post_id}>

                                </div>
                            </div>
                        </>
                    }

                    {/* --------------------------------for Text/Html body------------------------- */}

                    {
                        postRefMode === 'text' &&
                        <>
                            <p className='text-justify mb-2' data-post={post_id}>
                                {
                                    short_description
                                }
                            </p>
                            <div className='mx-auto' id='videoPost' data-post={post_id}>
                                {
                                    seeMorePostShow &&
                                    <div className='w-full text-justify' dangerouslySetInnerHTML={{ __html: postBody }} data-post={post_id}>

                                    </div>
                                }

                                {
                                    postBody &&
                                    <div className="card-actions justify-end" data-post={post_id}>
                                        <button className="link-primary font-semibold link-hover" onClick={handleSeeMorePost} data-post={post_id}>
                                            See {seeMorePostShow ? 'Less' : 'More'}
                                        </button>
                                    </div>
                                }

                                <div className='mt-4 mb-4' data-post={post_id}>
                                    <figure data-post={post_id}>
                                        <img src={thumbnail} alt="" className='w-full' data-post={post_id}/>
                                    </figure>

                                </div>
                            </div>
                        </>

                    }

                    <div className='flex items-center justify-between border-b-[1px] p-2 border-t-[1px]'>
                        {/* like unlike  */}
                        <div >
                            <button className='btn btn-xs btn-secondary ml-2 btn-outline'>b-1</button>
                            <button className='btn btn-xs btn-secondary ml-2 btn-outline'>b-2</button>
                            <button className='btn btn-xs btn-secondary ml-2 btn-outline'>b-3</button>
                        </div>
                        <div>
                            <button className='btn btn-xs btn-secondary ml-2 btn-outline'>b-2</button>
                            <button className='btn btn-xs btn-secondary ml-2 btn-outline'>b-2</button>
                        </div>
                        <div>
                            <button className='btn btn-xs btn-secondary ml-2 btn-outline'>b-2</button>
                            <button className='btn btn-xs btn-secondary ml-2 btn-outline'>b-2</button>
                        </div>
                    </div>

                    <div>
                        <Comment_textarea />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostMap;