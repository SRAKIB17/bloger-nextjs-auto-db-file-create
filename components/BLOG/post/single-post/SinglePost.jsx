import React from 'react';
import SinglePostReactBtnListCommentForm from '../../hooks/comment_react/SinglePostReactBtnListCommentForm';
import ShortDescription from '../hooks/ShortDescription';
import TitleCat from '../hooks/TitleCat';
import SinglePostBody from './SinglePostBody';



const SinglePost = ({ post, refetch }) => {
    const { _id, comments, category, image, postBodyCss, postBodyJs, postBody, postRefMode, post_id, post_title, short_description, thumbnail, time, userID } = post


    return (
        <div>
            <div className=' shadowEachPost p-4 sm:p-5 bg-gray-50' >
                <div>
                    <TitleCat
                        post={post}
                    />
                </div>
                <div>
                    <ShortDescription
                        postRefMode={postRefMode}
                        short_description={short_description}
                        thumbnail={thumbnail}
                    />
                </div>
                <div>
                    <SinglePostBody post={post} />
                </div>
                <div>
                    <SinglePostReactBtnListCommentForm post={post} refetch={refetch} />
                </div>
            </div>
        </div>
    );
};

export default SinglePost;