import React from 'react';

const Post = ({ setContent }) => {
    return (
        <>
            <li>
                <button onClick={()=>setContent('Post')}>
                    Post
                </button>
            </li>
          
        </>

    );
};

export default Post;