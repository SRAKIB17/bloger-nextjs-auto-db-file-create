import React from 'react';
import { Delete, Writing } from '../../../../ReactRSIcon';
import DeleteModal from './DeleteModal';

const ForUserAdminOption = ({ setDeletePost, post }) => {
    const { post_id, userID, post_title } = post

    return (
        <>
            {
                // (isAdmin?.admin || (user?.user && user_details?.userID === post_id?.split('-')?.[1])) &&
                <>
                    <li
                    // onClick={() => setEditPost(post_id)}
                    >
                        <button>
                            <Writing size='20' /> Edit Post
                        </button>

                    </li>

                    <li
                    // onClick={() => setDeletePost({ post_id, userID, post_title })}
                    >
                        <label
                            htmlFor="DeleteModal"
                            onClick={() => setDeletePost({ post_id, userID, post_title })}
                        >
                            <Delete size='20' />Delete Post
                        </label>
                    </li>
                </>
            }
        </>
    );
};

export default ForUserAdminOption;