import axios from 'axios';
import React, { useState } from 'react';
import TextArea from '../../hooks/TextArea';

import styles from './NewPost.module.css'

const NewPost = () => {

    function closeNewPost() {
        document.getElementById("newPostClose").style.width = "0";
    }

    const postHandle = async (event) => {
        event.preventDefault();
        const body = event.target.postBody.value;
        const post = {
            body: body
        }
        // console.log()
        const { data } = await axios.post('/api/test', post);
        console.log(data)
    }
    return (
        <div>
            <div id="newPostClose" className={styles.NewPost}>
                <a href="#" className={styles.closebtn} onClick={closeNewPost}>&times;</a>
                <div>
                    <form action="" onSubmit={postHandle} className='flex flex-col gap-2 m-10'>
                        
                        <input
                            type="text"
                            name="title"
                            id=""
                            className='input input-success form-control w-56 sm:w-80'
                            placeholder='Short description'
                        />
                        <input
                            type="text"
                            name="title"
                            id=""
                            className='input input-success form-control w-56 sm:w-80'
                            placeholder='Category'
                        />
                        <TextArea />
                        <input type="submit" value="Post" className='btn rounded-3xl btn-primary text-white w-fit' />
                    </form>

                </div>
            </div>

        </div>
    );
};

export default NewPost;