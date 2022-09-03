import React from 'react';
import CodeHighLight from '../../../SettingMenu/Common/CodeHighLight';

const CommonContent = ({ content }) => {
    return (
        <div>
            {
                content == 'Code Highlight' &&
                <CodeHighLight/>
            }
        </div>
    );
};

export default CommonContent;