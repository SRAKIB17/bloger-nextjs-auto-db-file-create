import React from 'react';
import CodeHighLight from './SpecificContent/Common/CodeHighLight';

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
        </div>
    );
};

export default DrawerContentList;