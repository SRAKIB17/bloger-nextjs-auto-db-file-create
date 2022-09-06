import React from 'react';
import CodeHighLight from './SpecificContent/Common/CodeHighLight';
import PostTheme from './SpecificContent/Post/PostTheme';

const DrawerContentList = ({ content }) => {
    console.log(content)
    return (
        <div>
            {/* *******FOR COMMON ***** */}
            <div>
                {
                    content == 'Code Highlight' &&
                    <CodeHighLight />
                }
            </div>

            {/* ************FOR POST MENU*********** */}

            <div>
                {
                    content == 'Post Theme' &&
                    <PostTheme />
                }
            </div>
        </div>
    );
};

export default DrawerContentList;