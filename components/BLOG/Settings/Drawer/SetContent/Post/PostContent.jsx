import React from 'react';
import CodeHighLight from '../../../SettingMenu/Common/CodeHighLight';
import PostSettings from '../../../SettingMenu/Post/PostSettings';

const PostContent = ({ content }) => {
    return (
        <div>
            {
                content == 'Post' &&
                <PostSettings />
            }
        </div>
    );
};

export default PostContent;