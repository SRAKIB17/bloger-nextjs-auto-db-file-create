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


    // ---------------------------------------------JSON object sent backend-----------------------------------------
    const [NewPostLoading, setNewPostLoading] = useState(false)
    const postHandle = async (event) => {
        setNewPostLoading(true)
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
            category: {
                name: event.target.category.value,
                tags: ['html'],
            },
            postBody: body,
            sort: '5345345345',
            postBy: event.target.postBy.value,
            // tags: event.target.tags.value.split(','),
            postRefMode: postRefMode
        }
        // console.log(post)
        try {
            const { data } = await axios.post('/api/post/newpost', post);
            if (data?.result?.acknowledged) {
                event.target.reset()
            }
            // console.log(data)

        }
        finally {
            setNewPostLoading(false)

        }
    }
    return (
        <div>

            <div id="newPostClose" className={styles.NewPostNav + ' bg-base-100'}>
                {
                    NewPostLoading &&
                    <div className=' w-60 mx-auto '>

                        <div className='fixed top-[50%] flex justify-center p-5 h-[100vh] z-50'>
                            <div className='animate-spin text-center border-r-4 w-40 h-40 rounded-[50%] border-red-600'>
                            </div>
                        </div>
                    </div>
                }
                <a href="#" className={styles.closebtn} onClick={closeNewPost}>&times;</a>

                <div>
                    <QuickPost props={{ quickVideoPost, setQuickVideoPost, quickTextPost, setQuickTextPost, quickImagePost, setQuickImagePost }} />
                </div>
                <div>
                    <div className='m-6 bg-info text-white p-3 rounded-md max-w-sm'>

                        <p className='font-mono texhi'>

                            {
                                quickVideoPost && <code>{` tips: .<vid or .<ifr or .<emb use for shortcut html tag.`}</code>

                            }

                        </p>
                        <p>
                            Support html and css
                        </p>
                    </div>
                    <form action="" onSubmit={postHandle} className='flex flex-col gap-2 m-10'>
                        <select name="postBy" id="" className="select select-primary w-full max-w-xs">
                            <option disabled selected>Post Roll</option>
                            <option value="admin">Admin</option>
                            <option value="user">User</option>
                        </select>
                        <input
                            type="text"
                            name="title"
                            id=""
                            className='input input-primary form-control w-56 sm:w-80'
                            placeholder='Title'
                            required
                        />


                        <p className='bg-info text-white w-fit p-[2px] rounded-md'>Note: this is for seo</p>
                        <input
                            type="text"
                            name="short_description"
                            id=""
                            maxLength='1000'
                            className='input input-primary form-control w-56 sm:w-80'
                            placeholder='Short description'
                            required
                        />

                        <input
                            type="text"
                            name="category"
                            id=""
                            className='input input-primary form-control w-56 sm:w-80'
                            placeholder='Category'
                            required
                        />
                        <input
                            type="text"
                            name="tags"
                            id=""
                            className='input input-primary form-control w-56 sm:w-80'
                            placeholder='Tags (separate with comma)'
                            required
                        />
                        <TextArea quickPost={quickVideoPost} />
                        <input type="submit" value="Post" className='btn rounded-3xl btn-primary text-white w-fit' />
                    </form>

                </div>
            </div>

        </div>
    );
};

export default NewPost;