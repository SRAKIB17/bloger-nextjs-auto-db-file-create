/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import Default from './post_theme/Default';
import PostWithBody from './post_theme/PostWithBody';

const PostBody = ({ post, refetch }) => {
    const [themePost, setThemePost] = useState("")
    useEffect(() => {
        const theme = localStorage.getItem("postTheme")
        setThemePost(theme)
    }, [])
    return (
        <>
            {
                themePost == 'default' &&
                <Default post={post} refetch={refetch} />
            }
            {
                themePost == 'post_with_body' &&
                <PostWithBody post={post} refetch={refetch} />
            }
        </>
    );
};

export default PostBody;