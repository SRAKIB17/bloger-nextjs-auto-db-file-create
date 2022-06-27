import axios from 'axios';
import React, { useState } from 'react';
import TextArea from '../../hooks/TextArea';

import styles from './NewPost.module.css'
import QuickPost from './QuickPost';

const NewPost = () => {

    const [quickVideoPost, setQuickVideoPost] = useState(false);
    const [quickTextPost, setQuickTextPost] = useState(true);
    const [quickImagePost, setQuickImagePost] = useState(false);

    function closeNewPost() {
        document.getElementById("newPostClose").style.width = "0";
    }

    const postHandle = async (event) => {
        event.preventDefault();
        const body = event.target.postBody.value;
        let postRefMode = '';
        let short_description = '';
        if (quickTextPost) {
            postRefMode = 'text'
        }
        else if (quickImagePost) {
            postRefMode = 'image'
        }
        else if (quickVideoPost) {
            postRefMode = 'video'
            short_description = event.target.short_description.value;
        }
        const post = {
            userID: '54fsdlj53',
            post_id: '534fsdfjo345',
            post_title: event.target.title.value,
            thumbnail: 'https://api.lorem.space/image/shoes?w=400&h=225',
            image: '',
            time: 'dec 15, 2021',
            short_description: short_description,
            category: event.target.category.value,
            postBody: body,
            sort: '5345345345',
            tags: event.target.tags.value.split(','),
            postRefMode: postRefMode
        }
        console.log(post)
        // const { data } = await axios.post('/api/test', post);

        // console.log(data)
    }
    return (
        <div>
            <div id="newPostClose" className={styles.NewPostNav + ' bg-base-100'}>
                <a href="#" className={styles.closebtn} onClick={closeNewPost}>&times;</a>

                <div>
                    <QuickPost props={{ quickVideoPost, setQuickVideoPost, quickTextPost, setQuickTextPost, quickImagePost, setQuickImagePost }} />
                </div>
                <div>
                    <form action="" onSubmit={postHandle} className='flex flex-col gap-2 m-10'>

                        <input
                            type="text"
                            name="title"
                            id=""
                            className='input input-success form-control w-56 sm:w-80'
                            placeholder='Title'
                        />

                        {
                            quickVideoPost &&
                            <input
                                type="text"
                                name="short_description"
                                id=""
                                maxLength='1000'
                                className='input input-success form-control w-56 sm:w-80'
                                placeholder='Short description'
                            />
                        }
                        <input
                            type="text"
                            name="category"
                            id=""
                            className='input input-success form-control w-56 sm:w-80'
                            placeholder='Category'
                        />
                        <input
                            type="text"
                            name="tags"
                            id=""
                            className='input input-success form-control w-56 sm:w-80'
                            placeholder='Tags (separate with comma)'
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