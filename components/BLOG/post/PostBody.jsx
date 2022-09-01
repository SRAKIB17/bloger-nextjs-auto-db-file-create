import React, { useEffect } from 'react';
import ReactBtnList from '../hooks/comment_react/react/ReactBtnList';
import Body from './hooks/Body';
import ShortDescription from './hooks/ShortDescription';
import TitleCat from './hooks/TitleCat';

const PostBody = ({ post, refetch }) => {

    const { _id, comments, category, image, postBodyCss, postBodyJs, postBody, postRefMode, post_id, post_title, short_description, thumbnail, time, userID } = post


    useEffect(() => {
        window.onclick = () => {
            try {
                const iframes = document.getElementsByTagName('iframe');
                for (const iframe of iframes) {
                    iframe.style.height = iframe.contentWindow.document.documentElement.scrollHeight + 'px'
                }
            }
            catch {

            }
        }
    }, [])
    
    return (
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
                <Body post={post} />
            </div>
            <div>
                <ReactBtnList post={post} refetch={refetch} />
            </div>
        </div>
    );
};

export default PostBody;