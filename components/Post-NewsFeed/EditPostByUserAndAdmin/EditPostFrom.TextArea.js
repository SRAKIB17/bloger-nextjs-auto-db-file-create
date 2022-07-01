import axios from 'axios';
import React, { useEffect, useState } from 'react';
import TextArea from '../../hooks/TextArea';
// import TextArea from '../../hooks/TextArea';


import styles from '../../profile/NewPost/NewPost.module.css'
import QuickPost from '../../profile/NewPost/QuickPost';
// import QuickPost from './QuickPost';

const EditPostFromTextArea = () => {

    const getPost = {
        _id: 55635435,
        userID: '54fsdlj53',
        post_id: '2',
        post_title: 'StackOverFlow',
        thumbnail: 'https://api.lorem.space/image/shoes?w=400&h=225',
        image: '',
        time: 'dec 15, 2021',
        short_description: 'গিয়েছিলাম খিচুড়ি নিয়ে, সবাই আনন্দ করে খাইলো কিন্তু ৫০ টির মতো হিন্দু ধর্মাবলম্বী পরিবার খিচুড়ি গ্রহন কর         রেনি। কারণ তাদের ধর্মের বিধানানুযায়ী আজকের জন্য তা গ্রহন করতে নিষেধ করা হয়েছে। তাই তড়িঘড়ি করে এ ৫০ টি পরিবারের জন্য ফল-ফ্রুটসের        ব্যবস্থা করলাম।  আহা তাদের খুশি কে দেখে! কিছু কিছু সময় নিজেকে বিলিয়ে দিতে ইচ্ছে করে।',

        postBody: "So, as has been mentioned, that really isn't possible. However, there are some ways you can still be smart about it.\n" +
            '\n' +
            'Three of the five major browsers all allow you to see the zoom level of the browser, furthermore, should the browser be zoomed a window.onresize event is fired.\n' +
            '\n' +
            'IE:      event.view.devicePixelRatio           OR window.view.devicePixelRatio\n' +
            'Chrome:  event.currentTarget.devicePixelRatio  OR window.devicePixelRatio\n' +
            'Firefox: event.originalTarget.devicePixelRatio OR window.devicePixelRatio\n' +
            'Safari:  /* Not possible */\n' +
            'Opera:   /* Not possible */\n' +
            "I think the stuff after OR works based on something I noticed as I was messing around. The first ones I know work in at least the latest version of each one. Note that Safari and Opera both have the devicePixelRatio, however both never change. It's always just 1.\n" +
            '\n' +
            "The above is your easy way if you don't care that much. If you do, then you could try out the detect-zoom script, which I came across while looking for solutions to Safari and Opera.\n" +
            '\n' +
            "So what you can now do is get the zoom level, and then offset your zoom to where it doesn't do anything. So if I force my browser to 50% zoom, you just go to 200%. Thus, no change. Of course it will be a bit more complicated, you'll have to store the last browser zoom, the new browser zoom, and do some slightly more complicated math, but based on what you already have, that should be a breeze.\n" +
            '\n' +
            'Another idea might be to just listen for a resize event, and calculate based off the new visible size, but that might cause issues if the window is just resized. I think the above is going to be your best option, with perhaps a fallback alert to warn the user not to zoom if necessary.',
        sort: '5345345345',

        category: {
            name: 'Vegetables',
            tags: ['html','React', "Java"],
        },
        postRefMode: 'video',
        postBy: 'admin'
    }
    const [editPost, setEditPost] = useState({})
    useEffect(() => {
        setEditPost(getPost);
    }, [])

    const [quickVideoPost, setQuickVideoPost] = useState(false);
    const [quickTextPost, setQuickTextPost] = useState(true);
    const [quickImagePost, setQuickImagePost] = useState(false);

    function closeEditPostFromTextArea() {
        try {
            document.getElementById("EditPostFromTextArea").style.width = "0";
        }
        catch {

        }
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
        console.log(post)
        try {
            // const { data } = await axios.post('/api/post/newpost', post);
            // console.log(data)
            // if (data?.result?.acknowledged) {
            //     event.target.reset()
            // }
            // console.log(data)

        }
        finally {
            setNewPostLoading(false)

        }
    }
    return (
        <div>

            <div id="EditPostFromTextArea" className={styles.NewPostNav + ' bg-base-100'}>
                {
                    NewPostLoading &&
                    <div className=' w-60 mx-auto '>

                        <div className='fixed top-[50%] flex justify-center p-5 h-[100vh] z-50'>
                            <div className='animate-spin text-center border-r-4 w-40 h-40 rounded-[50%] border-red-600'>
                            </div>
                        </div>
                    </div>
                }
                <a href="#" className={styles.closebtn} onClick={closeEditPostFromTextArea}>&times;</a>

                <div>
                    <QuickPost props={{ quickVideoPost, setQuickVideoPost, quickTextPost, setQuickTextPost, quickImagePost, setQuickImagePost }} />
                </div>
                <div>
                    <div className='m-6 bg-info text-white p-3 rounded-md max-w-sm font-serif'>

                        <p className='font-mono texhi'>

                            {
                                quickVideoPost && <code>{` tips: .<vid or .<ifr or .<emb use for shortcut html tag.`}</code>

                            }

                        </p>
                        <p>
                            Support html and css

                        </p>
                        <p>
                            Note: See Documentation. Help {'>'} Documentation
                        </p>
                    </div>
                    <form action="" onSubmit={postHandle} className='flex flex-col gap-2 m-10'>
                        <select name="postBy" id="" className="select select-primary w-full max-w-xs"
                        defaultValue={getPost?.postBy}>
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
                            defaultValue={editPost?.post_title}
                            required
                        />


                        <p className='bg-info text-white w-fit p-[2px] rounded-md'>Note: this is for seo</p>
                        <input
                            type="text"
                            name="short_description"
                            id=""
                            maxLength='1000'
                            className='input input-primary form-control w-56 sm:w-80'
                            defaultValue={editPost?.short_description}
                            placeholder='Short description'
                            required
                        />

                        <input
                            type="text"
                            name="category"
                            id=""
                            className='input input-primary form-control w-56 sm:w-80'
                            placeholder='Category'
                            defaultValue={editPost?.category?.name}
                            required
                        />
                        <input
                            type="text"
                            name="tags"
                            id=""
                            className='input input-primary form-control w-56 sm:w-80'
                            placeholder='Tags (separate with comma)'
                            defaultValue={editPost?.category?.tags}
                            required
                        />
                        <TextArea quickPost={quickVideoPost} editBody={getPost?.postBody}/>
                        <input type="submit" value="Post" className='btn rounded-3xl btn-primary text-white w-fit' />
                    </form>

                </div>
            </div>

        </div>
    );
};

export default EditPostFromTextArea;