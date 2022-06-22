import React from 'react';
import styles from '../NewPost/NewPost.module.css'

const ProfileEdit = () => {
    function closeNewPost() {
        document.getElementById("profileEdit").style.width = "0";
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
            <div id="profileEdit" className={styles.NewPostNav}>
                <a href="#" className={styles.closebtn} onClick={closeNewPost}>&times;</a>
                <div>
                    <form action="" onSubmit={postHandle} className='flex flex-col gap-2 m-10'>

                        <input
                            type="text"
                            name="title"
                            id=""
                            className='input input-success form-control w-56 sm:w-80'
                            placeholder='Title'
                        />

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
                        
                        <input type="submit" value="Post" className='btn rounded-3xl btn-primary text-white w-fit' />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default ProfileEdit;