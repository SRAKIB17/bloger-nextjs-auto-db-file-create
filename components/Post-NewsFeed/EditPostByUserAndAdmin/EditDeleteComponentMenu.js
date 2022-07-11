import React, { useState } from 'react';
import { Delete, Writing } from '../../ReactRSIcon/index'
import DeletePost from '../DeletePost/DeletePost';
import styles from '../PostMap.module.css'
import EditPostFromTextArea from './EditPostFrom.TextArea';
const EditDeleteComponentMenu = ({ post_id }) => {
    const openEditPostFromTextArea = (id) => {
        try {
            document.getElementById("EditPostFromTextArea" + id).style.width = "100%";
        }
        catch {

        }
    }

    const threeDotEditHandle = (id, event) => {
        try {
            const editPostBYuser = document.getElementById('editPostBYuser' + id);
            if (event.type === 'mouseenter') {
                editPostBYuser.style.left = '-125px'
            }
            else if (event.type === 'mouseleave') {
                editPostBYuser.style.left = '200px'
            }
        }
        catch {

        }
    }
    const [deletePost, setDeletePost] = useState(null)
    return (
        <div>
            <div
                className='absolute right-0 top-[18px]'
                onMouseLeave={(event) => threeDotEditHandle(post_id, event)}
                onMouseEnter={(event) => threeDotEditHandle(post_id, event)}
            >
                <button
                    className='text-2xl font-extrabold mr-6 link-primary flex'
                >
                    ...
                </button>
                {/* ---------------for edit post --------------- */}
                <div
                    className={styles.EditPost + ' absolute z-20 left-[-50px] top-[30px] '}
                    id={'editPostBYuser' + post_id}
                >
                    <ul className='flex w-40 bg-base-300 p-4 rounded-md shadow-md flex-col gap-1'>
                        <li onClick={() => openEditPostFromTextArea(post_id)} className='text-left btn btn-outline btn-primary rounded-md btn-xs'>
                            <Writing size='17' /> Edit Post
                        </li>

                        <li className=' btn btn-outline btn-primary text-left rounded-md btn-xs' onClick={() => setDeletePost(post_id)}>
                            <Delete size='17' />Delete Post
                        </li>
                    </ul>
                </div>
            </div>
            <EditPostFromTextArea post_id={post_id} />
            {
                deletePost &&
                <div className=''>
                    <DeletePost props={{ deletePost, setDeletePost }} />
                </div>
            }
        </div>
    );
};

export default EditDeleteComponentMenu;