import React from 'react';
import { Delete, Writing } from '../../../../ReactRSIcon';

const ForUserAdminOption = () => {
    return (
        <>
            {
                // (isAdmin?.admin || (user?.user && user_details?.userID === post_id?.split('-')?.[1])) &&
                <>
                    <li
                    // onClick={() => setEditPost(post_id)}
                    >
                        <a>
                            <Writing size='20' /> Edit Post
                        </a>
                    </li>

                    <li
                    // onClick={() => setDeletePost({ post_id, userID, post_title })}
                    >
                        <a>
                            <Delete size='20' />Delete Post
                        </a>
                    </li>
                </>
            }
        </>
    );
};

export default ForUserAdminOption;