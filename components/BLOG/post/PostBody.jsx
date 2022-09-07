/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import Default from './Default';

const PostBody = ({ post, refetch }) => {
    const [themePost, setThemePost] = useState("")
    useEffect(() => {
        const theme = localStorage.getItem("postTheme")
        setThemePost(theme)
    }, []);
    return (
        <>
            {
                (themePost == 'default' || !themePost) &&
                <Default post={post} refetch={refetch} />
            }
        </>
    );
};

export default PostBody;