/* eslint-disable @next/next/no-img-element */
import axios from 'axios';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { UserFullInfoProvider } from '../../../pages/_app';
import ImageUpload from '../../profile/NewPost/ImageUpload';
// import TextArea from '../../hooks/TextArea';
import { useRouter } from 'next/router'


import styles from '../../profile/NewPost/NewPost.module.css'
import QuickPost from '../../profile/NewPost/QuickPost';
import TextAreaEdit from './TextAreaEdit';
import usePrivatePageCheckUser from '../../hooks/checkUser/privatePageCheckUser';
// import QuickPost from './QuickPost';

const EditPostFormTextArea = ({ post, setEditPost, refetch }) => {
    const { _id, category, tags, image, postBy, postBodyCss, postBodyJs, postBody, postRefMode, post_id, post_title, short_description, sort, time, userID } = post
    const { user, user_details, isLoading, isAdmin } = useContext(UserFullInfoProvider);
    const asPath = useRouter()?.asPath
    usePrivatePageCheckUser(asPath)



    const textareaRef = useRef();
    const jsTextareaRef = useRef()
    const cssTextareaRef = useRef()
    const [thumbnail, setThumbnail] = useState(post?.thumbnail)
    const [thumbnailData, setThumbnailData] = useState('')

    const [quickVideoPost, setQuickVideoPost] = useState(false);
    const [quickTextPost, setQuickTextPost] = useState(true);

    function closeEditPostFormTextArea(id) {
        try {
            // document.getElementById("EditPostFormTextArea" + id).style.width = "0";
            setEditPost(null)
        }
        catch {

        }
    }
    //**************************************************************************************************************** */
    useEffect(() => {
        textareaRef.current.value = postBody
        jsTextareaRef.current.value = postBodyJs
        cssTextareaRef.current.value = postBodyCss
    }, [])

    // ---------------------------------------------JSON object sent backend-----------------------------------------
    const [NewPostLoading, setNewPostLoading] = useState(false);
    const [errMsg, setErrMsg] = useState('')

    const postHandle = async (event) => {
        setNewPostLoading(true)
        event.preventDefault();
        const body = event.target.postBody.value;
        let postRefMode = '';
        if (quickTextPost) {
            postRefMode = 'text'
        }

        else if (quickVideoPost) {
            postRefMode = 'video'

        }
        
        const post = {
            userID: user_details?.userID,
            post_id: post_id,
            post_title: event.target.title.value,
            thumbnail: thumbnail,
            image: '',
            time: 'dec 15, 2021',
            short_description: event.target.short_description.value,
            category: event.target.category.value,
            tags: event.target.tags.value.toLowerCase(),
            postBody: textareaRef.current.value,
            postBodyCss: cssTextareaRef.current.value,
            postBodyJs: jsTextareaRef.current.value,
            postBy: event?.target?.postBy?.value || 'user',
            // tags: event.target.tags.value.split(','),
            postRefMode: postRefMode
        }

        try {
            const { data } = await axios.put(`/api/post/update-post?email=${user_details?.email}&post_id=${post_id}`, post,
                {
                    headers: {
                        access_token: sessionStorage.getItem('accessAutoG'),
                        token: localStorage.getItem('token')
                    }
                });
            console.log(data)
            if (data?.message === 'success') {
                setErrMsg(<p className='text-green-600'>Success</p>)
                refetch()
                setEditPost(null)
                if (data?.result?.acknowledged) {
                    refetch()
                    setEditPost(null)
                }
            }
            else if (data?.message === 'error') {
                setErrMsg(<p className='text-red-600'>{data?.error}</p>)
            }

            // console.log(data)

        }
        finally {
            setNewPostLoading(false)

        }
    }

    // ----------------------------------------------for short_description --------------------------------
    const [disableBtn, setDisableBtn] = useState(true)
    const disabledBtnLength = (e) => {
        const length = e.target.value.trim().length;
        if (length >= 200 && length <= 500) {
            setDisableBtn(false)
        }
        else {
            setDisableBtn(true)
        }
    }
    const ShortDescriptionRef = useRef();
    const onchangeInput = (e) => {
        disabledBtnLength(e)
        autoHightIncreaseShortDescription(e)
    }

    const autoHightIncreaseShortDescription = (e) => {
        disabledBtnLength(e)
        e.target.style.height = 'auto';
        if (e.target.scrollHeight < 200) {
            e.target.style.height = e.target.scrollHeight + 'px'
        }
        else {
            e.target.style.height = 200 + 'px'
        }
    }

    return (
        <div>

            <div id={"EditPostFormTextArea" + post_id} className={styles.NewPostNav + ' bg-base-100 border-t b border-b'} style={{ zIndex: 100, position: 'absolute', width: '100%' }}>
                {
                    NewPostLoading &&
                    <div className=' w-60 mx-auto '>

                        <div className='fixed top-[50%] flex justify-center p-5 h-[100vh] z-50'>
                            <div className='animate-spin text-center border-r-4 w-40 h-40 rounded-[50%] border-red-600'>
                            </div>
                        </div>
                    </div>
                }
                <a href="#" className={styles.closebtn} onClick={() => closeEditPostFormTextArea(post_id)}>&times;</a>

                <div>
                    <QuickPost props={{ quickVideoPost, setQuickVideoPost, quickTextPost, setQuickTextPost }} />
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
                        <p className='text-red-600'>
                            {
                                errMsg
                            }
                        </p>

                        {
                            isAdmin?.admin &&
                            <select name="postBy" id="selectPostBy" className="select select-primary w-full max-w-xs" defaultValue=''>
                                <option value="admin">Admin</option>
                                <option value="user" selected>User</option>
                            </select>
                        }

                        <input
                            type="text"
                            name="title"
                            id=""
                            className='input input-primary form-control w-56 sm:w-80'
                            placeholder='Title'
                            defaultValue={post_title}
                            required
                        />


                        <p className='bg-info text-white w-fit p-[2px] rounded-md'>Note: this is for seo</p>
                        <div>
                            <p className='text-[10px] pt-2 p-1 text-primary'>Max Length 500:</p>
                            <textarea ref={ShortDescriptionRef}
                                name="short_description"
                                maxLength='500'
                                size='500'
                                minLength='150'
                                placeholder='Short description'
                                className='input input-success form-control w-56 sm:w-80'
                                onBlur={onchangeInput}
                                onKeyUp={(e) => disabledBtnLength(e)}
                                onChange={onchangeInput}
                                onInput={onchangeInput}
                                onCut={autoHightIncreaseShortDescription}
                                onPaste={autoHightIncreaseShortDescription}
                                onDrop={autoHightIncreaseShortDescription}
                                onKeyDown={autoHightIncreaseShortDescription}
                                defaultValue={short_description}
                                required
                            >
                            </textarea>
                        </div>
                        <div>
                            <ImageUpload props={{ setThumbnail, setThumbnailData }} />
                            <div className='shadow-md w-fit p-2'>
                                <img src={thumbnail} className='max-w-xs max-h-[100px] rounded-md' alt="" />
                            </div>
                        </div>

                        <input
                            type="text"
                            name="category"
                            id=""
                            className='input input-primary form-control w-56 sm:w-80'
                            placeholder='Category'
                            defaultValue={category}
                            required
                        />
                        <input
                            type="text"
                            name="tags"
                            id=""
                            className='input input-primary form-control w-56 sm:w-80'
                            placeholder='Tags (separate with comma)'
                            defaultValue={tags}
                            required
                        />
                        <TextAreaEdit props={{ cssTextareaRef, jsTextareaRef, textareaRef, post_id }} />
                        <input type="submit" value="Update" className='btn rounded-3xl btn-sm btn-primary text-white w-fit' disabled={disableBtn} />
                    </form>

                </div>
            </div>

        </div>
    );
};

export default EditPostFormTextArea;